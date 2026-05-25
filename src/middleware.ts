import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { unsealData, sealData } from 'iron-session'
import { getPayload } from '@/lib/payload'
import { sessionOptions, SessionData } from '@/lib/session'
import { sessionSchema } from '@/lib/validation/session'

export const runtime = 'nodejs'

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('todo_guest_session')?.value
  let response = NextResponse.next()
  let newSessionCreated = false

  try {
    let guestId: string | undefined

    if (sessionCookie) {
      try {
        const sessionData = await unsealData<SessionData>(sessionCookie, {
          password: sessionOptions.password,
        })
        
        // Validar formato
        const result = sessionSchema.safeParse(sessionData)
        if (result.success) {
          guestId = result.data.guestId
        }
      } catch (e) {
        console.error('[Middleware] Decryption/Validation Error:', e)
      }
    }

    // Si no hay guestId válido, regenerar
    if (!guestId) {
      guestId = crypto.randomUUID()
      const encryptedSession = await sealData({ guestId }, {
        password: sessionOptions.password,
      })
      
      response.cookies.set('todo_guest_session', encryptedSession, {
        ...sessionOptions.cookieOptions,
      })
      newSessionCreated = true
    }

    // Upsert en Payload
    if (guestId) {
      const payload = await getPayload()
      try {
        const existingSessions = await payload.find({
          collection: 'guest-sessions',
          where: {
            id: {
              equals: guestId,
            },
          },
        })

        if (existingSessions.totalDocs > 0) {
          await payload.update({
            collection: 'guest-sessions',
            id: guestId,
            data: {
              lastActive: new Date().toISOString(),
            },
          })
        } else {
          await payload.create({
            collection: 'guest-sessions',
            data: {
              id: guestId,
              lastActive: new Date().toISOString(),
            },
          })
        }
      } catch (dbError) {
        console.error('[Middleware] Database Upsert Error:', dbError)
      }
    }

    if (newSessionCreated && request.nextUrl.pathname === '/') {
       // Opcional: añadir query param si es la home
       const url = request.nextUrl.clone()
       url.searchParams.set('newSession', 'true')
       return NextResponse.redirect(url)
    }

  } catch (error) {
    console.error('[Middleware] Critical Error:', error)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
