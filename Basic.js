// ---Number, Math Object, Random---
{
// let a="123"
// let b= Number(a);
// console.log(b)
// console.log(String(b))
// console.log(b.toString())
// console.log(Math.abs(-4))
// console.log(Math.ceil(4.58))
// console.log(Math.random())
}

{
// ..syntax1= Math.floor(Math.random()*totalNumberOfOutcome)+shift
// ..syntax2= Math.floor(Math.random()*(max-min+1))+min

// ...to print 1 to 10 ramdom number
console.log(Math.floor(Math.random()*10)+1)

// ...to print 1 to 6 random Number
console.log(Math.floor(Math.random()*6)+1);

// ...create 4 digit OTP 1000-9999 / syntax2
console.log(Math.floor(Math.random()*(9999-1000+1))+1000)
}

{
// create own random function
}



// ---String---
{
const user=" Omar Faruk "
console.log(user.trim())    //remobe fast and last space

const names= "Omar Faruk,Kadir Hazi,Parul Begom,Sumaiya,Sayma";
console.log(names.split(","));  //return arr and seperate all names
}



// ---Date---
{
const now = new Date();

// console.log(now);
// console.log(now.toString())
console.log(now.toLocaleString())
// console.log(now.getMilliseconds())
console.log(Date.now());    //timeStamp
// console.log(new Date(1791467110837))
}

{
console.log(1+"2")
console.log(true+1)
console.log(false+1)
console.log(null+1)
console.log(undefined+1)
}


{
const n1=10;    // can't access fast becouse <uninitilised> (temporal dead zone)
const n2=20;
addFun(n1,n2);
function addFun(a,b){
    console.log(a+b);
}
}


{   // Closure
function counter(){
    let count=0;    // function remember variable from its outer scope
    function increse(){
        count++
        return count;
    }
    return increse;
}
const count= counter();
console.log(count());   // 1
console.log(count());   // 2
console.log(count());   // 3
}