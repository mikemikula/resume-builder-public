/**
 * Get the base domain URL with fallback
 * @returns URL object for the domain
 */
export const getDomainUrl = (): URL => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'
  return new URL(domain)
}

/**
 * Get the domain string with fallback
 * @returns string representation of the domain
 */
export const getDomainString = (): string => {
  return process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'
}

/**
 * Get the domain without protocol
 * @returns domain without http(s)://
 */
export const getDomainWithoutProtocol = (): string => {
  const domain = getDomainString()
  return domain.replace(/^https?:\/\//, '')
}

/**
 * Create a full URL by joining the domain with a path
 * @param path - path to append to domain
 * @returns full URL string
 */
export const createUrl = (path: string): string => {
  const url = new URL(path, getDomainString())
  return url.toString()
} 