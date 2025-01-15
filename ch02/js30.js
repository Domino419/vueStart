// 2.4 파라미터와 구조 분해 할당
// 2.4.2 구조분해 할당

// 배열 구조 분해 할당
const numbers = [1, 2, 3]; // numbers 배열 선언 및 초기화
const [a, b, c] = numbers; // 배열의 각 요소를 변수 a, b, c에 구조 분해 할당
console.log(a); // 출력: 1
console.log(b); // 출력: 2
console.log(c); // 출력: 3

// 객체 구조 분해 할당
const person = {name: `kitai`, age: 25, city: `Seoul`}; // person 객체 선언 및 초기화
const {name, age, city} = person; // person 객체의 프로퍼티를 구조 분해하여 name, age, city에 할당
console.log(name); // 출력: kitai
console.log(age); // 출력: 25
console.log(city); // 출력: Seoul

// 기본값을 사용한 구조 분해 할당
const data = {id: `kitai`, past: 25}; // data 객체 선언 및 초기화
const {id, past, addr = `Unknown`} = data; // addr 프로퍼티는 기본값 'Unknown'으로 초기화
console.log(id); // 출력: kitai
console.log(past); // 출력: 25
console.log(addr); // 출력: Unknown

// 중첩 객체 구조 분해 할당
const user = {nick: `kitai`, address: {place: `Seoul`, country: `korea`}}; // 중첩 객체 선언 및 초기화
const {nick, address: {place, country}} = user; // 중첩 객체에서 프로퍼티를 구조 분해하여 nick, place, country에 할당
console.log(nick); // 출력: kitai
console.log(place); // 출력: Seoul
console.log(country); // 출력: korea
