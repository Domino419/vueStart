// 2.3 객체와 함수 그리고 메서드 
// 2.3.3  사용자 정의 함수

function add(a, b) {
    return a + b;
}

console.log(add(2,3));

// 익명 함수 표현식
const muliply = function (a, b) {
    return a * b;
}
console.log(muliply(2, 3));

const subtract = (a,b) => a - b ;
console.log(subtract(5,3)) ;

// 기본 매개변수 값을 사용하는 함수
function greet(name = `Guest`) {
    console.log(`Hello, ${name}!`) ;   // name에 기본값이 없으면 'Guest'로 설정
}

greet() ;                     // 기본값 'Guest' 사용, "Hello, Guest!" 출력
greet(`kitai`) ;        // "kitai"를 name으로 전달, "Hello, kitai!" 출력


// 가변 인자를 받아 합산하는 함수
function sum(...numbers){
    return numbers.reduce((total, num) => total + num ,0)
}

console.log(sum(1,2,3,4)) ;


// 콜백 함수를 매개변수로 받는 함수
function processUserInput(callback){
    const name = `kitai` ;
    callback(name) ;   // 콜백 함수 호출, name 전달
}

processUserInput(function (name) {
    console.log(`Hello, ${name}`) ;  // 콜백 함수 내부에서 이름 출력
}) ;