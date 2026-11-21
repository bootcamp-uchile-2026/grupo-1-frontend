// Vite statically analyzes this at build time and bundles all matching images
const assetImages = import.meta.glob<{ default: string }>(
  '/src/assets/img/**/*.{webp,png,jpg,jpeg,svg}',
  { eager: true }
);

export function resolveAssetImage(input?: string | string[]): string {
  const rawPath = Array.isArray(input) ? input[0] : input;
  if (!rawPath) return '';
  if (/^https?:\/\//i.test(rawPath)) return rawPath;

  const matched = assetImages[rawPath];
  if (matched) {
    return matched.default;
  }
  
  return '';
}