import PostHogAnalytics from './providers/PostHogProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PostHogAnalytics>{children}</PostHogAnalytics>
      </body>
    </html>
  )
} 