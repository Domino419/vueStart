// 2.6.1 화살표 함수의 기본 문법

// 기본적인 화살표 함수
const add = (a,b) => {
    return a+b  ;
}
console.log(add(2,3)) ;


//본문이 한줄인 경우 중괄호와 return 생략 가능
const mutiply = (a,b) => a*b ;
console.log(mutiply(2,3)) ;

// 매개변수가 하나인 경우 괄호 생략 가능
const square = x => x*x ;
console.log(square(4 )) ;

// 매개변수가 없는 경우에는 괄호 필수
const sayHello =() => console.log(`Hello!`) ;
sayHello() ;


// this와 함께 사용할 때
const obj = {
    name: 'Kitai',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);  // 화살표 함수는 this를 상위 스코프에서 가져옴
        }, 1000);
    }
};
obj.greet();  // Hello, Kitai

// 배열 내장 메서드와 함께 사용
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // [1, 4, 9, 16]

// 여러 줄의 코드가 있는 화살표 함수
const findMax = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};
console.log(findMax(10, 20));  // 20