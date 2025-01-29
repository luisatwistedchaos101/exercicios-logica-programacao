const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Ponha um número aqui', (numero) => {

  if (numero == 0){
    console.log("Esse número é igual a zero.")
  }
 if (numero > 0){
  console.log("Este número é positivo")
 }
else if(numero < 0){
console.log("Esse número é negativo")
}
else{
  console.log("algo de errado")
}

  rl.close();
});