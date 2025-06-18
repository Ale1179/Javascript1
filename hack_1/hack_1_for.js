/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

function hackFor() {
    let resultado = [];
    for (let i = 0; i <= 5; i++) {
      resultado.push(i);
    }
    return resultado;
  }
  
  module.exports = hackFor;
  

//export result
module.exports = result;