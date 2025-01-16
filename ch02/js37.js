// 2.7.1 템플릿 리터럴
// ES6(ECMAScript 2015)에서 도입된 기능으로,
// 템플릿 리터럴(Template literals)은 ES6(ES2015)에서 도입된 자바스크립트의 새로운 문자열 표기법입니다.
//문자열을 편리하게 작성하고 다룰 수 있도록 고안되었습니다.
// 기존의 문자열 표기 방식인 작은따옴표(')나 큰따옴표(") 대신 백틱(`)을 사용하여 문자열을 감싸는 것이 주요 특징입니다.
// 템플릿 리터럴은 일반 문자열과 달리 여러 줄에 걸쳐 작성할 수 있으며, 변수와 표현식을 삽입할 수 있어서 문자열 조작을 더욱 편리하게 할 수 있습니다.



const name = 'kitai'

//기존 방식에서는 문자열과 변수를 연결
const greeting1 = 'Hello, ' + name + '!' ;
console.log('기존 방식에서는 문자열과 변수를 연결  : ',greeting1 );

// 템플릿 리터럴 사용
const greeting2 = `Hello, ${name}!` ;
console.log('템플릿 리터럴 사용  : ',greeting2 );

//멀티라인 예시
const message = `
This is a multiline.
string using template literals.
` ;
console.log('멀티라인 예시  : ',message );

// 표현식 삽입
const  a =  5 ;
const  b= 10 ;
console.log('표현식 삽입 예시 : ',`the sum of ${a} and ${b} is ${a+b}.` );
