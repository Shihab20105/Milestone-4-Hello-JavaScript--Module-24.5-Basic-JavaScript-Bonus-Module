/*                          24_5-3 (optional) Explore what you can do with JavaScript Object



const products = [
    {name: 'Phone', price: 12000},
    {name: 'Laptop', price: 35000},
]

console.log(products[0]);
console.log(products[1]); 

Output:
{ name: 'Phone', price: 12000 }
{ name: 'Laptop', price: 35000 }


// const products = [15, 56, 87]
*/

const products = {
    '0': 15,
    '1': 56,
    '2': 87
}

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
/*
Output:
15
56
87 */

/*
** Since 'products' is an object, not an array, you can access its values using either dot notation (if keys are valid identifiers) or bracket notation (which works for all keys). In this case, since the keys are numbers as strings, you must use bracket notation.


const products = {
    '0': 15,
    '1': 56,
    '2': 87
};

// Accessing values
console.log(products[0]); // Output: 15
console.log(products[1]); // Output: 56
console.log(products[2]); // Output: 87

// Alternative way using strings (since keys are strings)
console.log(products['0']); // Output: 15
console.log(products['1']); // Output: 56
console.log(products['2']); // Output: 87

Explanation:
    * 'products[0]' is the same as 'products['0']', because object keys are strings by default.
    * 'console.log(products[1])' prints '56'.
    * 'console.log(products[2])' prints '87'.
*/