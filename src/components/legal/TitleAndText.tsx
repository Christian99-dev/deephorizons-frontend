import React from "react";

export default async function TitleAndText({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <div className="mx-[--spacing-16] mt-[--spacing-16] xl:text-center">
      <h1 className="font-bold fs-4">{title}</h1>
      <h2 className="fs-8 pb-[--spacing-8]">{subtitle}</h2>
      <div className="fs-10 policy" dangerouslySetInnerHTML={{__html : text}}/>
    </div>
  );
}
