export function getYoutubeId(input) {
  if (!input) return null

  if (!input.includes('/') && !input.includes('http')) return input

  try {
    const url = new URL(input)
    if (url.hostname.includes('youtu.be')) return url.pathname.replace('/', '')
    if (url.hostname.includes('youtube.com')) return url.searchParams.get('v')
  } catch {
    return null
  }

  return null
}
