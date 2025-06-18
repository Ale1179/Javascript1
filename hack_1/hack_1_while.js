/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

function hackWhile() {
    let resultado = [];
    let i = 0;
    while (i <= 5) {
      resultado.push(i);
      i++;
    }
    return resultado;
  }
  
  module.exports = hackWhile;
  
  

//export result
module.exports = result;