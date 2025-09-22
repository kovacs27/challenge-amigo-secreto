// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
console.log(amigos); 

function agregarAmigo () {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre ===''){
        alert("por favor ingresa un nombre.");
        return;
    }
    amigos.push(nombre);
    limpiarcaja(input);

    mostrarListaAmigos();
}

function limpiarcaja(inputElement) {
     inputElement.value = '';

}

function mostrarListaAmigos() {
    const listaHTML= document.getElementById("listaAmigos");
    listaHTML.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    const resultadoHTML = document.getElementById("resultado");

    if(amigos.length === 0) {
        alert("Aun no hay amigos en la lista");
        resultadoHTML.textContent = "agrega a tus amigos para empezar.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

        resultadoHTML.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`
}    
