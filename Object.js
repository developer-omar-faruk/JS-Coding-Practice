{
const user={
    name: "Omar Faruk",
    "age": 21,
    email: "omarfaruk1045@gmail.com",
    fun: function(){
        console.log(`My name is ${this.name}`)
        return 45;
    },
    address: {
        country: "Bangladesh",
        city: "Chandpur"
    }
}
console.log(user.age);
user.amount=1000;
delete user.age;
console.log(user.fun())
console.log(user.address.city);
console.log(user);
console.log(Object.keys(user), Object.values(user), Object.entries(user));

// object looping.
for(let key in user){   // not recomended
    console.log(key, user[key]);
}
for(let keys of Object.keys(user)) console.log(keys, user[keys]);
for(let [key,value] of Object.entries(user)){
    console.log(key, value);
}

// const name = user.name;
const {name,email} = user;  // object destructuring
console.log(name);
const {amount,email:mail} = user;
console.log(mail);

const user2 = {...user} // shallow copy. copy only 1 level
user2.address.city= "Lakshmipur";
console.log(user);  // also change user becouse 1 lv copy.
const user3 = structuredClone(user);    // deep copy
}