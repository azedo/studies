// const s = "(){}[]"; // valid
// const s = "({[]})"; // valid
// const s = "({[}])"; // not valid
// const s = "({[]})"; // valid
// const s = "((((("; // not valid
// const s = ")))))"; // not valid because the constraints are that we cannot have a closing brackets only string, we need to have a closing bracket for an open bracket
const s = "((((()))))"; // valid

// Balanced params problem
function program(s) {
  const input = s.split('');
  const leftChars = [];
  
  // Check if open and closing brackets are in the correct order
  input.forEach((char, i) => {
    // Keep track of the last index of leftChars array
    const lastItem = leftChars.length - 1;
    
    // Check if the char is an opening bracket
    // If it is, keep track of it by pushing it to the stack (leftChars array)
    if (char === '[' || char === '(' || char === '{') {
      leftChars.push(char);
    } else {
      // Check if letfChar stack (leftChars array) is empty, if so, exit with false
      // This is refering to an unmatched right char
      if (!leftChars.length) {
        return false;
      }
      
      // Ensure match check. Make sure that the open and close chars match!
      if (
        char === ')' && leftChars[lastItem] !== '(' ||
        char === '}' && leftChars[lastItem] !== '{' ||
        char === ']' && leftChars[lastItem] !== '['
      ) {
        return false;
      }
      
      leftChars.pop();
    }
  });
  
  return !leftChars.length;
}

console.log(program(s))
