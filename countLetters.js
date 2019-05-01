function countLetters(str) {
  const counts = {};
  for (let char of str) {
    if (char === ' ') continue;
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
 };
 return counts;
}

console.log(countLetters('aaabbc'));