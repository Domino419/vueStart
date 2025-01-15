// 2.2 조건문과 반복문 그리고 기타 제어문
// 2.2.3  for 문 


for(let i = 0 ; i < 5  ; i++ ){
    console.log(i) ; 
}

let array = [10, 20, 30 ]; 

for (let value of array) {
    console.log(value) ; 
}

let Person = { name : `kitai`, age : 25 } ;
for ( let key in Person ) {
    console.log( `${key} : ${Person[key]}`) ; 
}
