function isPalindrome(str) {
 const cleanStr = str.replace(/\s+/g, '').toLowerCase();
 // return lowerCaseStr === LowerCaseStr.split('').reverse().join('');
 //const str = "madam";
//console.log(isPalindrome(str));
 const length = cleanedStr.length;

 for (let i = 0; i < length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
        return false;
    }
}
return true;
}
const testStr1 = "madam";
console.log(isPalindrome(testStr1));



