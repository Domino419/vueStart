// 2.2 조건문과 반복문 그리고 기타 제어문
// 2.2.5  기타제어문  
// (3) try ... catch   문 


try { 
    let result = 10  / 0 
    console.log(result) ; 
} catch (error) {
    console.log (" 오류발생" , error.message)  ; 
};
