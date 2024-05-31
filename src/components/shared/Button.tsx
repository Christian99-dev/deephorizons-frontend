import React from "react";

const Button = ({
  text,
  className,
  link,
  transparent,
}: {
  text: string;
  className?: string;
  link?: string;
  transparent?: boolean;
}) => {
  const buttonElement = (
    <button
      className={`${className} 
        relative 
        w-min 
        whitespace-nowrap 
        flex 
        px-[--spacing-8] 
        py-[--spacing-4] 
        rounded-full 
        border-2 
        items-center 
        justify-center 
        overflow-hidden 
        hover:scale-105 
        transition-all 
        before:absolute 
        before:h-0 
        before:w-0 
        before:rounded-full 
        hover:text-white
        ${transparent ? "border-white" : "border-black"}
        ${transparent ? "bg-transparent" : "bg-white"} 
        ${transparent ? "before:bg-transparent" : "before:bg-black"}
        before:duration-300 
        before:ease-out 
        hover:before:h-56 
        hover:before:w-full
        xs:w-full`}
    >
      <span className="relative z-10 border-black fs-10">{text}</span>
    </button>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {buttonElement}
    </a>
  ) : (
    buttonElement
  );
};

export default Button;
