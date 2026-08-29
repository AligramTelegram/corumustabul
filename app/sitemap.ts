import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { getActivePros } from "@/lib/pros";
import { posts } from "@/data/rehber";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const u = (path: string) => `${site.url}${path}`;
  const now = new Date();

  const staticPaths = [
    "/",
    "/kategoriler",
    "/ara",
    "/rehber",
    "/isletme-ekle",
    "/hakkinda",
    "/iletisim",
    "/cerez-politikasi",
  ].map((p) => ({ url: u(p), lastModified: now }));

  const rehber = posts.map((p) => ({
    url: u(`/rehber/${p.slug}`),
    lastModified: new Date(p.updated ?? p.date),
    priority: 0.6,
  }));

  const hubs = categories.map((c) => ({
    url: u(`/${c.slug}`),
    lastModified: now,
    priority: 0.8,
  }));

  const combos = categories.flatMap((c) =>
    districts.map((d) => ({
      url: u(`/${c.slug}/${d.slug}`),
      lastModified: now,
      priority: 0.7,
    })),
  );

  const ilceler = districts.map((d) => ({
    url: u(`/ilce/${d.slug}`),
    lastModified: now,
    priority: 0.6,
  }));

  const ustalar = (await getActivePros()).map((p) => ({
    url: u(`/usta/${p.slug}`),
    lastModified: now,
    priority: 0.5,
  }));

  return [
    ...staticPaths,
    ...hubs,
    ...combos,
    ...ilceler,
    ...ustalar,
    ...rehber,
  ];
}
