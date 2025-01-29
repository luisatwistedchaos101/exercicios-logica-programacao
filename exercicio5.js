const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');



const rl = readline.createInterface({ input, output });

rl.question('Diga um número', (number) => {

 if (number % 2 === 0){
        console.log("este número é par.");

    } else if (number % 2 === 1){
    console.log("este número é impar.")
    }

  rl.close();
})