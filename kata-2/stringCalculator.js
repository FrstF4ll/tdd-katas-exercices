export const Add = (numbers) => {
    const numArray = numbers.split(",");
    const mapped = numArray.map(Number);
    const filtered =  mapped.filter((number) => number < 1000)
    return filtered.reduce((acc, curr) => acc + curr,0)
}