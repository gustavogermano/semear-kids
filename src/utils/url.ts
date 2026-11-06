/** Remove barras finais de uma URL. */
export function trimTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}
