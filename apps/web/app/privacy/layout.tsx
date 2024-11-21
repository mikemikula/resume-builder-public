import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Michael V. Mikula',
  description: 'Privacy policy and data collection practices for Michael V. Mikula\'s personal website.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 