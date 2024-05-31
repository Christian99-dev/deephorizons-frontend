import TitleAndText from "@/components/legal/TitleAndText";
import { fetchDatenschutz } from "@/services/api/endpointsMock";

export default async function Datenschutz() {
  const { title, subtitle, text } = await fetchDatenschutz();
  return <TitleAndText title={title} subtitle={subtitle} text={text} />;
}
