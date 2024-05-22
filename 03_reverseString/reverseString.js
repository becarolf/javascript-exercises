const reverseString = function(str) {
  const arrayStr = str.split('');
  const reverseArray = arrayStr.reverse();
  const joinArray = reverseArray.join('');

  return joinArray;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
