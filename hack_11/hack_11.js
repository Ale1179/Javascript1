/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

// 1) Incluir los 2 arrays en 1 solo array
result = ["h@ck"];

// 2) Reescribir los items del array de números y transformar los items del array de strings
for (let i = 0; i < numberArray.length; i++) {
  if (i % 2 === 0) {
    switch (numberArray[i]) {
      case 1:
        result.push("one");
        break;
      case 3:
        result.push("three");
        break;
      case 5:
        result.push("five");
        break;
      default:
        result.push(numberArray[i]);
    }
  } else {
    result.push(numberArray[i]);
  }

  switch (stringArray[i]) {
    case "foo":
      result.push("f00");
      break;
    case "bar":
      result.push("Bar");
      break;
    case "baz":
      result.push("b@z");
      break;
    case "qux":
      result.push("quX");
      break;
    case "echo":
      result.push("3ch0");
      break;
  }
}

// 3) Anexar "h@ck" al final del array
result.push("h@ck");

module.exports = result;
