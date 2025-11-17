let numberOfOptions = 4

interface Country{
    translations?: {
        por?: {
            common?: string
        }
    }
    flags: {
        png: string
    }
}

async function getAllCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all?fields=translations,flags')
    let countries = await response.json()
    return countries
}

async function getNamesAndFlags(){
    let countries = await getAllCountries()
    countries = countries.map((country: Country) => ({
        name: country.translations?.por?.common,
        flag: country.flags.png
    }))
    return countries
}

async function selectRandomCountries(){
    let selectedCountries = await getNamesAndFlags()
    let options: any = []
    for(let i=0; i<numberOfOptions; i++){
        let randomNumber = Math.floor(Math.random() * (selectedCountries.length - 0 + 1)) + 1
        options.push(selectedCountries[randomNumber])
    }
    return options
}

export async function getOptions(){
    let selectedCountries = await selectRandomCountries()
    let rightAnswerFlag = selectedCountries[0].flag
    let rightAnswer = selectedCountries[0].name
    let wrongAnswers = []
    for(let i=1;i<numberOfOptions; i++){
        wrongAnswers.push(selectedCountries[i])
    }
    return {
        rightAnswerFlag,
        rightAnswer,
        wrongAnswers
    }
}