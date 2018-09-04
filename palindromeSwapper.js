/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
/*
KONDISI AWAL
Fungsi tidak melakukan swap huruf
MUST TO DO
membenarkan funsi agar bisa sesuai ekspektasi
TO DO
cari cara swap angka dari urutan terdepan ke terbelakang
*/
function palindromeSwapper(str) {
  
  for (var i = 0; i < str.length; i++) {
    debugger
    let newStr = '';
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        if (i+1===str.length){
          newStr += str[j];
        } 
        else {
          newStr += str[j+1];
          debugger
          newStr += str[j];
          debugger
          j++
        }
      } else {
        newStr += str[j];
      }
      
    }
    if (isPalindrome(newStr)===true) return true;
  }
  return false;debugger
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
