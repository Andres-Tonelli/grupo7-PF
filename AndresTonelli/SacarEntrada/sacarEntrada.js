var parametros = location.search;
parametros = decodeURI(parametros);
parametros = parametros.substring(1,parametros.length);

pelicula = JSON.parse(parametros);


const main = document.querySelector('.mainContainer')

    const {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count} = pelicula
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    //const peliculaElegida = document.createElement('div')
    //peliculaElegida.classList.add('pelicula')
    imagenPelicula = document.getElementById("imgPelicula");
    imagenPelicula.setAttribute('src',IMG_PATH + poster_path );
    imagenPelicula.setAttribute('alt',title);
    TitPelicula = document.getElementById("tituloPeli");
    TitPelicula.innerText = title;
    sinapsis = document.getElementById("sinapsis");
    sinapsis.innerText = overview;

    //hs = document.getElementById("horarios");
    ds = document.getElementById("dias");
    console.log(ds);
    dias = ["Lunes", "Miercoles", "Viernes", "Domingo"];
    console.log(dias);
    for (i=0;i<dias.length;i++){
        console.log(dias[i]);
        dia = document.createElement('div')
        dia.classList.add('funcion')
        dia.innerHTML = `<div class ="funcion">`+ dias[i] +`</div>`;
        ds.appendChild(dia);
    }
    /*horarios  = ["00:00", "05:00", "08:00", "10:00"];
    for (i=0;i<horarios;i++){
        hs.appendChild(horario);
    }

   /* peliculaElegida.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="peliculaInfo">
            <h3>${title}</h3>
        </div>
        <div class="overview">
            <h4>Overview</h4>
                ${overview}
                <br></br>
        </div>
    </div>`*/
    //main.appendChild(peliculaElegida);