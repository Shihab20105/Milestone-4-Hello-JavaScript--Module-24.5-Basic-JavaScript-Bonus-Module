/*                          24_5-4 (advanced) Find the matching product by searching products 

const numbers = [45, 65, 23, 98, 19];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
Output:
45
65
23
98
19


const numbers = [45, 65, 23, 98, 19];
for(const number of numbers){
    console.log(number);
}
Output:
45
65
23
98
19



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

for(const product of products){
    console.log(product);
}
Output:
{ id: 1, name: 'xaiomi phone One night', price: 19000 }
{ id: 2, name: 'iphone', price: 19000 }
{ id: 3, name: 'mac book air', price: 119000 }
{ id: 4, name: 'lenovo yoga laptop 2025', price: 19000 }
{ id: 5, name: 'Dell inspiron laptop', price: 19000 }
{ id: 6, name: 'samsung phone note 7', price: 19000 }
{ id: 7, name: 'Nokia old phone age gone', price: 19000 }
{ id: 8, name: 'Phone one', price: 19000 }


const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    for(const product of products){
        console.log(product);
    }
}

const result = matchedProducts(products, 'phone'); 
console.log(result);
Output:
{ id: 1, name: 'xaiomi phone One night', price: 19000 }
{ id: 2, name: 'iphone', price: 19000 }
{ id: 3, name: 'mac book air', price: 119000 }
{ id: 4, name: 'lenovo yoga laptop 2025', price: 19000 }
{ id: 5, name: 'Dell inspiron laptop', price: 19000 }
{ id: 6, name: 'samsung phone note 7', price: 19000 }
{ id: 7, name: 'Nokia old phone age gone', price: 19000 }
{ id: 8, name: 'Phone one', price: 19000 }
undefined



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        console.log(product.name);
    }
}

const result = matchedProducts(products, 'phone'); 
console.log(result);
Output:
xaiomi phone One night
iphone
mac book air
lenovo yoga laptop 2025
Dell inspiron laptop
samsung phone note 7
Nokia old phone age gone
Phone one
undefined


const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        console.log(product.name.includes(search));
    }
}

const result = matchedProducts(products, 'phone'); 
console.log(result);
Output:
true
true
false
false
false
true
true
false
undefined



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone'); 
console.log(result);
Output:
[
  { id: 1, name: 'xaiomi phone One night', price: 19000 },
  { id: 2, name: 'iphone', price: 19000 },
  { id: 6, name: 'samsung phone note 7', price: 19000 },
  { id: 7, name: 'Nokia old phone age gone', price: 19000 }
]



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone'); 
console.log(result);
Output:
[
  { id: 1, name: 'xaiomi phone One night', price: 19000 },
  { id: 2, name: 'iphone', price: 19000 },
  { id: 6, name: 'samsung phone note 7', price: 19000 },
  { id: 7, name: 'Nokia old phone age gone', price: 19000 },
  { id: 8, name: 'Phone one', price: 19000 }
]


const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone'); // If you just make 'P' upper case you won't get any result 
console.log(result);
// Output: []



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone'); 
console.log(result);
Output:
[
  { id: 1, name: 'xaiomi phone One night', price: 19000 },
  { id: 2, name: 'iphone', price: 19000 },
  { id: 6, name: 'samsung phone note 7', price: 19000 },
  { id: 7, name: 'Nokia old phone age gone', price: 19000 },
  { id: 8, name: 'Phone one', price: 19000 }
]



const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop'); 
console.log(result);
Output:
[
  { id: 4, name: 'lenovo yoga laptop 2025', price: 19000 },
  { id: 5, name: 'Dell inspiron laptop', price: 19000 }
]
*/


const products = [
    {id: 1, name: 'xaiomi phone One night', price: 19000,},
    {id: 2, name: 'iphone', price: 19000,},
    {id: 3, name: 'mac book air', price: 119000,},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000,},
    {id: 5, name: 'Dell inspiron laptop', price: 19000,},
    {id: 6, name: 'samsung phone note 7', price: 19000,},
    {id: 7, name: 'Nokia old phone age gone', price: 19000,},
    {id: 8, name: 'Phone one', price: 19000,},
    {id: 8, name: 'M1 chip not cheap LapTOP', price: 19000,},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop'); 
console.log(result);
/* Output:
[
  { id: 4, name: 'lenovo yoga laptop 2025', price: 19000 },
  { id: 5, name: 'Dell inspiron laptop', price: 19000 },
  { id: 8, name: 'M1 chip not cheap LapTOP', price: 19000 }
] */