let firstOption 
let secondOption 
let thirdOption 
let forthOption
let numberOfOptions = 4
let randomNumberArray: any = []

async function getAllCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all?fields=translations,flags')
    let countries = await response.json()
    return countries
}

async function getNamesAndFlags(){
    let countries = await getAllCountries()
    countries = countries.map(country => ({
        name: country.translations?.por?.common,
        flag: country.flags.png
    }))
    return countries
}

export async function selectFourRandomCountries(){
    let selectedCountries = await getNamesAndFlags()

    for(let i=0; i<numberOfOptions; i++){
        let randomNumber = Math.floor(Math.random() * (selectedCountries.length - 0 + 1)) + 1
        randomNumberArray[i] = randomNumber
    }

    firstOption = selectedCountries[randomNumberArray[0]]
    secondOption = selectedCountries[randomNumberArray[1]]
    thirdOption = selectedCountries[randomNumberArray[2]]
    forthOption = selectedCountries[randomNumberArray[3]]

    let options

    return options = {
        firstOption,
        secondOption,
        thirdOption,
        forthOption
    }
}