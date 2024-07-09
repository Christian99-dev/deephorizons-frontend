// seoUtils.ts

import { fetchSeo } from "@/services/api/endpointsMock";
import { Metadata, PageKey } from "@/types/metadata";

export async function getMetadata(pageKey: PageKey): Promise<Metadata | null> {
  try {
    const { pages, url, title } = await fetchSeo();
    const page = pages[pageKey];

    if (!page) {
      console.error(`No SEO data found for page key: ${pageKey}`);
      return null;
    }

    const fullTitle = `${title} | ${page.title}`;
    const pageUrl = `${url}/${pageKey}`;

    const metadata: Metadata = {
      title: fullTitle,
      description: page.desc,
      canonicalUrl: pageUrl,
      og: {
        title: fullTitle,
        description: page.desc,
        type: "website",
        url: pageUrl,
        site_name: title,
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: page.desc,
      },
    };

    return metadata;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}
