const parseUserInput = (delimiter, numbers) => {
    const numArray = numbers.split(delimiter);
    const mapped = numArray.map(Number);
    const isSmallerThanHundred = (number) => number < 1000
    const filtered =  mapped.filter(isSmallerThanHundred)
    return filtered.reduce((acc, curr) => acc + curr,0)
}

export const Add = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/
    const matched = numbers.match(definedPattern)
    let separators = /[,\n]/

    if(matched){
        const delimiter = matched[1]
        const parsedNumbers = matched[2]
        return parseUserInput(delimiter, parsedNumbers)
    } else {
        return parseUserInput(separators, numbers)
    }
}

