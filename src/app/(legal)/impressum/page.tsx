import TitleAndText from "@/components/legal/TitleAndText";
import { getMetadata } from "@/lib/getMetadata";
import { fetchImpressum } from "@/services/api/endpointsMock";

export const metadata = getMetadata("impressum")

export default async function Impressum() {
  const { title, subtitle, text } = await fetchImpressum();
  return <TitleAndText title={title} subtitle={subtitle} text={text} />;
}
