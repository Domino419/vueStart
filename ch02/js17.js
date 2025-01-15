// 2.2 조건문과 반복문 그리고 기타 제어문
// 2.2.1 if문 


let age = 18 ; 
if(age>=18 ){
    console.log(`Adult`) ; 
} else if  ( age < 0 || typeof age !== `number` ) {
    console.log(`Error`)
} else {
    console.log(`Minor`)
}
