function devideAndSort(value) {

    if (typeof value !== "number") {
        return console.log("Pastikan paramater sebuah angka")
    }

    const numbers = value.toString().split("0");

    let tempNumbers = []

    for (const number of numbers) {
        const numberArr = number.split('');
        numberArr.sort((a, b) => {
            return a - b
        })
        tempNumbers.push(numberArr.join(''))
    }

    return parseInt(tempNumbers.join(''))


}

console.log(devideAndSort(5956560159466056))








