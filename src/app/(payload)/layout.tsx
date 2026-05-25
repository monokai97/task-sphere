import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <RootLayout config={config}>{children}</RootLayout>
)
