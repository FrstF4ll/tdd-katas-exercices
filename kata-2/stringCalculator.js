const hasNegatives = (numbers) => {
    const isSmallerThanZero = (number) => number < 0
    const hasNegatives = numbers.some(isSmallerThanZero)
    if(hasNegatives){
        throw `negatives numbers are not allowed : ${numbers}`
    }
}

const parseUserInput = (delimiter, numbers) => {
    const numArray = numbers.split(delimiter);
    const mapped = numArray.map(Number);
    const isSmallerThanHundred = (number) => number < 1000
    const filtered =  mapped.filter(isSmallerThanHundred)

    hasNegatives(filtered)
    return filtered
}

const defineDelimiters = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/
    const matched = numbers.match(definedPattern)
    return matched ? matched[1] : /[,\n]/
}

export const Add = (numbers) => {
    const separators = defineDelimiters(numbers)
    const parsed = parseUserInput(separators, numbers)
    return parsed.reduce((acc, curr) => acc + curr,0)
}

