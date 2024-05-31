import { fetchClients } from "@/services/api/endpointsMock";
import Marquee from "react-fast-marquee";

export default async function Clients() {
  const { title, clients } = await fetchClients();
  return (
    <section className="py-[--spacing-16] spacing-py-mobile-sections">
      <h2 className="fs-4 font-bold pb-[--spacing-8] px-[--spacing-16] text-center">
        {title}
      </h2>

      <Marquee speed={150} gradient gradientWidth={50}>
        {clients.map((client, key) => (
          <div key={key} className="w-52 ml-52 xl:ml-24 xl:w-40">
            <img className="m-auto" src={client.img}></img>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
