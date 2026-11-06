import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

type AppImageProps = Omit<ImageProps, "src"> & { src: string };

/** next/image com prefixo de basePath (GitHub Pages) e lazy loading por padrão. */
export function AppImage({ src, alt, ...props }: AppImageProps) {
  return <Image src={asset(src)} alt={alt} {...props} />;
}
