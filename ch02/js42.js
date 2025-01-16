// 2.8.2 전개 연산자

const arr1 = [1,2,3] ;
const arr2 = [...arr1, 4, 5,6] ;
console.log(arr2) ;

const obj1 = {name : "kitai" , age : 25 } ;
const obj2 = { ...obj1, job : "developer"} ;
console.log(obj2) ;

const numbers = [1,2,3]
const add = ( a,b,c) => a +b +c ;
console.log(add(...numbers)) ;

