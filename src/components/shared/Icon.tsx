import Image from "next/image";
import DynamicImage from "./DynamicImage";

const Icon = ({
  name,
  link,
  className,
  onClick,
}: {
  name: IconKey;
  link?: string;
  className?: string;
  onClick?: () => any;
}) => {
  const imageElement = (
    <DynamicImage
      type="SSG"
      onClick={onClick}
      className={`${className} icon-size transition-all hover:scale-125 cursor-pointer`}
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      width={48}
      height={48}
    />
  );

  if (!link) return imageElement;

  if (link && link.startsWith("#")) return <a href={link}>{imageElement}</a>;

  if (link && !link.startsWith("#"))
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {imageElement}
      </a>
    );
};

export type IconKey =
  | "fiverr"
  | "linkedin"
  | "down"
  | "play"
  | "play-black"
  | "white-left"
  | "white-right"
  | "white-down"
  | "whatsapp"
  | "instagram"
  | "youtube";

export default Icon;
