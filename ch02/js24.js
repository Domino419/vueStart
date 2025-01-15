// 2.2 조건문과 반복문 그리고 기타 제어문
// 2.2.5  기타제어문  
// (4) throw 문 


function checkAge ( age) {
    if ( age < 18 ) { throw new Error ("나이 미달 ") ; }
        return "입장 가능 " ; 
    } try {
         console.log(checkAge(15)) ; 
    } catch(error) {
        console.log( "오류 :" , error.message); 
    }



    