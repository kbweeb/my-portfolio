/** Prefix for static export on GitHub Pages (e.g. /my-portfolio). Empty locally. */
export function siteBasePath(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!base || base === "/") return ""
  return base.endsWith("/") ? base.slice(0, -1) : base
}

export function sitePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${siteBasePath()}${normalized}`
}
