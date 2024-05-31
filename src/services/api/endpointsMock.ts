import {
  type Networking,
  type Services,
  type Clients,
  type Legal,
  Hero,
  Footer,
} from "@/types/apiResponse";
import fsPromises from "fs/promises";
import path from "path";

/**
 * Config
 */
const MOCK_DATA_PATH = "cms";

/**
 * Fetch logic
 */
const fetchLocal = async (name: string): Promise<any> => {
  const filePath = path.join(process.cwd(), `${MOCK_DATA_PATH}/${name}`);
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData: any = JSON.parse(jsonData);
  return objectData;
};

/**
 * Endpoints
 */
export const fetchHero        = async (): Promise<Hero>       => fetchLocal("hero.json");
export const fetchServices    = async (): Promise<Services>   => fetchLocal("services.json");
export const fetchNetworking  = async (): Promise<Networking> => fetchLocal("networking.json");
export const fetchClients     = async (): Promise<Clients>    => fetchLocal("clients.json");
export const fetchImpressum   = async (): Promise<Legal>      => fetchLocal("impressum.json");
export const fetchAgb         = async (): Promise<Legal>      => fetchLocal("agb.json");
export const fetchDatenschutz = async (): Promise<Legal>      => fetchLocal("datenschutz.json");
export const fetchFooter      = async (): Promise<Footer>     => fetchLocal("footer.json");
