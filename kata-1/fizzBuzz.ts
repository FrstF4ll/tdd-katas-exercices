export const fizzBuzz = (number:number):string | number => {
    const fizz:string = "Fizz"
    const buzz:string = "Buzz"

    if(number % 15 === 0) return fizz+buzz;
    if(number % 3 === 0) return fizz;
    if(number % 5 === 0) return buzz;
    
    return `${number}`
}