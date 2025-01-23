/*                          24_5-2 Explore Factorial Recursion using a for loop concept */

/* let factorial = 1;
for(let i = 5; i >= 1; i--){
    factorial = factorial * i;

}
console.log(factorial); */
// Output: 120

// For the Recursion you must need a stopping condition

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}

const result = factorial(5);

/* 
i * factorial(i - 1);  =  5 * factorial(5 - 1)  =  5 * factorial(4)
i * factorial(i - 1);  =  5 * 4 *  factorial(4 - 1)  =  5 * 4 * factorial(3)
i * factorial(i - 1);  =  5 * 4 * 3 * factorial(3 - 1)  =  5 * 4 * 3 * factorial(2)
i * factorial(i - 1);  =  5 * 4 * 3 * 2 * factorial(2 - 1)  =  5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1






5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1

*/