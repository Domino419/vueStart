// (11) 전개 연산자 
//  배열이나 객체의 모든 요소를 개별적으로 분해하거나 합치는 데 사용

function sum ( ...numbers ) {
    return numbers.reduce((acc, curr) => acc + curr , 0) ; 
}

console.log ( sum(1,2,3) ) ; 