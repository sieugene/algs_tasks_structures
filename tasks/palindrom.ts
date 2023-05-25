// aabbaa - true
// aabaB - false
// aZazA - true

// function palindrom(word) {
//     word = word.toLowerCase();
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[i] !== word[word.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// function palindrom(word) {
//   word = word.toLowerCase()
//   return word === word.split("").reverse().join("")
//}

const isPalindrome = (str) => {
     let left = 0
     let right = str.length - 1

     while (left < right) {
        if (str[left] !== str[right]) {
              return false
	}
        left++
	right--
     }
     return true
}

// Madam, I'm Adam

const isEquil = (char) => {
   return char.toLowerCase() !== char.toUpperCase()
}

const isPalindromeWithSymbolsAndSpace = (str) => {
     let left = 0
     let right = str.length - 1

     while (left < right) {
	const leftChar = str[left]
	const rightChar = str[right]
	
	if (!isEquil(leftChar)) {
	    left++
	    continue
	}
	
	if (!isEquil(rightChar)) {
            right--
	    continue
	}
	
        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
          return false
	}
	     
        left++
	right--
     }
     return true
}
                                      
console.log(isPalindrome("aaaZzaAa"))
console.log(isPalindromeWithSymbolsAndSpace("Madam, I'm Adam"))
