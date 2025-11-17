import { getOptions } from '../services/countriesService.js'

export async function getRandomCountries(){
    return getOptions()
}