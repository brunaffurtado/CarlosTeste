"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let produto = "Tênis";
let preco = 250.00;
console.log(`O produto ${produto} custa R$${preco.toFixed(2)}`);
////////
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Bruna"));
////////
let meuNome = "Ana";
let novaIdade = 28;
let mAtivo = true;
console.log(`Nome: ${meuNome} , Idade: ${novaIdade} anos e estou ativo: ${mAtivo}`);
//////// errada não pode atribuir number a string
let quantidade = 5;
//console.log('Quantidade:', ${quantidade});
//////// errada
let mensagem = "Bem-vindo!";
//console.log(´mensagem: ${mensagem}´);
//////// Não pode atribuir string a number
function dobro(valor) {
    return valor * 2;
}
console.log(dobro(4));
////////
let altura = 1.70;
let nomeCompleto = "Ana Silva";
console.log(`Nome: ${nomeCompleto}, Altura: ${altura}m`);
////////
function estarAtivo(ativo) {
    return ativo ? "Usuário está ativo" : "Usuário está inativo";
}
console.log(estarAtivo(true));
console.log(estarAtivo(false));
////////
let cidade = "olinda";
let temperatura = 29;
console.log(`A cidade de: ${cidade}, está com a temperatura: ${temperatura}°C`);
////////
function somar(a, b) {
    return a + b;
}
//# sourceMappingURL=index.js.map