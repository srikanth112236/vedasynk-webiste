export type BlogSearchItem = {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  readingTime: string;
};

export function searchBlogIndex(
  items: BlogSearchItem[],
  query: string,
  limit = 8,
): BlogSearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = items
    .map((item) => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const cat = item.category.toLowerCase();
      const slug = item.slug.toLowerCase();
      let score = 0;
      if (title.startsWith(q)) score += 100;
      if (title.includes(q)) score += 60;
      if (cat.includes(q)) score += 40;
      if (slug.includes(q.replace(/\s+/g, "-"))) score += 35;
      if (desc.includes(q)) score += 20;
      q.split(/\s+/).forEach((word) => {
        if (word.length < 2) return;
        if (title.includes(word)) score += 12;
        if (desc.includes(word)) score += 6;
      });
      return { item, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((row) => row.item);
}
