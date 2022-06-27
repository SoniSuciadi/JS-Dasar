const btnSeach = document.querySelector('.btn-seach');
const inputKeyword = document.querySelector('.input-key');

const loading = `<div class="loader" style="z-index: 2;">
<div class="inner one"></div>
<div class="inner two"></div>
<div class="inner three"></div>
</div>`

const getMoviesbyTitle = (keyword) => {
    document.querySelector('.loading').innerHTML = loading
    return fetch(`http://www.omdbapi.com/?apikey=9dff0521&s=${keyword}`)
        .then(response => response.json())
        .then(response => response.Search)
        .catch(e => console.log(e));

}
const getMoviesbyOMDBID = (keyword) => {
    document.querySelector('.loading').innerHTML = loading
    return fetch(`http://www.omdbapi.com/?apikey=9dff0521&i=${keyword}`)
        .then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e))
}
const showMovies = async (keyword) => {
    const movies = await getMoviesbyTitle(keyword)
    if (movies) {
        document.querySelector('.loader').remove();
        const mockup = movies.map((movie, index) => (
            `<div class="col-md-3 my-1">
                    <div class="card  ">
                        <img src=${movie.Poster}
                            class="card-img-top poster ">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                            <button type="button" class="btn btn-primary modal-detail-button" data-omdbid=${movie.imdbID}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Lihat Lebih Banyak
                            </button>
                            </div>
                    </div>
                </div>`
        )).join('')
        document.querySelector('.movie-list').innerHTML = mockup
    } else {
        document.querySelector('.loader').remove();
        alert(`Tidak Ada Film dengan kata ${keyword}`)
    }

}
document.addEventListener("click", async (e) => {

    if (e.target.classList.contains('modal-detail-button')) {

        const movie = await getMoviesbyOMDBID(e.target.dataset.omdbid)
        document.querySelector('.loader').remove();
        const tamplate = `<div class="row">
        <div class="col-md-4">
            <img class="img-fluid"
                src=${movie.Poster}>
        </div>
        <div class="col-md-8">
            <ul class="list-group">
                <li class="list-group-item">
                    <h3>Judul</h3>
                </li>
                <li class="list-group-item"><span class="fw-bolder">Released : </span>${movie.Released}</li>
                <li class="list-group-item"><span class="fw-bolder">Director : </span>${movie.Director}</li>
                <li class="list-group-item"><span class="fw-bolder">Runtime : </span>${movie.Runtime}</li>
                <li class="list-group-item"><span class="fw-bolder">Actors : </span>${movie.Actors}</li>
                <li class="list-group-item"><span class="fw-bolder">Plot : </span>${movie.Plot}</li>

            </ul>
        </div>
    </div>`
        document.querySelector('.modal-body').innerHTML = tamplate

    }
})


btnSeach.addEventListener('click', () => showMovies(inputKeyword.value))