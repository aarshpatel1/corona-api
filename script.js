// https://rapidapi.com/api-sports/api/covid-193/playground/apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083

const country = document.getElementById("country")
const search = document.getElementById("search")

document.getElementById("last-report-date").textContent = todaysDate()

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
        document.getElementById("population").textContent = printValue(data.response[0].population)
        document.getElementById("new-cases").textContent = printValue(data.response[0].cases.new)
        document.getElementById("active-cases").textContent = printValue(data.response[0].cases.active)
        document.getElementById("recovered").textContent = printValue(data.response[0].cases.recovered)
        document.getElementById("cases-per-million").textContent = printValue(data.response[0].cases["1M_pop"])
        document.getElementById("total-cases").textContent = printValue(data.response[0].cases.total)
        document.getElementById("new-deaths").textContent = printValue(data.response[0].deaths.new)
        document.getElementById("deaths-per-million").textContent = printValue(data.response[0].deaths["1M_pop"])
        document.getElementById("total-deaths").textContent = printValue(data.response[0].deaths.total)
        document.getElementById("test-per-million").textContent = printValue(data.response[0].tests["1M_pop"])
        document.getElementById("total-test").textContent = printValue(data.response[0].tests.total)
        document.getElementById("last-report-date").textContent = printValue(data.response[0].day)
    }).catch((err) => console.log(err))
})


function printValue(data) {
    if (data === null)
        return 0
    else
        return data
}

function todaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}