import { selectFourRandomCountries } from '../services/countriesService.js'

export async function getRandomCountries(){
    return selectFourRandomCountries()
}