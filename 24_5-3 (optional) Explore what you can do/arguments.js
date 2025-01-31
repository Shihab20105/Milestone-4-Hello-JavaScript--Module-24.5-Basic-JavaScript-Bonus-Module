/*                          24_5-3 (optional) Explore what you can do with JavaScript Object

function add(num1, num2){
    console.log(num1, num2);
}

add(12, 13);
// Output: 12 13


// For some reason, if I give it a few more 'parameters', I get these 12 and 13 as well.
function add(num1, num2){
    console.log(num1, num2);
}

add(12, 13, 45, 89, 78);
// Output: 12 13

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
}

add(12, 13, 45, 89, 78);
Output: 12 13
[Arguments] { '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }

// [Arguments] '{ '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }' This is not 100% array. This is array like object.

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[3]);
}

add(12, 13, 45, 89, 78);
Output: 12 13
89

// [Arguments] '{ '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }' This is not 100% array. This is array like object. But it does have index.
*/

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[4]);
}

add(12, 13, 45, 89, 78);
/* Output: 12 13
78 */