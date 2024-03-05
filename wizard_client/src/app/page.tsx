'use client'
import { useEffect, useState } from 'react'
import styles from "./page.module.css";
import { verdana } from "./config/confStyles";
import { WizardHouse } from '@/app/components/WizardHouse';
import type { IHouse } from "./types";
import { Spinner } from "./ui/Spinner/Spinner";
// import { BASE_URL } from "./config/config";
import { getWizardHouses } from './_api/houses';


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
        setHouses(data)

        console.log(data)

        // TODO: if deploy the server is success use the above
        // else refactor the response from the server to be of the same format
        // setHouses(data.houses) 
        setIsLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
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
        houses?.length > 0 ? houses.map((house: IHouse) => (
          <WizardHouse house={house} key={house.id}/>
          )) : (
            <div>could not load any wizard houses :(</div>
          )
        )
      }
    </main>
  );
}

