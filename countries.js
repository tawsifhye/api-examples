const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>`;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showDetalis(data[0]))
}

const showDetalis = country => {
    console.log(country);
    const details = document.getElementById('details');
    details.innerHTML = `
    <p>Population: ${country.population}</p>
    <p>Borders: ${country.borders}</p>
    <p>Time Zone: ${country.timezones}</p>
    <p>Currency: ${country.currencies[0].name}, ${country.currencies[0].symbol}</p>
    <img width="200px"  src="${country.flag}" alt="">`

    
}