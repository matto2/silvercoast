import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: "Silver Coast Fitness — Health Tips",
    description: "Balance and fall prevention tips for adults 55+ in Santa Cruz County.",
    site: context.site ?? new URL("/", context.request.url),
    items: posts.map(({ id, data }) => ({
      link: `/health-tips/${id}/`,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
    })),
  });
}
