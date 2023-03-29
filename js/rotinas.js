function testedocument(){
    // usando a propriedade do DOM chamada getElementById() conseguimos interagir
    // com os objetos do DOM, assim podemos mudar o conteúdo dos elementos dinamicamente
document.getElementById("resultado").innerHTML="<hr><p>Olá mundo eu estou aqui</p><hr>";
}

function testeconsole(){
    // VERIFIQUE NA JANELA DE CONSOLE se esta operação funcionou
    console.log("Olá mundo eu estou aqui");
}

function testewrite(){
    // usando a write do objeto document escrevemos direto na página
    
    document.write("<div>Olá mundo eu estou aqui</div>");
    var cores = [["B","blue"],["G","Green"],["k","Black"]];
    document.writeln("<hr><hr>");
    document.writeln(cores.length+"<br><hr>");
    document.writeln(cores+"<hr>");
    console.log(cores);
}
  


function testealert(){
    alert("Olá sou uma janela de aviso");
    if (!confirm("confirma que me viu ??")) {
        alert("Ué no caso vc tá cego ????");
    }else {
            var nome = prompt("Me desculpe mas qual seu Nome mesmo ?");
            alert(nome+", Obrigado pela sua atenção")
            location.reload()
        }
    }
    