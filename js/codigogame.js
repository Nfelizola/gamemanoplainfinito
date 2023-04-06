// variaveis definidas para todas as rotinas
// sao visiveis em todas as partes do codigo
var deckh = ["1ha", "1se", "1ne", "2vn", "2hf", "2gm", "3ca",
    "3hk", "3th", "4fa", "4de", "4pn", "5vi", "5fe",
    "6hf", "6cm"];
var deckt = ["1jm", "1or", "1or", "2cg", "2ja", "3je", "3en",
    "4jp", "4pm", "5fe", "5jr", "6jt", "7th"];
var memoriathanos = new Array(01);
var baralhoh = new Array(15);
var baralhot = new Array(12);
var maoheroi = new Array(1);
var maothanos = new Array(2);
var pdescartes = 0;
var inicio = true;


function startgame() {

    if (inicio) {
        embaralhar(deckh, baralhoh);
        // mandar deck do thanos e baralho do thanos como argumentos
        embaralhar(deckt, baralhot);
        deckh = ["1ha", "1se", "1ne", "2vn", "2hf", "2gm", "3ca",
            "3hk", "3th", "4fa", "4de", "4pn", "5vi", "5fe",
            "6hf", "6cm"];
        deckt = ["1jm", "1or", "1or", "2cg", "2ja", "3je", "3en",
            "4jp", "4pm", "5fe", "5jr", "6jt", "7th"];
        inicio = false;
        maothanos[0] = baralhot.shift();
        maothanos[1] = baralhot.shift();
        maothanos[2] = baralhot.shift();
    };
    if (document.getElementById("start").innerText == "Start") {
        document.getElementById("start").innerText = "Clique para sua vez heroi";
    } else { document.getElementById("start").innerText = "Start" };


    // mandar deck do heroi e baralho do heroi como argumentos

    // cartas para thanos, são 03 no inicio

    //console.log("baralho thanos:> "+baralhot.toString());
    //console.log("e na mão thanos :=> " + maothanos.toString());
    // mão de herois apenas 1 carta
    maoheroi[0] = baralhoh.shift();
    //console.log("baralho herois:> "+baralhoh.toString());
    //console.log("e na mão  :=> " + maoheroi.toString());
    document.getElementById("maoh1").
        setAttribute("src", "./img/herois/" + maoheroi[0] + ".png");
    vozthanos.volume = 0.8;
    vozthanos.play();
    // primeira fase jogando aleatorio sem consultar a memoria
    var x = Math.floor(Math.random() * 3);
    document.getElementById("cat").setAttribute("src", "./img/thanos/" + maothanos[x] + ".png");
    document.getElementById("cat").style.visibility = "visible";
    document.getElementById("maot1").style.visibility = "hidden";
    // atraves do switch case iremos analisar a carta e realizar o seu efeito
    // regras das joias que possuem 03 letras
    var escrito = document.getElementById("escritos");
    switch (maothanos[x]) {
        case '1or':
            // para um jogo de 02 esta carta é igual a joia da mente// 
            var numero = Math.floor(Math.random() * 5) + 1;
            escrito.innerText = "eu escolhi o número " + numero;
            if (maoheroi[0].slice(0, 1) != numero) {
                escrito.innerText = escrito.innerText + " , e me dei mal ...";

            } else {
                escrito.innerText = escrito.innerText + "... hah hah hah Você ira descartar esta carta e perder vida !!!";
            };

            var descarte = document.getElementById("cat");
            descarte.style.visibility = "visible";
            document.getElementById("mesathanos").style.visibility = "visible";
            pdescartes = pdescartes + 1;
            document.getElementById("met" + pdescartes).setAttribute("src", descarte.getAttribute("src"));
            document.getElementById("met" + pdescartes).visibility = "visible";
            delete maothanos[x];
            maothanos[x] = baralhot.shift();
            break;
        case "4pm":
            // joia da mente, escolha um número para derrotar// 
            //var escrito = document.getElementById("escritos");
            //escrito.textcontent="eu escolhi o número "+numero;
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
}
function embaralhar(deck, baralho) {
    var origem = deck.toString();
    var limite = deck.length;
    for (let pos = 0; pos < limite; pos++) {
        sorteio = Math.floor(Math.random() * deck.length);
        baralho[pos] = deck[sorteio];
        deck.splice(sorteio, 1);
    }
}
function ampliar(x) {
    document.getElementById("cah").setAttribute("src", x.getAttribute("src"));
    document.getElementById("cah").style.visibility = "visible";
}
function normalizar() {
    document.getElementById("cah").style.visibility = "hidden";
}
// rotinas de som//
function tocatrilha() {
    trilha.play();
    trilha.volume = 0.05;
}
function pausatrilha() {
    trilha.pause();
    trilha.volume = 0;
}
function ajustesom() {
    console.log(trilha.volume);
    if (trilha.volume < 1 || trilha.volume > 0.00) {
        if (event.wheelDelta > 1) {
            trilha.volume = trilha.volume + 0.01;
        } else {

            trilha.volume = trilha.volume - 0.01;
        }
    }
}

