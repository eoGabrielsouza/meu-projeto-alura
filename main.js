const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatisticas]")
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
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
var contadordeimg=1;
var imagensArray = [ //caminho das suas imgs aqui
'img/todos-robotron/robotron-amarelo.png',
'img/todos-robotron/robotron-azul.png',
'img/todos-robotron/robotron-branco.png',
'img/todos-robotron/robotron-preto.png',
'img/todos-robotron/robotron-rosa.png',
'img/todos-robotron/robotron-vermelho.png'
];
function trocar(){

    if(contadordeimg == imagensArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
    {
      contadordeimg=0;
    }
    document.getElementById("robotron").src=imagensArray[contadordeimg]; //altera a img do elemento "agni" de acordo com o indice
      contadordeimg++; // incrementa a nossa referencia
  
  }

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }
    else { peca.value = parseInt(peca.value) + 1 }
}

function atualizaEstatisticas(peca) {
    
    estatisticas.forEach((elemento) => {
       
        elemento.textContent=parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]

    })

}
