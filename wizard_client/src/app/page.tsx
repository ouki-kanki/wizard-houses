import styles from "./page.module.css";
import { verdana } from "./config/confStyles";
import { WizardHouse } from '@/app/components/WizardHouse';
import type { IHouse } from "./types";
import { Spinner } from "./ui/Spinner/Spinner";
import { BASE_URL } from "./config/config";


// TODO: move this from here
async function getWizardHouses(query?: string) {
  try {
      const response = await fetch(query ? `${BASE_URL}?name=${encodeURIComponent(query)}` : BASE_URL)  
      return response.json();
  } catch (error) {
    console.log(error)
  }  
}

type Params = {
  searchParams: {
    name?: string
  }
}

export default async function Home({ searchParams: { name }}: Params) {
  const { houses } = await getWizardHouses(name)
  
  return (
    <main className={`${styles.main} ${verdana.className}`}>
      {houses && houses.map((house: IHouse) => (
        <WizardHouse house={house} key={house._id}/>
        ))}
    </main>
  );
}

