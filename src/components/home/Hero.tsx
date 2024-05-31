import Expand from "@/components/shared/Expand";
import Video from "@/components/shared/Video";
import Icon from "@/components/shared/Icon";
import { fetchHero } from "@/services/api/endpointsMock";

export default async function Hero() {
  const { title, liste } = await fetchHero();

  return (
    <section className="relative w-full h-screen xl:h-[700px] md:h-[600px]">
      {/** Background */}
      <Video src="./videos/hero_video.mp4" speed={3} autoPlay={true} />

      {/** Box */}
      <div
        className="absolute 
        pl-[--spacing-11] 
        border-l-4 
        top-1/4 
        left-[15%] 
        mix-blend-difference 
        xl:left-1/2 
        xl:top-1/2 
        xl:translate-x-[-50%] 
        xl:translate-y-[-50%] xl:m-auto"
      >
        {/** Heading */}
        <h1 className="pb-[--spacing-10] font-bold text-white hero-title text animate-fadeInLeft heading-lineheight-hero">
          {title}
        </h1>

        {/** Points */}
        <Expand innerClassName="flex flex-col gap-[--spacing-4] fs-7 font-extralight text-white">
          {liste.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Expand>
      </div>

      <div className="absolute bottom-0 cursor-pointer transition-all hover:pb-[--spacing-11] w-full flex justify-center pb-[--spacing-10] animate-fadeInTop">
        <Icon name="down" link="#below-hero" />
      </div>
    </section>
  );
}
