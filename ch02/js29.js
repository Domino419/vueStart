// 2.4 파라미터와 구조 분해 할당
// 2.4.1 기본 파라미터와 가변 파라미터


function greet(name = `Guest`) {
    console.log(`Hello, ${name}`) ;
}

greet() ;
greet(`kitai`) ;

function sum( ...numbers) {
    return numbers.reduce((total, num) => total + num , 0 ) ;
}

console.log(sum(1,2,3)) ;
console.log(sum(4,5,6,7,8)) ;
