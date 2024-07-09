import TitleAndText from "@/components/legal/TitleAndText";
import { getMetadata } from "@/lib/getMetadata";
import { fetchDatenschutz } from "@/services/api/endpointsMock";

export const metadata = getMetadata("datenschutz")

export default async function Datenschutz() {
  const { title, subtitle, text } = await fetchDatenschutz();
  return <TitleAndText title={title} subtitle={subtitle} text={text} />;
}
