'use client'
import { useEffect, useState } from 'react'
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

export default function Home({ searchParams: { name }}: Params) {
  const [isLoading, setIsLoading] = useState(false)
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // TODO: this is better with useReducer
        const data = await getWizardHouses(name)
        setHouses(data.houses)
        setIsLoading(false)
      } catch (error) {
        // TODO: handle the error
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [name])

  return (
    <main className={`${styles.main} ${verdana.className}`}>
      {isLoading ? (
        <Spinner/>
      ) : (
        houses.length > 0 ? houses.map((house: IHouse) => (
          <WizardHouse house={house} key={house._id}/>
          )) : (
            <div>could not load any wizard houses</div>
          )
        )
      }
    </main>
  );
}

