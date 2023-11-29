// contagem de pontos 
var contUser = 0;
var contPc = 0;

// elementos do jogo que chamo do html  em const para evitar mudanças de valor
const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

// sons 
// const audioWin = new Audio("assets/sounds/winning.wav")
// const audioLose = new Audio("assets/sounds/losing.wav")


// variaveis de elemento feita para receber a ação do usuario e do pc
var player1 = ""
var player2 = ""


//  vai analisar e executar essas duas funçoes
playing.addEventListener("click", () => {
    reset()
    playPc()
})

// a reset pega o valor que o usuario escolheu e assim muda a imagem
// 
function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
    imgPC.innerHTML = ""
}


function playPc() {
    var ataques = ['soco', 'chute', 'joelho']
    //  sorteia as imagens
    var num = Math.floor(Math.random() * (ataques.length))//(2 - 0 + 1)) + 0;
    player2 = ataques[num]
    imgPC.innerHTML = "<img src='assets/images/" + player2 + ".png'>"
    analyze()
}

function analyze() {   //regra do jogo

    // desativa quando ja joguei 
    playing.disabled = true

    var win = "0";
    var resultadoV = 0;  // var resultado  aparece o numero de vitorias ou derrotas no banco 
    var resultadoD = 0;

    // quando win for 0  empata quando 1 vitoria e quando -1 derrota

    if (player1 == player2) {     // acontece nd

    } else if (player1 == "chute") {
        win = player2 == 'soco' ? 1 : -1
    } else if (player1 == 'joelho') {
        win = player2 == 'soco' ? 1 : -1
    } else if (player1 == 'soco') {
        win = player2 == 'chute' ? 1 : -1
    } else if (player1 == 'chute') {
        win = player2 == 'joelho' ? 1 : -1
    }

    if (win == 0) {

    } else if (win > 0) {
        contUser = contUser + 1
        // audioWin.play()
    } else {
        contPc = contPc + 1
        // audioLose.play()
    }

    // melhor de 3
    if (contUser >= 3) {
        winner.classList.remove('none')
        winner.classList.add('center')
        resultadoV += 1;
        salvarDados(resultadoD, resultadoV)
    }

    if (contPc >= 3) {
        loser.classList.remove('none')
        loser.classList.add('center')
        resultadoD += 1;
        salvarDados(resultadoD, resultadoV)
    }


    contador.innerHTML = contUser + ":" + contPc

    // depois de 2 segundos ele limpa a minha ultima jogada e abilita o botao dnv
    setTimeout(() => {
        playing.disabled = false
        clear();
    }, 1000);

    
    

    return false;


}

function clear() {
    imgPC.innerHTML = ""
    imgUser.innerHTML = "";

}

function irPraDash() {
    window.location.href = "../dashboard/dashbord.html";
}


function salvarDados(resultadoD, resultadoV){
    var id =  sessionStorage.IDUSUARIO_USUARIO;
    console.log("AAAAAAAAAAAAAAAAAAAAa "+ id)
    
    fetch("/jogorotas/jogo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            resultadoDServer: resultadoD,
            resultadoVServer: resultadoV,
            idServer: id
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                console.log("Respota com sucesso");

                console.log(resuldadoD)
                console.log(resultadoV)

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

// limp TUDO  e poe dnv o jogo
// zero o contador o user e informo a função reset dnv
// function newGame(){
//     contador.innerHTML = "0:0"
//     contPc = 0
//     contUser = 0
//     reset()
//     winner.classList.add('none')
//     winner.classList.remove('center')
//     loser.classList.add('none')
//     loser.classList.remove('center')
// }