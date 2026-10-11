// forEach, filter, reducer, map, set   // (val, index, arr)

const arr=[10,30,20,60,50];

// forEach 
arr.forEach((number)=>{     // (number, index, arr)
    console.log(number)
})


// filter
const newArr=arr.filter((num)=> num<50)
console.log(newArr);

// my own filter methord
Array.prototype.filtering= function(callback){  // for only one arr.filtering.
    const ans=[];
    for(let num of this){
        if(callback(num)){  // call passing fun and compyear and return
            ans.push(num);
        }
    }
    return ans;
}
const nArr=arr.filtering((num)=>num<50);
console.log(nArr);


// Map
const arrDouble = arr.map((num)=> num*2);
console.log(arrDouble);


// useCase
const product=[
  { "name": "Wireless Headphones", "price": 2499, "featured": true },
  { "name": "Smart Watch", "price": 3999, "featured": true },
  { "name": "Running Shoes", "price": 1899, "featured": false },
  { "name": "Leather Backpack", "price": 1599, "featured": true },
  { "name": "Cotton T-Shirt", "price": 599, "featured": false },
  { "name": "Bluetooth Speaker", "price": 1299, "featured": true },
  { "name": "Sunglasses", "price": 899, "featured": false },
  { "name": "Mechanical Keyboard", "price": 2799, "featured": true },
  { "name": "Ceramic Coffee Mug", "price": 299, "featured": false },
  { "name": "Laptop Stand", "price": 1099, "featured": false }
]

// 1. price lass than 1000
const lowPrice= product.filter((product)=>product.price<1000);
console.log(lowPrice);

// 2. price lass than 1000. show order way. low to high
const newPrice= product.filter((product)=>product.price<1000).sort((a,b)=>a.price - b.price);
console.log(newPrice);

// 3. map
const mapProduct= product.map((product)=>({name:product.name, price:product.price}));
console.log(mapProduct);

// reducer
const totalPrice= product.reduce((accumulator, currentValue)=>{
    if(currentValue.featured)
        return accumulator+currentValue.price;
    else
        return accumulator;
},0)    // accmulator=0
console.log(totalPrice);

// set remove duplicate valus
const array=[10,20,10,30,40,50,40];
const s1= new Set(arr);
// s1.add(60);
console.log(s1) // s1.has(20);

const email = ["omar@gm", "fauuk@gm", "omar@gm", "faruk@gm"];
const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail);