import Image from "next/image";
import { fetchServices } from "@/services/api/endpointsMock";
import Button from "@/components/shared/Button";
import ServiceSlide from "@/components/slides/ServiceSlide";
import Parallax from "@/components/shared/Parallax";
import { ButtonType, type IconType, type Project } from "@/types/apiResponse";
import Link from "next/link";
import Icon from "../shared/Icon";
import DynamicImage from "../shared/DynamicImage";

export default async function ServicesPreview() {
  const { title, text, projects, icons, button } = await fetchServices();

  return (
    <section className="w-full h-screen flex flex-col justify-center px-[--spacing-16] animate-fadeInLeft xl:h-min spacing-py-mobile-sections">
      {/**Title */}
      <h2 className="fs-4 font-bold pb-[--spacing-8] lg:text-center">
        {title}
      </h2>

      {/**Main */}
      <div className="flex gap-10 animate-fadeInLeft lg:flex-col-reverse">
        <LeftBox text={text} icons={icons} button={button} />
        <Carousel projects={projects} />
      </div>
    </section>
  );
}

const LeftBox = ({
  text,
  icons,
  button,
}: {
  text: string;
  icons: IconType[];
  button: ButtonType;
}) => {
  const { text: buttonText, link: buttonLink } = button;
  return (
    <div className="flex flex-col w-1/6 animate-fadeInLeft lg:w-full lg:items-center lg:gap-[--spacing-6]">
      {/**Text */}
      <p className="font-light mb-auto fs-10 lg:text-center">{text}</p>

      {/**Button */}
      <Button
        text={buttonText}
        link={buttonLink}
        className="mb-[--spacing-8] lg:mb-0"
      />

      {/**Icons */}
      <div className="flex gap-[--spacing-4]">
        {icons.map((icon, index) => {
          const { key, link } = icon;
          return <Icon name={key} link={link} key={index} />;
        })}
      </div>
    </div>
  );
};

const Carousel = ({ projects }: { projects: Project[] }) => (
  <div className="flex w-5/6 border-l-[3px] border-black gap-8 overflow-hidden py-[--spacing-8] relative h-min items-center lg:w-full">
    {/**Items */}
    <ServiceSlide
      className="animate-fadeInLeftHard"
      items={projects.map((project, index) => (
        <ProjectCard
          project={project}
          fromBottom={index % 2 === 0}
          key={index}
          index={index}
        />
      ))}
      spaceBetween={30}
    />

    {/**Mini text */}
    <p className="absolute top-[-6px] left-[-5px] fs-10 font-bold animate-fadeInLeft">
      Deep Horizons
    </p>
  </div>
);

const ProjectCard = ({
  project,
  fromBottom,
  index,
}: {
  project: Project;
  fromBottom: boolean;
  index: number;
}) => {
  const { thumbnail, name } = project;
  return (
    <Parallax
      strength={150}
      className="aspect-square w-96 lg:w-60"
      fromBottom={fromBottom}
    >
      <DynamicImage
        type="SSG"
        alt="beschreibung"
        src={thumbnail}
        width={1000}
        height={1000}
        className="object-cover"
      />
      <Link
        href={`projects/${index}`}
        className="absolute top-0 left-0 right-0 bottom-0 p-5 z-21 flex bg-black text-white justify-center items-center font-semibold fs-9 bg-opacity-30 cursor-pointer transition-all duration-300 opacity-0 hover:opacity-100 text-center"
      >
        {name}
      </Link>
    </Parallax>
  );
};
