function calcular(saldo) {
    if (saldo <= 10) {
        return "ferro";
    } else if (saldo <= 20) {
        return "bronze";
    } else if (saldo <= 50) {
        return "prata";
    } else if (saldo <= 80) {
        return "ouro";
    } else if (saldo <= 90) {
        return "diamante";
    } else if (saldo <= 100) {
        return "lendario";
    } else if (saldo >= 101) {
        return "imortal";
    }
}

// Exemplo
let saldo = 500;
let nivel = calcular(saldo);
console.log("Você tem " + saldo + " vitórias e está no Nível " + nivel);