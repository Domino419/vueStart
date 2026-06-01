// (12) Optional Chaning (옵션변경 )
//  **Optional Chaining (?.)**은 JavaScript에서 객체나 배열의 깊은 속성을 안전하게 접근할 때 사용하는 연산자

let user = {name : `kitai`} ;

// Optional Chaining 사용 예제: user 객체에 address 속성이 없기 때문에, 에러를 발생시키지 않고 undefined를 반환한다.
console.log ( user?.address?.city ) ; 

// 서버에서 받은 응답 예시
let response = {
  data: {
    user: {
      name: "kitai",
      // profile은 없는 경우도 있음
    }
  }
};

// profile이 없으므로 에러 대신 undefined 반환
console.log(response?.data?.user?.profile?.image); // undefined

// name은 존재하므로 정상 출력
console.log(response?.data?.user?.name); // "kitai"

// data가 아예 없는 경우에도 안전하게 접근 가능
let emptyResponse = {};
console.log(emptyResponse?.data?.user?.profile?.image); // undefined

