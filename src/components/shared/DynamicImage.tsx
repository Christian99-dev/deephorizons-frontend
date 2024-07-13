import Image from "next/image";

const DynamicImage = ({
  type = "SSR",
  onClick,
  className,
  src,
  alt,
  width = 500,
  height = 500,
}: {
  type: "SSR" | "SSG";
  onClick?: () => any;
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return type === "SSR" ? (
    <Image
      onClick={onClick}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  ) : (
    <img onClick={onClick} className={className} src={src} alt={alt} />
  );
};

export default DynamicImage;
