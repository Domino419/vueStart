// 2.3 객체와 함수 그리고 메서드 
// 2.3.1 사용자 정의 객체 


let Person = {
     name : `kitai`, 
     age : 25, 
     greet : function() {
        console.log(`Hello, my name is ${this.name}`) ; 
     }  
    } ; 

Person.greet() ; 
