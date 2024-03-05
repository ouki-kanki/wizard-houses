import { BASE_URL } from "@/app/config/config";

export async function getWizardHouses(query?: string) {
  try {
      const response = await fetch(query ? `${BASE_URL}?name=${encodeURIComponent(query)}` : BASE_URL)  
      return response.json();
  } catch (error) {
    console.log(error)
  }  
}
