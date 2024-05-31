"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/apiResponse";
import ProjectSlide from "@/components/slides/ProjectSlide";
import ProjectCarouselNavigation from "@/components/projects/ProjectCarouselNavigation";

const ProjectCarousel = ({
  allProjects,
  startId,
}: {
  allProjects: Project[];
  startId: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(startId);

  return (
    <div className="h-full w-full flex">
      {/** Controll Desktop */}
      <div className="w-1/4 xl:w-full xl:hidden">
        <ProjectCarouselNavigation
          allProjects={allProjects}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <div className="relative w-3/4 xl:w-full">
        {/** Controll Desktop */}
        <ProjectSlide
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          items={allProjects.map(({ bild, name }) => (
            <Image
              className="absolute w-full h-full object-cover"
              src={bild}
              alt={`Bild zu(r) ${name}`}
              width={1000}
              height={1000}
            />
          ))}
        />

        {/** Controll Mobile */}
        <div className="hidden absolute w-full bottom-0 xl:block z-10">
          <ProjectCarouselNavigation
            allProjects={allProjects}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
