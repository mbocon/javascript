// // function findMax(arr, index = 1, max = arr[0]) {
// //    if (index === arr.length) {
// //       console.log('The IF block only gets hit once on recursive call 6')
// //       return max;
// //    } else if (arr[index] > max) {
// //       max = arr[index];
// //       console.log(max, 'is max', index, 'is index',   'from ELSE IF block')
// //       return findMax(arr, (index += 1), max);
// //    } else {
// //       console.log(max, 'is max', index, 'is index', 'from ELSE block')
// //       return findMax(arr, (index += 1), max);
// //    }
// // }

// // console.log(findMax([4, 5, 6, 32, 1, 23]));



function letterCombinations(arr) {
  let str;
  //convert input array into string
  if (Array.isArray(arr)) {
    str = arr.join("");
  } else {
    str = arr;
  }

  // Check the base cases (input arr length of 0 or 1)
  if (str.length === 0) return [];
  if (str.length === 1) return [str];

  // Create results arr
  const results = [];

  // 1st iteration...
  for (let i = 0; i < str.length; i++) {
    // push all single letter values into the results array...no need for recursive call on this step.
    results.push(str[i])

    // Create variables for currentChar and the remainingChars
    let currentChar = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);

    // 2nd iteration...
    // push all 2 letter combos using a recursive call
    for (let j = 0; j < remainingChars.length; j++) {
      results.push(currentChar + letterCombinations(remainingChars[j]));
    }

    // using the length of the remainingChars I can create a 3 letter combo
    let count = remainingChars.length;

    // 3rd iteration...push all 3 letter combos using another recursive call
    for (let x = 0; x < remainingChars.length; x++) {
      // decrement the count to give access to the proper index position for the last letter of the 3 letter combo
      // on each iteration
      count--
      results.push(currentChar + letterCombinations(remainingChars[x]) + remainingChars[count])
    }
  }

  // console.log(results, 'results not in the proper order at this point, so I can use the sort method to sort Alphabetically')

  // https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html <- sort reference

  return results.sort((firstWord, secondWord) => firstWord.length - secondWord.length);
}

console.log(letterCombinations(['a', 'b', 'c']));