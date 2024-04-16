const perguntas = [
  {
    pergunta: "Qual propriedade CSS é usada para definir a cor do texto?",
    respostas: [
      "color",
      "background-color",
      "font-color",
    ],
    correta: 0
  },
  {
    pergunta: "Qual unidade de medida é usada para definir o tamanho de uma fonte em CSS?",
    respostas: [
      "em",
      "px",
      "pt",
    ],
    correta: 1
  },
  {
    pergunta: "Qual propriedade CSS é usada para adicionar sombra a um elemento?",
    respostas: [
      "box-shadow",
      "shadow",
      "text-shadow",
    ],
    correta: 0
  },
  {
    pergunta: "Qual seletor CSS é usado para selecionar elementos com uma classe específica?",
    respostas: [
      ".",
      "#",
      "*",
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para centralizar um elemento horizontalmente?",
    respostas: [
      "align: center",
      "text-align: center",
      "center: horizontal",
    ],
    correta: 1
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir a altura de um elemento?",
    respostas: [
      "height",
      "width",
      "size",
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir a cor de fundo de um elemento?",
    respostas: [
      "background-color",
      "color",
      "background",
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir a largura de uma borda?",
    respostas: [
      "border-width",
      "border-size",
      "border",
    ],
    correta: 0
  },
  {
    pergunta: "Qual propriedade CSS é usada para definir a fonte de um texto?",
    respostas: [
      "text-family",
      "font-family",
      "typeface",
    ],
    correta: 1
  },
  {
    pergunta: "Qual propriedade CSS é usada para adicionar espaçamento entre as letras de um texto?",
    respostas: [
      "letter-spacing",
      "word-spacing",
      "spacing",
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)        
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta

          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          } 
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
}