import { getDomainString } from '@/lib/utils/domain'

export default function Canonical() {
  const domain = getDomainString()
  
  return (
    <>
      <link rel="canonical" href={domain} />
      <meta property="og:url" content={domain} />
    </>
  )
} 