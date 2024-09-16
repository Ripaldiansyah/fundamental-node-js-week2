const text = "malam"

function isPalindrome(text) {
    const palindrome = text.split('').reverse().join('')
    return text === palindrome ? "teks adalah palindrom" : "teks bukan palindrom"
}

console.log(isPalindrome(text))