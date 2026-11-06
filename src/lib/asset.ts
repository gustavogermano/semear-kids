/**
 * Prefixa caminhos de /public com o basePath (necessário no GitHub Pages,
 * onde o site fica em /nome-do-repositorio/).
 */
export function asset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
