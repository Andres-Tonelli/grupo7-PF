//PeliculaResponse {
//  page;  //number;
//  results;  //pelicula
//  total_pages; //Number
//  total_results; //Number
// };

//Pelicula {
//  adult; //Boolean
//  backdrop_path; //String
//  genre_ids; //[ Number]
//  id; //Number
//  original_language; //String
//  original_title; //String
//  overview; //String
//  popularity; //Float
//  poster_path; //String
//  release_date; //Date
//  title; //String
//  video; //Boolean
//  vote_average; //Float
//  vote_count; //Number
// };

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ea27c41cbd532d19174d71429927e158&language=en-US&sort_by=popularity.desc&page=1'

const main = document.querySelector('.main')

const peliculas = extraerPeliculas(API_URL)

async function extraerPeliculas(url) {
	const res = await fetch(url)
	const data = await res.json()
	const peliculas = data.results;
	cartelearPelicula(peliculas);
}

function cartelearPelicula (peliculas) {
    let i=0;
    peliculas.forEach((pelicula,i)=> {
        const {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count} = pelicula
        const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
        if(i<8){
        const peliculaElegida = document.createElement('div')
        peliculaElegida.classList.add('pelicula')
            peliculaElegida.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="peliculaInfo">
                    <h3>${title}</h3>
                </div>
                <div class="overview">
                        <h4>Overview</h4>
                        ${overview}
                        <br></br>
                    </div>
                </div>`
        main.appendChild(peliculaElegida);
        peliculaElegida.addEventListener("click", () =>{
            window.location.href = "../SacarEntrada/sacarEntrada.html?"+JSON.stringify(pelicula);
            //console.log(JSON.stringify(pelicula));
        });
            i +=1;
            }
        }

    )

};


