import type { Child } from 'hono/jsx'
import { Style } from 'hono/css'

export function BaseLayout({ title, bodyClass, children }: { title: string; bodyClass?: Promise<string> | string; children: Child }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script defer src="/_vercel/speed-insights/script.js" />
        <Style />
      </head>
      <body class={bodyClass}>{children}</body>
    </html>
  )
}
