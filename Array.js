{

// 1. Print All Elements
const arr=[51,-32,71,23,-10,45];
for(i=0;i<arr.length; i++) console.log(arr[i]);


// 2. Find the Sum
let sum=0;
for(i=0; i<arr.length; i++) sum+=arr[i];
console.log(`sum = ${sum}`)


// 3. Find the Average
let arrSum=0;
for(i=0; i<arr.length; i++) arrSum+=arr[i];
console.log(`average = ${arrSum/2}`)


// 4. Find the Largest Number
console.log(`lerge num is = ${Math.max(...arr)}`)


// 5. Find the Smallest Number
console.log(`small num is = ${Math.min(...arr)}`)


// 6. Count Even Numbers
let evenCount=0;
for(i=0; i<arr.length; i++){
    if(arr[i]%2 == 0) evenCount++;
}
console.log(`evenCount = ${evenCount}`)


// 7. Count odd Numbers
let oddCount=0;
for(i=0; i<arr.length; i++){
    if(arr[i]%2 != 0) oddCount++;
}
console.log(`oddCount = ${oddCount}`)


// 8. Search for an Element
function searchEle(arr,target){
    let notFound=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]==target){
            console.log("Found")
            notFound=1;
            return;
        }
    }
    if(notFound==0) console.log("Not Found")
}
searchEle(arr,10);


// 9. Reverse an Array
console.log(`Reverse arr = ${[...arr].reverse()}`)


// 10. Count Positive, Negative and Zero
let countZero=0;
let countPositive=0;
let countNegative=0;
for(i=0; i<arr.length; i++){
    if(arr[i]>0) countPositive++;
    else if(arr[i]<0) countNegative++;
    else countZero++;
}
console.log(`Positive: ${countPositive}, Nagative: ${countNegative}, Zero: ${countZero}`);


}



