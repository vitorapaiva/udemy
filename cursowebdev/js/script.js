//var resposta = confirm("Deseja excluir?");
//console.log(resposta);
var a = 10;
var b = 20;

function somar(a,b)
{
    return a+b;
}

document.getElementById("btn-calcular").onclick = function (){
 var valorA=document.getElementById("valor-a").value;
 var valorB=document.getElementById("valor-b").value;
    alert(somar(parseInt(valorA),parseInt(valorB)));
}