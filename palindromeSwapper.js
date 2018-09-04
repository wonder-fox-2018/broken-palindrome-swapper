/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  
  for (var i = 0; i < str.length; i++) {
    var newStr = ''; // pindah dari line 9 dan di ganti var
    for (var j = 0; j < str.length; j++) { // i di ganti j 
      if (i === j) {
        if (str[j+1] === undefined) newStr += str[j];   //tambah kondisi untuk handel undefined
        else newStr += str[j+1] + str[j];
        j++;
        
      } else {
        newStr += str[j];
        
      }
      // console.log(newStr);
      
    }
    if (isPalindrome(newStr)) return true;  
  } 
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true; //join tambah '' dan ganti dari console.log()
  return false; // ganti console.log() jadi true
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
