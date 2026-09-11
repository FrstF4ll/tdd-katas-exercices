const parseUserInput = (delimiter, numbers) => {
    const numArray = numbers.split(delimiter);
    const mapped = numArray.map(Number);
    const isSmallerThanHundred = (number) => number < 1000
    const filtered =  mapped.filter(isSmallerThanHundred)
    return filtered.reduce((acc, curr) => acc + curr,0)
}

const defineDelimiters = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/
    const matched = numbers.match(definedPattern)
    return matched ? matched[1] : /[,\n]/
}

export const Add = (numbers) => {
    const separators = defineDelimiters(numbers)
    return parseUserInput(separators, numbers)
}

