const text = "Saya belajar javacript"

function reverseWords(text) {
    return text.split(" ").reverse().join(" ")
}

console.log(reverseWords(text))