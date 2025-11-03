async function getAllCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all?fields=https://restcountries.com/v3.1/all?fields=translations,flags,flags')
    let countries = await response.json()
    return countries
}

export async function getSelectedCountries(){
    let countries = await getAllCountries()
    countries = countries.map(country => ({
        name: country.translations?.por?.common || country?.name?.common || 'No name',
        flag: country.flags.png
    }))
    return countries
}
