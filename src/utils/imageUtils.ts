/**
 * Utility function to resolve image URLs from data.json
 * @param path - The image path from data.json
 * @returns - The correct URL to use in the src attribute
 */
export function resolveImageUrl(path: string): string {
  if (!path) return ''

  // Handle image paths from data.json that start with './assets/'
  if (path.startsWith('./assets/')) {
    return path.replace('./assets/', '/assets/')
  }

  // If path is already absolute with leading slash, keep it
  if (path.startsWith('/')) {
    return path
  }

  // If it's just a path without leading dot or slash, make sure it's properly formed
  if (!path.startsWith('assets/') && !path.startsWith('/assets/')) {
    return `/assets/${path}`
  }

  // For paths that already have 'assets/' but no leading slash
  if (path.startsWith('assets/')) {
    return `/${path}`
  }

  return path
}
