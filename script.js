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

    fetch(url, options).then((response) => response.json()).then((x) => {
        console.log(x)
        document.getElementById("population").textContent = printValue(x.response[0].population)
        document.getElementById("new-cases").textContent = printValue(x.response[0].cases.new)
        document.getElementById("active-cases").textContent = printValue(x.response[0].cases.active)
        document.getElementById("recovered").textContent = printValue(x.response[0].cases.recovered)
        document.getElementById("cases-per-million").textContent = printValue(x.response[0].cases["1M_pop"])
        document.getElementById("total-cases").textContent = printValue(x.response[0].cases.total)
        document.getElementById("new-deaths").textContent = printValue(x.response[0].deaths.new)
        document.getElementById("deaths-per-million").textContent = printValue(x.response[0].deaths["1M_pop"])
        document.getElementById("total-deaths").textContent = printValue(x.response[0].deaths.total)
        document.getElementById("test-per-million").textContent = printValue(x.response[0].tests["1M_pop"])
        document.getElementById("total-test").textContent = printValue(x.response[0].tests.total)
        document.getElementById("last-report-date").textContent = printValue(x.response[0].day)
    }).catch((err) => console.log(err))
})


function printValue(data) {
    if (data === null)
        return 0
    else
        return data
}