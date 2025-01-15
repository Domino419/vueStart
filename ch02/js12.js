// (8) instanceof 연산자 

//instanceof 연산자는 JavaScript에서 객체가 특정 클래스나 생성자의 인스턴스인지 확인할 때 사용하는 연산자
//instanceof는 객체에만 동작하며, 원시값(문자열, 숫자 등)은 검사할 수 없음.
//new 키워드로 생성된 래퍼 객체는 검사 가능.



let date = new Date() ;
console.log(date instanceof Date ) ;   // date 객체 변수가 Date 클래스로부터 만들어진 인스턴스인지 확인 

