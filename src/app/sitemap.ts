import { fetchSeo, fetchServices } from "@/services/api/endpointsMock";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [seoData, servicesData] = await Promise.all([fetchSeo(), fetchServices()]);

  const { url } = seoData;
  const { projects } = servicesData;

  const sitemap: MetadataRoute.Sitemap  = [
    {
      url: `${url}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${url}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${url}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  projects.forEach(({id}) => {
    sitemap.push({
        url: `${url}/projects/${id}`,
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.9,
      })
  })

  return sitemap
}
