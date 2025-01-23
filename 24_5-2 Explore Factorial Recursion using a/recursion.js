/*                          24_5-2 Explore Factorial Recursion using a for loop concept */


function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);
// output: 15

/* 

Recursion: When you call a 'function' from within a 'function', that is recursion.

    'return i + sum(i-1);'
    'i' Value '5' thats returning 'sum(i - 1)'
    So, 
    '5 + sum (5 -1)'  =  '5 + sum(4)'

    When it will enter for 'sum(4)' Then it will return again:
    'return i + sum(i-1);'
    '5 + i + sum(i - 1)'  =  '5 + 4 + sum(4 - 1)'  =  '5 + 4 + sum(3)'

    When it call for 'sum(3)'
    'return i + sum(i-1);'
    '5 + 4 + i + sum(i -1)'  =  '5 + 4 + 3 + sum(3 -1)'  =  '5 + 4 + 3 + sum(2)'

    Again when it call for 'sum(2)'
    'return i + sum(i-1);'
    '5 + 4 + 3 + i + sum(i -1)'  =   '5 + 4 + 3 + 2 + sum(2 -1)'  =  '5 + 4 + 3 + 2 + sum(1)'

    When you call for 'sum(1)' that time you will get '1'
    '5 + 4 + 3 + 2 + 1'
/ ----------------------------------------------------------------------------------------------------------- /

i + sum(i-1)  =  5 + sum (5 -1)  =   5 + sum(4)
i + sum(i-1)  =  5 + 4 + sum (4 -1)  =   5 + 4 + sum(3)
i + sum(i-1)  =  5 + 4 + 3 + sum (3 -1)  =   5 + 4 + 3 sum(2)
i + sum(i-1)  =  5 + 4 + 3 + 2 + sum (2 -1)  =   5 + 4 + 3 + 2 sum(1)
5 + 4 + 3 + 2 + 1

/ ------------------------------------------------------------------------------------------------------------ /
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1

/ ------------------------------------------------------------------------------------------------------------ /
That line (if '(i == 1) return 1;)' is crucial because it acts as the base case in recursion. Without it, the function would keep calling itself infinitely, leading to a stack overflow error.

Why is it Important?
    1. Stops the Recursion: It tells the function when to stop calling itself.
    2. Prevents Infinite Loops: Without the base case, the recursion would never end.
    3. Provides the Final Value: This is the point where the recursion starts "returning" values back up the chain.


if (i == 1) {
    return 1;
}
    This means: When 'i' reaches 1, stop the recursion and return 1.

So, always ensure you have a base case in recursive functions!
*/ 