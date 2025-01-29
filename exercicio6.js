const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Quantos anos você tem?', (idade) => {

if (idade >= 16){
    console.log("Você já pode votar!")
}
else if (idade < 16){
    console.log("Você não pode votar ainda...")
}
else {
    console.log("Algo de errado...")
}
  rl.close();
});