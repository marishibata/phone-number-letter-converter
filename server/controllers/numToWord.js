// alphabet hash map
const alphabet = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};


const numToWord = (digits) => {

  if (digits.length === 0) {
    return [];
  }

  const result = [];


  // depth first search recursive helper
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      results.push(slate.join(''));
      return;
    }

    // figure out dfs recursive case
    // create alpha hash map where numbers will map letter - abc, def, etc.
    let chars = alphabet[digits[i]];

    for (const char in chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  }

  // return dfs - 0, number, slate
  dfs(0, digits, []);

  return result;

}

module.exports = numToWord;
