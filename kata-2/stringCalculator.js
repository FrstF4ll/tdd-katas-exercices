export const Add = (numbers) => {
    const numArray = numbers.split(",");
    const mapped = numArray.map(Number);
    return mapped.reduce((acc, curr) => acc + curr, 0)
}