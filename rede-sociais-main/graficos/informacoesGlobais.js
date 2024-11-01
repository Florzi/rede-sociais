const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarinformacoesGlobais() {
     const res = await fetch(url);
     const dados = await res.json();
     console.log(dados);
     const paragrafo = document.createElement('p')
     paragrafo.classList.add('graficos-container__texto')
     paragrafo,innerHeight = `Voce sabia que o mundo tem
     ${dados.total_pessoas_mundo} de pessoas e 
    que aproximadamente${dados.total_pessoas_conetadas} 
    estão conectadas em alguma rede social e em media
    ${dados.tempo_medio} horas conectadas`

 const container = document.getElementById('graficos-container')
     container.appendChild(paragrafo)
 }
visualizarinformacoesGlobais ()
