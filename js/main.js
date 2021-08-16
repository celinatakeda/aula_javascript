
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://globallabs.academy/"); // abre na outra aba
    window.location.href = "https://globallabs.academy/"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;    
}
*/
/*
var validar = 0; // variável global
function validaIdade(idade){
    //var validar; // variável local 
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] //lista de dicionario
console.log(frutas);
//console.log(fruta.nome);
alert(frutas[1].nome);


var fruta = {nome:"maça", cor:"vermelha"} //dicionario
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);


var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); //insere na lista
console.log(lista);
lista.pop();  //tira da lista
console.log(lista);
console.log(lista.length);
console.log(lista.reverse()); //reverte a lista

console.log(lista.toString());

console.log(lista[0]);
console.log(lista.toString()[0]);

console.log(lista.join(" - "));
alert(lista[1]);
*/
//var nome = "Celina Takeda";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());