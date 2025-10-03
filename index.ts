let produto: string = "Tênis";
let preco: number = 250.00;
console.log(`O produto ${produto} custa R$${preco.toFixed(2)}`);

////////
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Bruna"));

////////
let meuNome: string = "Ana";
let novaIdade: number = 28;
let mAtivo: boolean = true;
console.log(`Nome: ${meuNome} , Idade: ${novaIdade} anos e estou ativo: ${mAtivo}`);

//////// errada não pode atribuir number a string
let quantidade: number = 5;
//console.log('Quantidade:', ${quantidade});

//////// errada
let mensagem: string = "Bem-vindo!";
//console.log(´mensagem: ${mensagem}´);
//////// Não pode atribuir string a number

function dobro(valor: number): number {
    return valor * 2;
}
console.log(dobro(4));
////////

let altura: number = 1.70;
let nomeCompleto: string = "Ana Silva";
console.log(`Nome: ${nomeCompleto}, Altura: ${altura}m`);
////////

function estarAtivo(ativo: boolean): string {
    return ativo ? "Usuário está ativo" : "Usuário está inativo";
}
console.log(estarAtivo(true));
console.log(estarAtivo(false));
////////

let cidade: string = "olinda";
let temperatura: number = 29;
console.log(`A cidade de: ${cidade}, está com a temperatura: ${temperatura}°C`);
////////

function somar(a: number, b: number): number {
    return a + b;
}
