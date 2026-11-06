/** @type {import('next').NextConfig} */

// O nome do repositório é lido automaticamente do GitHub Actions
// (GITHUB_REPOSITORY = "dono/repositorio"). Localmente, usa o valor padrão abaixo.
const DEFAULT_REPO_NAME = "semear-kids";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? DEFAULT_REPO_NAME;

// Repositórios "usuario.github.io" são servidos na raiz, sem basePath.
const isUserSite = repoName.endsWith(".github.io");
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd && !isUserSite ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
