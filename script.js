// https://rapidapi.com/api-sports/api/covid-193/playground/apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083

const country = document.getElementById("country")
const search = document.getElementById("search")


search.addEventListener("click", function () {
    var countryName = country.value.trim()

    const url = `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd016ed4721mshc119e1590edab0cp1e3224jsn608e9956d4f9',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
    };

    fetch(url, options).then((response) => response.json()).then((data) => {
        console.log(data)
    }).catch((err) => console.log(err))
})
