import Footer from "@/components/layout/Footer";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import { fetchServices } from "@/services/api/endpointsMock";

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
