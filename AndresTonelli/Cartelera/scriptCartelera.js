const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ea27c41cbd532d19174d71429927e158&language=en-US&sort_by=popularity.desc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.querySelector('.main')

const peliculas = extraerPeliculas(API_URL)
async function extraerPeliculas(url) {
	const res = await fetch(url)
	const data = await res.json()
	const pelicula = data.results;
	mostrarPeliculas(pelicula);	
}

function mostrarPeliculas(movies) {
	main.innerHTML = ' '
	movies.forEach((movie) => {		
		
		const { title, poster_path, vote_average, overview } = movie
		if(title=="Puss in Boots: The Last Wish" || title=="Avatar: The Way of Water"
		|| title=="Winnie the Pooh: Blood and Honey"
		|| title=="Cocaine Bear"
		|| title=="John Wick: Chapter 4"
		|| title=="Creed III"){
		const peliculaElegida = document.createElement('div')
		peliculaElegida.classList.add('pelicula')
        switch (title) {
            case "Puss in Boots: The Last Wish":
                peliculaElegida. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="peliculaInfo">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    <br></br>
    <table>
			<thead>
				<tr><th colspan="3">Horarios</th></tr>
			</thead>
			<tbody><tr><td>18:00hs</td>
					<td>20:00hs</td>
					<td>22:15hs</td>
			</tr></tbody>
		</table>
    </div>
    </div>`
		main.appendChild(peliculaElegida)
                break;
            case "Avatar: The Way of Water":
                peliculaElegida. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="peliculaInfo">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    <br></br>
    <table>
			<thead>
				<tr><th colspan="3">Horarios</th></tr>
			</thead>
			<tbody><tr><td>18:00hs</td>
					<td>21:00hs</td>
			</tr></tbody>
		</table>
    </div>
    </div>`
		main.appendChild(peliculaElegida)
                break;
            case "Winnie the Pooh: Blood and Honey":
                peliculaElegida. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="peliculaInfo">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    <br></br>
    <table>
			<thead>
				<tr><th colspan="3">Horarios</th></tr>
			</thead>
			<tbody><tr><td>17:30</td>
					<td>20:30hs</td>
					<td>22:30hs</td>
			</tr></tbody>
		</table>
    </div>
    </div>`
		main.appendChild(peliculaElegida)
                break;
            case "Cocaine Bear":
                peliculaElegida. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="peliculaInfo">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    <br></br>
    <table>
			<thead>
				<tr><th colspan="3">Horarios</th></tr>
			</thead>
			<tbody><tr><td>18:10hs</td>
					<td>20:15hs</td>
					<td>23:00hs</td>
			</tr></tbody>
		</table>
    </div>
    </div>`
		main.appendChild(peliculaElegida)
                break;
            case "John Wick: Chapter 4":
                peliculaElegida. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="peliculaInfo">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    <br></br>
    <table>
			<thead>
				<tr><th colspan="3">Horarios</th></tr>
			</thead>
			<tbody><tr><td>17:00hs</td>
					<td>20:00hs</td>
					<td>22:15hs</td>
			</tr></tbody>
		</table>
    </div>
    </div>`
		main.appendChild(peliculaElegida)
                break;
            case "Creed III":
                peliculaElegida. innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="peliculaInfo">
                <h3>${title}</h3>
                <span>${vote_average}</span>
                </div>
                <div class="overview">
                <h4>Overview</h4>
                ${overview}
                <br></br>
                <table>
                        <thead>
                            <tr><th colspan="3">Horarios</th></tr>
                        </thead>
                        <tbody><tr><td>17:00hs</td>
                                <td>20:00hs</td>
                                <td>22:15hs</td>
                        </tr></tbody>
                    </table>
                </div>
                </div>`
                    main.appendChild(peliculaElegida)
                break;
            default:
                break;
        }
		
    }
	})

}
