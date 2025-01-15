// 2.3 객체와 함수 그리고 메서드 
// 2.3.2  내장 객체 

const today = new Date() ; 
console.log(today) ;

const specificDate = new Date(`2023-12-12`) ; 
console.log(specificDate) ;

console.log(Math.PI) ;

console.log(Math.max(1,5,10)) ;

console.log(Math.random()) ;

const fruits = [`apple`, `banana`, `cherry `] ; 
console.log(fruits.length) ; 

fruits.push(`grape`) ; 
console.log(fruits) ; 

const text = `Hello, world!` ;
console.log(text.length) ; 
console.log(text.toUpperCase()) ; 
console.log(text.includes(`world`)) ; 

let promise = new Promise((resolve, reject) => {
    let succes = true  ; 
    if ( succes ) {
        resolve(`작업성공`) ; 
    } else {
        reject(`작업실패 `)  ; 
    }
}) ; 

promise.then((message) => {
    console.log(message);  
}).catch((error) => {
    console.log(error);  
});
