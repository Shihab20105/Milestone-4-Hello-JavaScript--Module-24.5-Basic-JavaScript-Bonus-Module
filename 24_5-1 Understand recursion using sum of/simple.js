/*                          24_5-1 Understand recursion using sum of numbers

let sum = (0);
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log(sum); 
// Output: 15

let sum = 0;
for(let i = 5; i >= 1; i--){
    sum = sum + i;
}
console.log(sum);
// Output: 15
/ ----------------------------------------------------------------------------------------------------------- /

     let sum = 0;
// Loop Variable     Loop Condition     Loop Variables Change
//       ^                 ^              ^ 
    for(let i = 5;      i >= 1;          i--){
        sum = sum + i;
    }
    console.log(sum); 



function sum(i){
    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);
*/ 

// There is Stopping Condition missing, So you need to give a stopping Condition. 

function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);
// output: 15

// If you want to call the 'function' inside the 'function' you can do this like this one.