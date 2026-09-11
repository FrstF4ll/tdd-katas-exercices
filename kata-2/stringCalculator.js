export const Add = (numbers) => {
    const definedPattern = /^\/\/(.+)\n([\s\S]*)$/
    const matched = numbers.match(definedPattern)
    let separators = /[,\n]/

    if(matched){
        const delimiter = matched[1]
        const parsedNumbers = matched[2]
        const parsedSplittedNumbers = parsedNumbers.split(delimiter)
        const mappedParsed = parsedSplittedNumbers.map(Number)
        const parsedFiltered = mappedParsed.filter((number) => number < 1000)
        return parsedFiltered.reduce((acc, curr) => acc + curr,0)
    } else {

    const numArray = numbers.split(separators);
    const mapped = numArray.map(Number);
    const filtered =  mapped.filter((number) => number < 1000)
    return filtered.reduce((acc, curr) => acc + curr,0)
    }
}

