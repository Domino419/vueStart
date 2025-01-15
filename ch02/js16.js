// (12) Optional Chaning (옵션변경 )
//  **Optional Chaining (?.)**은 JavaScript에서 객체나 배열의 깊은 속성을 안전하게 접근할 때 사용하는 연산자

let user = {name : `kitai`} ;

// Optional Chaining 사용 예제: user 객체에 address 속성이 없기 때문에, 에러를 발생시키지 않고 undefined를 반환한다.
console.log ( user?.address?.city ) ; 