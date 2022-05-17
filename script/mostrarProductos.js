let elementoUno;
let elementoDos;
let elementoTres; 
let elementoCuatro;
let check; 


function mostrarPizzas() {
    elementoUno = document.getElementById("pizzas1");
    elementoDos = document.getElementById("pizzas2");
    elementoTres = document.getElementById("pizzas3");
    elementoCuatro = document.getElementById("pizzas4");
    check = document.getElementById("Pizzas");
    if (check.checked) {
        elementoUno.style.display='block';
        elementoDos.style.display='block';
        elementoTres.style.display='block';
        elementoCuatro.style.display='block';
    }
    else {
        elementoUno.style.display='none';
        elementoDos.style.display='none';
        elementoTres.style.display='none';
        elementoCuatro.style.display='none';
    }
}

function mostrarEmpanadas() {
    elementoUno = document.getElementById("empanadas1");
    elementoDos = document.getElementById("empanadas2");
    elementoTres = document.getElementById("empanadas3");
    check = document.getElementById("Empanadas");
    if (check.checked) {
        elementoUno.style.display='block';
        elementoDos.style.display='block';
        elementoTres.style.display='block';
    }
    else {
        elementoUno.style.display='none';
        elementoDos.style.display='none';
        elementoTres.style.display='none';
    }
}

function mostrarBebidas() {
    elementoUno = document.getElementById("bebidas1");
    elementoDos = document.getElementById("bebidas2");
    elementoTres = document.getElementById("bebidas3");
    elementoCuatro = document.getElementById("bebidas4");
    elementoCinco = document.getElementById("bebidas5");
    check = document.getElementById("Bebidas");
    if (check.checked) {
        elementoUno.style.display='block';
        elementoDos.style.display='block';
        elementoTres.style.display='block';
        elementoCuatro.style.display='block';
        elementoCinco.style.display='block';
    }
    else {
        elementoUno.style.display='none';
        elementoDos.style.display='none';
        elementoTres.style.display='none';
        elementoCuatro.style.display='none';
        elementoCinco.style.display='none';
    }
}

function mostrarPostres() {
    elementoUno = document.getElementById("postres1");
    elementoDos = document.getElementById("postres2");
    elementoTres = document.getElementById("postres3");
    elementoCuatro = document.getElementById("postres4");
    check = document.getElementById("Postres");
    if (check.checked) {
        elementoUno.style.display='block';
        elementoDos.style.display='block';
        elementoTres.style.display='block';
        elementoCuatro.style.display='block';
    }
    else {
        elementoUno.style.display='none';
        elementoDos.style.display='none';
        elementoTres.style.display='none';
        elementoCuatro.style.display='none';
    }
}