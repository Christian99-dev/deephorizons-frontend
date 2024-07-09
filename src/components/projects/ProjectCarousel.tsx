"use client";
import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Stop all videos when activeIndex changes
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <div className="h-full w-full flex">
      {/** Control Desktop */}
      <div className="w-1/4 xl:w-full xl:hidden">
        <ProjectCarouselNavigation
          allProjects={allProjects}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <div className="relative w-3/4 xl:w-full">
        {/** Control Desktop */}
        <ProjectSlide
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          items={allProjects.map(({ bild, name, video }, index) => {
            if (video) {
              return (
                <Video
                  key={video}
                  src={video}
                  poster={bild}
                  ref={(el) => (videoRefs.current[index] = el)}
                />
              );
            }

            return (
              <Image
                key={bild}
                className="absolute w-full h-full object-contain"
                src={bild}
                alt={`Bild zu(r) ${name}`}
                width={3000}
                height={3000}
              />
            );
          })}
        />

        {/** Control Mobile */}
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

const Video = React.forwardRef<
  HTMLVideoElement,
  {
    src: string;
    poster: string;
  }
>(({ src, poster }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const localRef = useRef<HTMLVideoElement | null>(null);

  useImperativeHandle(ref, () => localRef.current as HTMLVideoElement);

  const handlePlayPause = () => {
    if (localRef.current) {
      if (isPlaying) {
        localRef.current.pause();
      } else {
        localRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={localRef}
        poster={poster}
        className="absolute w-full h-full object-cover z-0"
        controls={false}
        disablePictureInPicture
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onMouseDown={(e) => e.preventDefault()}
        onTouchStart={(e) => e.preventDefault()}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded cursor-pointer"
        onClick={handlePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </div>
    </div>
  );
});

Video.displayName = 'Video';

export default ProjectCarousel;
