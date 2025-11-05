import { getNamesAndFlags } from '../services/countriesService.js'

export async function getRandomCountries(){
    return getNamesAndFlags()
}