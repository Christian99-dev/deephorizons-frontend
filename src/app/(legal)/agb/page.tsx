import TitleAndText from "@/components/legal/TitleAndText";
import { fetchAgb } from "@/services/api/endpointsMock";

export default async function Agb() {
  const { title, subtitle, text } = await fetchAgb();
  return <TitleAndText title={title} subtitle={subtitle} text={text} />;
}
