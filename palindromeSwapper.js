/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if(isPalindrome(str) === true){
    return 'TRUE'
  }

  var newStr = ''
  for(var i = 0 ; i < str.length ; i ++){
    for ( var j = 0 ; j < str.length ; j++){
      if(i===j){
        newStr = newStr + str[j+1]
        newStr = newStr + str[j]
        j++
      }else{
        newStr = newStr + str[j]
      }
    }
    
  var result = isPalindrome(newStr)
  if(result === true){
    return 'TRUE'
  }

  newStr = ''

  }

  return 'FALSE'
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  var reverse = str.split('').reverse().join('')
  if (reverse === str){
    return true
  }else{
    return false
  }
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
console.log(palindromeSwapper('kasurursak')) //TRUE
console.log(palindromeSwapper('kasurruska')) //TRUE
console.log(palindromeSwapper('kasurausrk')) //FALSE
