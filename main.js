//Início do projeto que eu nem sei o que será

//Data

/*
var d = new Date();
alert(d.getSeconds());
*/

//Laços de repetição

/*var count = 1;
while(count <= 10){
  console.log(count);
  count++;
};
*/

/*
for ( var count = 0; count <= 10; count++ ) {
  console.log( count );
}
*/

//Condicional

/*
var idade = 21;
if(idade >= 18){
  alert("maior de idade")
}else{
  alert("menor de idade")
}
*/

//Dicionário

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"laranja", cor:"laranja"}];
console.log(frutas[0])
*/

//Arrays

//var lista = ["maça", "pêra", "laranja"];
//console.log(lista.toString()[5]);
//console.log(lista.join("-"));
//console.log(lista.reverse());
//console.log(lista.length);
//lista.pop();
//lista.push("melancia");

//VARIÁVEIS

//var nome = "Lucas Pirola";
//var idade = 21
//var idade2 = 10
//var frase = "Japão é o melhor país do mundo"

//ALERT

//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);

//CONSOLE.LOG 

//console.log(nome + [idade + idade2])

//.replace serve para trocar uma string por outra

//console.log(frase.replace("Japão", "Brasil"));

//.toLowerCase() serve para colocar as strings em minúsculas
//.toUpperCase() serve para colocar as strings em maiúsculas

//FUNÇÕES

/*
function soma(n1, n2){
  return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}

document.write(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade){
  var validar;
  if (idade >= 18){
  return true
  }else{
  return false
  }
}

var idade = prompt("Qual a sua idade?");
alert.write(validaIdade(idade));
*/

function botao(){
  document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("Agradecimento"));
  //alert("Obrigado po clicar");
}

function redirecionar(){
  // Abrir em outra janela: window.open("https://www.w3schools.com/js/default.asp")
  // Abrir na mesma janela: window.location.href = "https://www.w3schools.com/js/default.asp";
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Carregada")
}

function funcaoChange(elemento){
  console.log(elemento.value)
}