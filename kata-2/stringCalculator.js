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

const hasMultipleDelimiters = (delimitersConfig) => {
    const multipleDelimiterPattern = /\[([^\]]+)\]/g
    const matchMultipleDelimiters = delimitersConfig.match(multipleDelimiterPattern)
    if(matchMultipleDelimiters){
        return matchMultipleDelimiters.map((delimiter) => delimiter.slice(1, -1))
    }
}

const defineDelimiters = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/
    const matched = numbers.match(definedPattern)
    if(!matched){
        return  /[,\n]/
    }
    const multipleDelimiters = hasMultipleDelimiters(matched[1])
    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    return multipleDelimiters
        ? new RegExp(multipleDelimiters.map(escapeRegExp).join("|"))
        : new RegExp(escapeRegExp(matched[1]));
}

export const Add = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/;
    const matched = numbers.match(definedPattern);
    const numbersOnly = matched ? matched[2] : numbers;

    const separators = defineDelimiters(numbers)
    const parsed = parseUserInput(separators, numbersOnly)
    return parsed.reduce((acc, curr) => acc + curr,0)
}

