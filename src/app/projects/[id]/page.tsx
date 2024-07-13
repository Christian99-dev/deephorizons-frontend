import Footer from "@/components/layout/Footer";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import { getMetadata } from "@/lib/getMetadata";
import { fetchServices } from "@/services/api/endpointsMock";

export const metadata = getMetadata("projects")

export async function generateStaticParams() {
  const { projects } = await fetchServices();
  return projects.map((_, index) => ({
    id: index.toString(), // Da der Index eine Zahl ist, konvertiere ihn in eine Zeichenkette
  }));
}


export default async function Projects({ params }: { params: { id: number } }) {
  const { projects } = await fetchServices();
  const validId = params.id <= projects.length - 1 && params.id >= 0;
  
  return (
    <div>
      <main className="h-screen w-screen flex flex-col">
        <ProjectCarousel
          allProjects={projects}
          startId={validId ? params.id : 0}
        />
        <Footer alt/>
      </main>
    </div>
  );
}
