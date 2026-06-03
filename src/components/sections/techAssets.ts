const normalizeTechName = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9.#]+/g, " ")
    .trim();

const assetMap: Array<[string, string]> = [
  ["react astro", "react-sticker.png"],
  ["asp.net core", "ASP.NET-Core-Tag.png"],
  [".net", "ASP.NET-Core-Tag.png"],
  ["astro", "astro-sticker.png"],
  ["c#", "C%23-sticker.png"],
  ["claude code", "claude-badge.png"],
  ["codex", "codex-badge.png"],
  ["docker", "docker-sticker.png"],
  ["github actions", "GithubAction-mini-processCard.png"],
  ["java", "Java-badge.png"],
  ["javascript", "javaScript-highlighted%20note.png"],
  ["mysql", "MySQL-label.png"],
  ["php", "PHP-badge.png"],
  ["postgresql", "PostgreSQL-label.png"],
  ["python", "python-sticker.png"],
  ["railway", "Railway-badge.png"],
  ["react", "react-sticker.png"],
  ["tailwind", "Tailwind-label.png"],
  ["typescript", "TypeScript-post-it.png"],
  ["vue.js", "Vue-sticker.png"],
  ["vuejs", "Vue-sticker.png"],
  ["vue", "Vue-sticker.png"],
  ["whisper", "whisper-label.png"],
];

export const getTechAssetSrc = (tech: string) => {
  const normalizedTech = normalizeTechName(tech);
  const exactAsset = assetMap.find(([key]) => normalizedTech === key)?.[1];
  const partialAsset = assetMap.find(([key]) => normalizedTech.includes(key))?.[1];
  const matchedAsset = exactAsset ?? partialAsset;

  return matchedAsset ? `/images/skills/${matchedAsset}` : undefined;
};

export const hasTechAsset = (tech: string) => Boolean(getTechAssetSrc(tech));
