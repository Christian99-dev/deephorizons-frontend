import TitleAndText from "@/components/legal/TitleAndText";
import { fetchImpressum } from "@/services/api/endpointsMock";

export default async function Impressum() {
  const { title, subtitle, text } = await fetchImpressum();
  return <TitleAndText title={title} subtitle={subtitle} text={text} />;
}
