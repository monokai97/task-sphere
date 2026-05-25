import { RootLayout } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import React from 'react'

import './custom.css'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => <RootLayout config={config}>{children}</RootLayout>

export default Layout
