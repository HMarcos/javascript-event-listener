/* Log dos Eventos */

logDeEventos = document.querySelector(".log-eventos ul");

/* Objetos para os botes */
botaoEventosTeclado = document.querySelector(".eventos-teclado");
botaoEventosMouse = document.querySelector(".eventos-mouse");
botaoEventosTecladoMouse = document.querySelector(".eventos-teclado-mouse");
botaoEventosMultiplos = document.querySelector(".multiplos-eventos");

/* Adicionando os eventos */

// Botao teclado
botaoEventosTeclado.addEventListener("keydown", exibirTeclaPressionada);
botaoEventosTeclado.addEventListener("keyup", exibirTeclaLiberada);

// Botao Mouse
botaoEventosMouse.addEventListener("click", exibirClickMouse);
botaoEventosMouse.addEventListener("dblclick", exibirDblClickMouse);
botaoEventosMouse.addEventListener("mouseenter", exibirEnterMouse);
botaoEventosMouse.addEventListener("mouseleave", exibirLeavekMouse);
botaoEventosMouse.addEventListener("mousemove", exibirMoveMouse);
// Botao Mouse e Teclado
botaoEventosTecladoMouse.addEventListener("keydown", exibirTeclaPressionada);
botaoEventosTecladoMouse.addEventListener("keyup", exibirTeclaLiberada);
botaoEventosTecladoMouse.addEventListener("click", exibirClickMouse);
botaoEventosTecladoMouse.addEventListener("dblclick", exibirDblClickMouse);
botaoEventosTecladoMouse.addEventListener("mouseenter", exibirEnterMouse);
botaoEventosTecladoMouse.addEventListener("mouseleave", exibirLeavekMouse);

// Múltiplos Eventos
botaoEventosMultiplos.addEventListener("dblclick", exibirDblClickMouse);
botaoEventosMultiplos.addEventListener("dblclick", (event) => {
    alert(`Acionando a segunda função do botão ${event.target.innerHTML}`);
});
botaoEventosMultiplos.addEventListener("dblclick", (event) => {
    window.open('https://github.com/HMarcos/javascript-event-listener/', '_blank');
});

botaoEventosMultiplos.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "enter"){
        document.querySelector("header").classList.toggle("vermelho");
    }
})
/* Conjunto de Funções */
function exibirTeclaPressionada(event) {
    const teclaPressionada = event.key;
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> A tecla <strong>${teclaPressionada}</strong> foi <strong>pressionada</strong> no botao <strong>${botao}</strong></li>
    `;

    scrollUltimoElemento(logDeEventos);
}

function exibirTeclaLiberada(event) {
    const teclaPressionada = event.key;
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> A tecla <strong>${teclaPressionada}</strong> foi <strong>liberada</strong> no botao <strong>${botao}</strong></li>
    `;

    scrollUltimoElemento(logDeEventos);
}

function exibirClickMouse(event) {
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> <strong>Click</strong> no botao <strong>${botao}</strong> </li>
    `;

    scrollUltimoElemento(logDeEventos);
}

function exibirDblClickMouse(event) {
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> <strong>Double Click</strong> no botao <strong>${botao}</strong></li>
    `;

    scrollUltimoElemento(logDeEventos);
}


function exibirEnterMouse(event) {
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> <strong>Mouse Enter</strong> no botao <strong>${botao}</strong></li>
    `;

    scrollUltimoElemento(logDeEventos);
}

function exibirLeavekMouse(event) {
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> <strong>Mouse Leave</strong> no botao <strong>${botao}</strong></li>
    `;

    scrollUltimoElemento(logDeEventos);
}

function exibirMoveMouse(event) {
    const botao = event.target.innerHTML;

    logDeEventos.innerHTML += `
    <li> <strong>Mouse Move</strong> no botao <strong>${botao}</strong>: posição: (${event.offsetX}, ${event.offsetY})</li>
    `;

    scrollUltimoElemento(logDeEventos);
}


function limparLog() {
    logDeEventos.innerHTML = "";
}

function scrollUltimoElemento(ul) {
    const ultimoElemento = ul.querySelector("li:last-child");

    ultimoElemento.scrollIntoView();
}

