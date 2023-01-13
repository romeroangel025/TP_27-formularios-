window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
console.log("funciona la vinculacion");
let qs = (element) => document.querySelector(element)
let qsa = (element) => document.querySelectorAll(element)


const addMovies = $("addMovies");
const elements = addMovies.elements;


const msgError = (element, msg, event) => {
  $(element).style.color = "red";
  $(element).innerHTML = msg;
  event.target.classList.add("is-invalid");
};

const cleanError = (element, { target }) => {
  target.classList.remove("is-invalid", "is-valid");
  $(element).innerHTML = null;
};

const validField = (element, { target }) => {
  $(element).innerHTML = null;
  target.classList.remove("is-invalid");
  target.classList.add("is-valid");
};


const checkFields = () => {
  let error = false;
  for (let i = 0; i < elements.length - 1; i++) {
    
    if(!elements[i].value || elements[i].classList.contains('is-invalid')) {
      error = true
    }
    console.log(error)
  }

  if(!error){
    $('btn-submit').disabled = false;
  }else {
    $('btn-submit').disabled = true;
  }
}



/* {validacion titulo} */

$("title").focus();
$("title").addEventListener("focus", function (e) {
  cleanError("titleMsg", e);
});
$("title").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("titleMsg", "El titulo es obligatorio", e);
      break;
    case this.value.trim().length < 2:
      msgError(
        "titleMsg",
        "El titulo debe tener como minimo 2 caracteres",
        e
      );
      break;
    default:
      validField("titleMsg", e);
      break;
  }
  checkFields();
});
/* validacion de calificacion */
$("rating").addEventListener("focus", function (e) {
  cleanError("ratingMsg", e);
});
$("rating").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("ratingMsg", "La calificación es obligatoria", e);
      break;
    case this.value < 0 || this.value > 10:
      msgError("ratingMsg", "Indicar valor entre 0 y 10", e);
      break;
    default:
      validField("ratingMsg", e);
      break;
  }
  checkFields();
});
/* validacion de premios */
$("awards").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("awardsMsg", "La cantidad de premios es obligatoria", e);
      break;
    case this.value < 0 || this.value > 10:
      msgError("awardsMsg", "Indicar valor entre 0 y 10", e);
      break;
    default:
      validField("awardsMsg", e);
      break;
  }
  checkFields();
});
/* validacion de fecha */
 $("release_date").addEventListener("blur", function (e) {
  let fecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
  switch (true) {
    case !this.value === fecha
     :
      msgError("release_dateMsg", "La Fecha es obligatoria", e);
      break;
    default:
      validField("release_dateMsg", e);
      break;
  }
  checkFields();
}); 
/* validacion de duracion */
$("length").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("lengthMsg", "Los minutos son obligatorios", e);
      break;
    case this.value < 60 || this.value > 360:
      msgError("lengthMsg", "Indicar duración entre 60 y 360 minutos", e);
      break;
    default:
      validField("lengthMsg", e);
      break;
  }
  checkFields();
});
/* validacion de genero */
$("genre_id").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value:
      msgError("genre_idMsg", "El género es obligatorio", e);
      break;
    default:
      validField("genre_idMsg", e);
      break;
  }
  checkFields();
});
};


