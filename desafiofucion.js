let magobolado = "clayton"
let niveldomago = 500;


let nivel1 = "ferro"
let nivel2 = "bronze"
let nivel3 = "Prata"
let nivel4 = "ouro"
let nivel5 = "platina"
let nivel6 = "acendente"
let nivel7 = "imortal"
let nivel8 = "radiante"

console.log (magobolado)
console.log ("Parabens Seu Nivel É")

if (niveldomago <= 1000){
    console.log (nivel1)
}
else if (niveldomago > 1000 && niveldomago < 2001){
console.log (nivel2)
}
else if (niveldomago > 2000 && niveldomago < 5001){
    console.log (nivel3)
}
else if (niveldomago > 5000 && niveldomago < 7001){
    console.log (nivel4)
}
else if (niveldomago > 7000 && niveldomago < 8001){
    console.log (nivel5)
}
else if (niveldomago > 8000 && niveldomago < 9001){
    console.log (nivel6)
}
else if (niveldomago > 9000 && niveldomago < 10001){
    console.log (nivel7)
}
else if (niveldomago >= 10001 ){
    console.log (nivel8)
}
