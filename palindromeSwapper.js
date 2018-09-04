/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

 function palindromeSwapper(str) {
    var newStr = '';

    if (isPalindrome(str)) {
        return true;
    } else {
        for (var i = 0; i < str.length-1; i++) {
            for (var j = 0; j < str.length; j++) {
                if (str[i] === str[j] && i === j) {
                    newStr += str[j+1];
                    newStr += str[i];
                    j++;
                } else {
                    newStr += str[j];
                }
            }

            if (isPalindrome(newStr)) {
                return true;
            }

            newStr = '';
        }

        return false;
    }
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */

function isPalindrome(str) {
    if (str.split('').reverse().join('') === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromeSwapper('rcaecar')); // TRUE
console.log(palindromeSwapper('aktak')); // TRUE
console.log(palindromeSwapper('aykak')); // FALSE