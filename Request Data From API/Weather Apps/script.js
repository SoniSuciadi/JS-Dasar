const btnCari = document.querySelector('#btnCari')
const inputKeyword = document.querySelector('#inputKeyword')
const getAllCountry = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(response => response)
}
const getCountrybyName = (keyword) => {
    return fetch('https://restcountries.com/v3.1/name/' + keyword)
        .then(response => response.json())
        .then(response => response)
}
const getWeather = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=73ff6ec9e308f079f30bdaf725190e8c`)
        .then(response => response.json())
        .then(response => response)
}
const showCountry = async (keyword) => {
    let listCountries;
    if (keyword == '') {
        listCountries = await getAllCountry();
    } else {
        listCountries = await getCountrybyName(keyword);
    }
    let card = listCountries.map((country) => (
        `<div  type="button" data-bs-toggle="modal" data-bs-target="#cuacaModal"  class="btn col-md-4 mt-2 showWeather " data-flag=${country.flags.svg} data-maps=${country.maps.googleMaps} data-lat=${country.latlng[0]} data-long=${country.latlng[1]} >
            <div class="card showWeather"data-lat=${country.latlng[0]} data-long=${country.latlng[1]}>
                <div class="card-body text-center showWeather"data-lat=${country.latlng[0]} data-long=${country.latlng[1]} data-flag=${country.flags.svg} data-maps=${country.maps.googleMaps}>
                    <img  style="width: 15%;"
                        class="showWeather float-start"data-lat=${country.latlng[0]} data-long=${country.latlng[1]} data-flag=${country.flags.svg} data-maps=${country.maps.googleMaps}
                        src=${country.flags.svg}>
                    <h6 class="showWeather"data-lat=${country.latlng[0]} data-long=${country.latlng[1]}> ${country.name.common}</h6>
                </div>
            </div>
        </div>`
    )).join('')

    document.querySelector('.cardList').innerHTML = card;
}
document.addEventListener("click", async (e) => {

    if (e.target.classList.contains('showWeather')) {
        const weather = await getWeather(e.target.dataset.lat, e.target.dataset.long)
        
        const temp =`<div class="row">
        <div class="col-md-4 ">
            <img style="width: 100%;" class=" float-start"
                src=${e.target.dataset.flag}>
            <div class="btn row justify-content-center">
            <a href=${e.target.dataset.maps} >
                <i class="btn fa-solid fa-map-location-dot fa-3x"></i></a>
                <h6>Cari Dimaps</h6>
            </div>
        </div>
        <div class="col-md">
            <ul class="list-group">
            <li class="list-group-item"><span>Country Name: ${weather.name}</span></li>
            <li class="list-group-item"><span>Weather: ${weather.weather[0].main}</span></li>
            <li class="list-group-item"><span>Description: ${weather.weather[0].description}</span></li>
            <li class="list-group-item"><span>Wind Speed: ${weather.wind.speed}</span></li>
            <li class="list-group-item"><span>Temp: ${weather.main.temp}</span></li>
            <li class="list-group-item"><span>Temp Max: ${weather.main.temp_max}</span></li>
            <li class="list-group-item"><span>Temp Min: ${weather.main.temp_min}</span></li>
            <li class="list-group-item"><span>Sea Level: ${weather.main.sea_level}</span></li>

            </ul>
        </div>
    </div>`

        document.querySelector('.modal-body').innerHTML = temp

    }
    // if (e.target.classList.contains('modal-detail-button')) {
    //     const movie = await getMoviesbyOMDBID(e.target.dataset.omdbid)
    //     document.querySelector('.loader').remove();
    //     const tamplate = `<div class="row">
    //     <div class="col-md-4">
    //         <img class="img-fluid"
    //             src=${movie.Poster}>
    //     </div>
    //     <div class="col-md-8">
    //         <ul class="list-group">
    //             <li class="list-group-item">
    //                 <h3>Judul</h3>
    //             </li>
    //             <li class="list-group-item"><span class="fw-bolder">Released : </span>${movie.Released}</li>
    //             <li class="list-group-item"><span class="fw-bolder">Director : </span>${movie.Director}</li>
    //             <li class="list-group-item"><span class="fw-bolder">Runtime : </span>${movie.Runtime}</li>
    //             <li class="list-group-item"><span class="fw-bolder">Actors : </span>${movie.Actors}</li>
    //             <li class="list-group-item"><span class="fw-bolder">Plot : </span>${movie.Plot}</li>
    //         </ul>
    //     </div>
    // </div>`
    //     document.querySelector('.modal-body').innerHTML = tamplate

    // }
})
btnCari.addEventListener("click", () => {
    showCountry(inputKeyword.value)
})