var parametros = location.search;
parametros = decodeURI(parametros);
parametros = parametros.substring(1,parametros.length);

pelicula = JSON.parse(parametros);


const main = document.querySelector('.mainContainer')

    const {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count} = pelicula
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    imagenPelicula = document.getElementById("imgPelicula");
    imagenPelicula.setAttribute('src',IMG_PATH + poster_path );
    imagenPelicula.setAttribute('alt',title);
    TitPelicula = document.getElementById("tituloPeli");
    TitPelicula.innerText = title;
    sinapsis = document.getElementById("sinapsis");
    sinapsis.innerText = overview;

    cmb = document.getElementById('combos')
    hs = document.getElementById("horarios");
    ds = document.getElementById("dias");
    dias = ["Lunes", "Miercoles", "Viernes", "Domingo"];
    act = false;
    for (let i=0;i<dias.length;i++){
        let dia = document.createElement('div')
        dia.classList.add('funcion')
        dia.classList.add('dia')
        dia.innerHTML = dias[i];
        
        dia.addEventListener("click", () =>{
            let algo = ds.getElementsByClassName('dia activo');
            for(let i=0;i<algo.length;i++){
                algo.item(i).classList.remove('activo');
            }
            dia.classList.add('activo');
            hs.innerHTML = '';
            cmb.innerHTML= '';
            cargarHorarios();
        });

        ds.appendChild(dia);
    }

    function cargarHorarios(){
    
    horarios  = ["00:00", "05:00", "08:00", "10:00"];
    for (i=0;i<horarios.length;i++){
        let hora = document.createElement('div')
        hora.classList.add('funcion')
        hora.classList.add('horario')
        hora.innerHTML = horarios[i];
        
        hora.addEventListener("click", () =>{
        let algo = hs.getElementsByClassName('horario activo');
            for(let i=0;i<algo.length;i++){
                algo.item(i).classList.remove('activo');
            }
            hora.classList.add('activo')
            cmb.innerHTML= ''
            cargarcombos();
        }); 
        hs.appendChild(hora);
        }
    }




function cargarcombos(){

    combos = [["Combo Pelicula", "1 Balde de Pochoclo + 1 Vaso con tapa + 2 Gaseosas","$3100","combo5.jpg"],[ "Combo Premium","1 Lata Rectangular con pochoclos + 2 Gaseosas", "$4200","combo4.jpg"],["Combo Pelicula","1 Balde de Pochoclo + 1 Vaso con tapa + 2 Gaseosas","$3100","combo3.jpg"],["Combo Lata","1 Lata de Coleccion con pochoclo + 2 Gaseosas","$4100","combo2.jpg"],["Combo Mundial","1 Vaso de Argentina +1 pochoclo mediano +1 Gaseosa","$2100","combo6.jpg"]]
    
   let  carrusel = document.createElement('div');
        carrusel.classList.add('carrusel');
        cmb.appendChild(carrusel);

    let span = document.createElement('span');
        span.classList.add('overimg');
        span.classList.add('pre');
        span.addEventListener("click", () => {cambioCombo('a')});

        carrusel.appendChild(span);
        span.innerText = 'a';



    let div2 = document.createElement('div');
        carrusel.appendChild(div2);
        carrImg = document.createElement('img');
        carrImg.classList.add('carruselImg');
        carrImg.src = "../recourses/comboVoid.jpg"
        div2.appendChild(carrImg);
    let comboFocus = document.createElement('ul');
        comboFocus.classList.add('items');
        comboFocus.id = "selectInf" 
        comboFocus.innerHTML = '<li class="focus"></li>'
        div2.appendChild(comboFocus);

        span = document.createElement('span');
        span.classList.add('overimg');
        span.classList.add('sig');
        span.addEventListener("click", () => {cambioCombo('s')});
        carrusel.appendChild(span);
        span.innerText = 's';

    let div3 = document.createElement('div');
        div3.classList.add('detalles');
        div3.id ="detalles";
        cmb.appendChild(div3);
        div3.innerHTML = '<h4>Sin Combo</h4><p id="detParrafo"></p><p id="detPrecio">$0</p>'


        inferior = document.getElementById('selectInf');
        for (let i=0;i<combos.length;i++){
            let li = document.createElement('li');
            inferior.appendChild(li);
        }
}



function cambioCombo(paso){
let comboFocus = document.getElementById('selectInf');

let lis =comboFocus.getElementsByTagName('li')
let foc = false
    console.log(lis);
let posicion
    for (let ix = 0;ix<lis.length;ix++) {
        clist = lis.item(ix)
        console.log(lis.classList);
        for (let key2 in cList) {
            if (key2=='focus'){
                foc = true
            }
        }
        if (foc){
            posicion = key
            break;
        }
    }
console.log(posicion);

    // if (paso=='a' && index>0){

    // }

}




    /*                      <div class="carrusel">
                                <div >
                                    <span class="overimg pre">a</span>
                                </div>
                                <div>
                                    <img class="carruselImg" src="../recourses/combo2.jpg" alt="">
                                    <ul class="items">
                                        <li class="focus"></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div>
                                    <span class="overimg sig">s</span>
                                </div>
                            </div>
                            <div id="detalles" class="detalles">
                                <h4>Detalles</h4>
                                <p>>Precio: $3100<br>1 Balde de Pochoclo<br>+ 1 Vaso con tapa<br>+ 2 Gaseosas</p>
                            </div>
    */

/* imagen y detalle*/


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}