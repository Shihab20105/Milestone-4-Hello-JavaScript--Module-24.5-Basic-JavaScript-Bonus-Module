/*                          24_5-3 (optional) Explore what you can do with JavaScript Object


const nayok = {
    name : 'Salman Shah',
    id : 191,
    address : 'Sylhet',
    isSingle : true,
    friends : ['Kamal', 'Jamal', 'Hasan', 'Rubel'],
    car : {
        brand : 'Ferrari',
        price : 5000000,
        made : 1997,
    }

}
console.log(nayok); 
Output:
{
  name: 'Salman Shah',
  id: 191,
  address: 'Sylhet',
  isSingle: true,
  friends: [ 'Kamal', 'Jamal', 'Hasan', 'Rubel' ],
  car: { brand: 'Ferrari', price: 5000000, made: 1997 }
} 



 
const nayok = {
    name : 'Salman Shah',
    id : 191,
    address : 'Sylhet',
    isSingle : true,
    friends : ['Kamal', 'Jamal', 'Hasan', 'Rubel'],
    car : {
        brand : 'Ferrari',
        price : 5000000,
        made : 1997,
    }

}
console.log(nayok.friends); 

// Output: [ 'Kamal', 'Jamal', 'Hasan', 'Rubel' ]



const nayok = {
    name : 'Salman Shah',
    id : 191,
    address : 'Sylhet',
    isSingle : true,
    friends : ['Kamal', 'Jamal', 'Hasan', 'Rubel'],
    car : {
        brand : 'Ferrari',
        price : 5000000,
        made : 1997,
    }

}
console.log(nayok.car); 

// Output: { brand: 'Ferrari', price: 5000000, made: 1997 }

*/

const nayok = {
    name : 'Salman Shah',
    id : 191,
    address : 'Sylhet',
    isSingle : true,
    friends : ['Kamal', 'Jamal', 'Hasan', 'Rubel'],
    movies : [{name : 'Shotter Mrittu Nai', year : 1998,}, {name : 'Bichar Hobe', year : 1999}],
    act : function(){
        console.log('Acting like Salman Shah');
    },
    car : {
        brand : 'Ferrari',
        price : 5000000,
        made : 1997,
        manufacture : {
            name : 'Ferrari S.p.A',
            ceo : 'Benedetto Vigna',
            country : 'Italy',
        }
    }

}
console.log(nayok.act);
nayok.act();
/* Output:
[Function: act]
Acting like Salman Shah */