const users = [
    {
        name:"Ahmet",
        age:30
    },
    {
        name:"Mehmet",
        age:27
    },
    {
        name:"Ali",
        age:21
    },
    {
        name:"Mehmet",
        age:9
    }
];

/**
 *  push
 *  map
 *  find
 *  filter
 *  some
 *  every
 *  includes
 */

// push

/* users.push("ayşe")
console.log(users) */

// map
// for döngüsü yazmak yerine bu tercih edilebilir.
/* 
users.map((x)=>{
    console.log(x.name)
}) */

// find
// array içerisinde verdiğimiz 
// koşulllar ile bir arama işlemi yapar.

/* const result = users.find( ({name,age})=> {
    // gördüüğü ilk veriyi döndürür
    return name === "Mehmet" && age > 30
})

console.log(result) */

// filter

/* const filtered = users.filter(({name,age}) => {
    return name === "Mehmet" && age > 10
    }
    ); 

console.log(filtered) */

// sum
// verdiğimiz koşula istinaden herhangi bir veri bunu sağlıyorsa 
// boolean döner

/* const some = users.some(item => item.age ===35)
console.log(some) */

// every

/* const every = users.every(item => item.age > 10)

console.log(every) */

// includes 
const meyveler = ["elma","armut","muz"]

console.log("Muz :", meyveler.includes("muz"))

meyveler.push("şeftali")

console.log("şeftali :", meyveler.includes("şeftali"))