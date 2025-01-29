const readline = require(`node:readline`);
const { stdin: input, stdout: output } = require(`node:process`);

const rl = readline.createInterface({ input, output });


rl.question(`ponha um número aqui`, (numero) => {

    numero = parseInt(numero);

    let soma = 0;


    for (let i = 1; i <= numero; i++) {
        soma += i;
    }


    console.log(`A soma de todos os números 1 até ${numero} é ${soma}`)
    rl.close();
});
