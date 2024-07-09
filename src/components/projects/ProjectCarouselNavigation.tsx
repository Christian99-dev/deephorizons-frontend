import React from "react";
import { Project } from "@/types/apiResponse";
import getNextId from "@/lib/getNextId";
import Dots from "@/components/projects/Dots";
import NameAndDescription from "./NameAndDescription";

export default function ProjectCarouselNavigation({
  allProjects,
  activeIndex,
  setActiveIndex,
}: {
  allProjects: Project[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { name, beschreibung, link } = allProjects[activeIndex];
  const maxLength = allProjects.length;

  return (
    <div className="relative w-full h-full bg-black text-white text-center flex flex-col justify-end xl:bg-opacity-50">
      <div
        className={`
        absolute
        top-1/3
        -translate-y-[50%]

        xl:static
        xl:translate-y-[0%]

        p-[--spacing-5]
        flex 
        flex-col 
        justify-center`}
      >
        <NameAndDescription name={name} beschreibung={beschreibung} />
        {link && <a className="font-bold pt-[--spacing-2]" href={link}>{link.replace('https://','')}</a>}
      </div>

      <Dots
        count={maxLength}
        activeIndex={activeIndex}
        onLeftButton={() =>
          setActiveIndex(getNextId(maxLength, activeIndex, -1))
        }
        onRightButton={() =>
          setActiveIndex(getNextId(maxLength, activeIndex, 1))
        }
        onSelect={(newIndex) => setActiveIndex(newIndex)}
      />
    </div>
  );
}
