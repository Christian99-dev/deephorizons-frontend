import { fetchNetworking } from "@/services/api/endpointsMock";
import Image from "next/image";
import Icon from "@/components/shared/Icon";
import Button from "@/components/shared/Button";
import Parallax from "@/components/shared/Parallax";

export default async function Networking() {
  const {
    title,
    text,
    subtext,
    img,
    icons,
    button: { text: buttonText, link: buttonLink },
  } = await fetchNetworking();

  return (
    <section className="w-full h-screen xl:h-max flex">
      {/**Bar */}
      <div className="w-[--spacing-16] flex flex-col items-center gap-[--spacing-6] xl:hidden">
        <p className="font-semibold fs-7 -rotate-90 mt-36 xl:mt-0 xl:mb-36 sm:mb-20">
          DeepHorizons
        </p>
        <div className="flex-1"></div>
        {icons.map((icon, index) => {
          const { key, link } = icon;
          return (
            <Icon name={key} link={link} key={index} className="xl:hidden" />
          );
        })}
        <div className="h-[--spacing-12]" />
      </div>

      <div className="flex w-full relative">
        {/**Image Left */}
        <Parallax
          strength={400}
          className="w-[50%] xl:absolute xl:top-0 xl:bottom-0 xl:right-0 xl:left-0 xl:w-[100%]"
        >
          <Image
            className="h-full w-full object-cover"
            src={img}
            alt="img"
            width={1000}
            height={1000}
          />
        </Parallax>

        <div className="hidden xl:block xl:bg-black xl:bg-opacity-50 xl:absolute xl:top-0 xl:bottom-0 xl:right-0 xl:left-0"></div>

        {/**Textbox */}
        <div
          className="
          w-[50%]
          flex 
          flex-col 
          items-center 
          justify-center 
          px-[--spacing-16]
          spacing-py-mobile-sections
          xl:w-[100%] 
          xl:text-white
          relative"
        >
          {/**Content */}
          <h2 className="fs-4 font-bold pb-[--spacing-8] z-20">{title}</h2>
          <p className="fs-10 font-normal text-center pb-[--spacing-7] z-20">
            {text}
          </p>
          <p className="fs-9 font-medium text-center pb-[--spacing-7] z-20">
            {subtext}
          </p>

          {/**Button */}
          <Button
            text={buttonText}
            link={buttonLink}
            className="block xl:hidden"
          />
          <Button
            text={buttonText}
            link={buttonLink}
            transparent
            className="hidden xl:block"
          />

          {/**Network Animation */}
          {/* <Image
            src="/images/network.png"
            className="absolute left-[-50%] z-0 opacity-25 object-cover w-[80%] h-[80%] select-none"
            alt="img"
            width="1000"
            height="1000"
          /> */}
        </div>
      </div>
    </section>
  );
}
