async function getAllCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all?fields=translations,flags')
    let countries = await response.json()
    return countries
}

export async function getNamesAndFlags(){
    let countries = await getAllCountries()
    countries = countries.map(country => ({
        name: country.translations?.por?.common,
        flag: country.flags.png
    }))
    return countries
}
