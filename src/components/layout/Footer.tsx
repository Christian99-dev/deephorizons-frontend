import { fetchFooter } from "@/services/api/endpointsMock";
import Link from "next/link";

export default async function Footer({ alt = false }: { alt?: boolean }) {
  const {company, text} = await fetchFooter()
  return (
    <footer className="text-white">
      <div
        className={`
      bg-black 
      flex 
      justify-between 
      items-center  
      
      ${alt ? "p-[--spacing-5]" : "px-[--spacing-16] py-[--spacing-7]"} 
      ${alt ? "border-t-2 border-t-white" : ""} 
      ${alt ? "" : "xl:flex-col"} 
      ${alt ? "" : "xl:gap-[--spacing-7]"} 
      ${alt ? "gap-5" : ""} 
      ${alt ? "flex-wrap" : ""} 
      `}
      >
        <Link href="/" className="fs-9 font-bold">
          {company}
        </Link>
        {!alt && (
          <p className="fs-10 font-light">
            {text}
          </p>
        )}
        <div
          className={`
        flex 
        text-sm 
        font-medium 
        ${alt ? "" : "xl:flex-col"} `}
        >
          <Link
            href="/impressum"
            className={`
            ${alt ? "" : "xl:border-none"} 
            ${alt ? "" : "xl:p-0"} 
            pr-1 border-r-[2px] border-white hover:text-gray-200 fs-10 xl:text-center`}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className={`
            ${alt ? "" : "xl:p-0"} 
            px-1 hover:text-gray-200 fs-10 xl:text-center`}
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
