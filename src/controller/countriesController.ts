import { getSelectedCountries } from '../services/countriesService.js'

export async function getRandomCountries(){
    return getSelectedCountries()
}