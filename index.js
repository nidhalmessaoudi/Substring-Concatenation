/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  const wordLength = words[0].length;

  const indexesArr = [];
  for (let i = 0; i < s.length; i++) {
    const sWords = [];
    let k = i;
    let j = k + wordLength;
    while (j <= i + wordLength * words.length && j <= s.length) {
      sWords.push(s.substring(k, j));
      k = j;
      j = j + wordLength;
    }

    if (sWords.length !== words.length || !compareTwoArrays(words, sWords)) {
      continue;
    }
    indexesArr.push(i);
  }
  return indexesArr;
};

/**
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @return {boolean}
 */
function compareTwoArrays(arr1, arr2) {
  let areTheSame = false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        areTheSame = true;
        arr2.splice(j, 1);
        break;
      }
      if (j === arr2.length - 1) {
        return false;
      }
      areTheSame = false;
    }
  }
  return areTheSame;
}
