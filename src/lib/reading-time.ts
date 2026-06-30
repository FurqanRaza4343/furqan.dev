export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const plainText = content
    .replace(/\*\*/g, "")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/[#*`\[\]]/g, "")
    .trim();
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
