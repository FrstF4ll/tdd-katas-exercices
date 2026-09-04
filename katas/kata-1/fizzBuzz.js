export const fizzBuzz = (number) => {
    const fizz = "Fizz"
    const buzz = "Buzz"

    if(number % 15 === 0) return fizz+buzz;
    if(number % 3 === 0) return fizz;
    if(number % 5 === 0) return buzz;
    
    return `${number}`
}