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

function validaIdade(idade){
  var validar;
  if (idade >= 18){
  return true
  }else{
  return false
  }
}

var idade = prompt("Qual a sua idade?");
document.write(validaIdade(idade));