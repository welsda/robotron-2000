const controle = document.querySelectorAll("[data-controle]"); //procura elementos com essa propriedade
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { //sempre há um evento no click
        manipulaDados(evento.target.parentNode, evento.target.dataset.controle); //evento.target.textContent selecionaria o texto do componente
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})

function manipulaDados(controle, operacao) {
    const peca = controle.querySelector("[data-contador]"); //seleciona elemento com propriedade específica passada dentro da div pai

    if (operacao === "+") {
        peca.value = String(parseInt(peca.value) + 1).padStart(2, "0");
    } else {
        peca.value = String(parseInt(peca.value) - 1).padStart(2, "0");
    }
}

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (operacao === "+") {
            elemento.textContent = String(parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]).padStart(2, "0");
        } else {
            elemento.textContent = String(parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]).padStart(2, "0");
        }
    })
}