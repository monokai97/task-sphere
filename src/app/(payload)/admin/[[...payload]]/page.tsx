import { RootPage } from '@payloadcms/next/views'
import config from '@/payload.config'

type Args = {
  params: {
    payload: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

const Page = ({ params, searchParams }: Args) => RootPage({ config, params, searchParams })

export default Page
