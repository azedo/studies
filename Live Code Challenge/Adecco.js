// const s = "(){}[]";
// const s = "({[]})";
// const s = "({[}])";
const s = "({[]})";

function program(s) {
  const input = s.split('');
  const result = [];
  
  // Check if open and closing brackets are in the correct order
  input.forEach((char, i) => {
    if (i === input.length - 1) {
      result.push(true);
    } else if (char === '(') {
      // the following char has to be either ) or {}, [], {[]}, [{}]
      if (
        input[i + 1] === ')' || 
        input[i + 1] === '{' || 
        input[i + 1] === '['
      ) {
        result.push(true);
      } else {
        result.push(false)
      }
    } else if (char === '{') {
      // the following char has to be either } or (), [], {[]}, [{}]
      if (
        input[i + 1] === '}' || 
        input[i + 1] === '(' || 
        input[i + 1] === '['
      ) {
        result.push(true);
      } else {
        result.push(false);
      }
    } else if (char === '[') {
      // the following char has to be either [ or {}, (), {()}, ({})
      if (
        input[i + 1] === ']' || 
        input[i + 1] === '(' || 
        input[i + 1] === '{'
      ) {
        // console.log(true, input[i + 1]);
        result.push(true);
      } else {
        // console.log(false, input[i + 1]);
        result.push(false);
      }
    } else if (char === ')') {
      // the following char has to be either [ or {}, (), {()}, ({})
      if (
        input[i + 1] === '[' || 
        input[i + 1] === ']' || 
        input[i + 1] === '{' || 
        input[i + 1] === '}'
      ) {
        // console.log(true, input[i + 1]);
        result.push(true);
      } else {
        // console.log(false, input[i + 1]);
        result.push(false);
      }
    }
    else if (char === '}') {
      // the following char has to be either [ or {}, (), {()}, ({})
      if (
        input[i + 1] === '[' || 
        input[i + 1] === ']' || 
        input[i + 1] === '(' || 
        input[i + 1] === ')'
      ) {
        // console.log(true, input[i + 1]);
        result.push(true);
      } else {
        // console.log(false, input[i + 1]);
        result.push(false);
      }
    } else if (char === ']') {
      // the following char has to be either [ or {}, (), {()}, ({})
      if (
        input[i + 1] === '{' || 
        input[i + 1] === '}' || 
        input[i + 1] === '(' || 
        input[i + 1] === ')'
      ) {
        // console.log(true, input[i + 1]);
        result.push(true);
      } else {
        // console.log(false, input[i + 1]);
        result.push(false);
      }
    }
    // console.log(char);
  })
  
  // Check if at least one value is false
  const isValid = result.some(el => !el)
  let finalResult;
  
  if (!isValid) {
    finalResult = "Is valid";
  } else {
    finalResult = "Not valid";
  }
  
  return finalResult;
}

console.log(program(s))
