var nome = prompt("digite seu nome: ")
var idade = prompt("digite sua idade")
alert(`Bem vindo ${nome}`)
var res = document.getElementById("res");
var img = document.getElementById("img")
let guerreiro = document.getElementById("guerreiro").value
let mago = document.getElementById("mago").value
let monge = document.getElementById("monge").value
let ninja = document.getElementById("ninja").value
var ataque = ["espada", "magia", "artes marciais", "shuriken"]

function selecionar(heroi) {//vai criar um parameto heroi para as variaveis seleicionada
    if (heroi === 'Guerreiro') {
        res.innerHTML = ` Você selecionou ${heroi}, ele atacou usando ${ataque[0]}`
        img.src = "Gif/espada2.gif"
    } else if (heroi === 'Mago') {
        res.innerHTML = `Você selecionou ${heroi}, ele atacou usando  ${ataque[1]}`
        img.src = "Gif/magia.gif"
    } else if (heroi === 'Monge') {
        res.innerHTML = `Você selecionou ${heroi}, ele atacou usando  ${ataque[2]}`
        img.src = "Gif/luta.gif"
    } else if (heroi === 'Ninja') {
        res.innerHTML = `Você selecionou ${heroi}, ele atacou usando ${ataque[3]}`
        img.src = "Gif/shuriken.gif"
    } else {
        res.innerHTML = 'Herói não reconhecido';
    }



}  
