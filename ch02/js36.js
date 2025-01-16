// 2.6.1 화살표 함수의 this

//전통적인 함수의 this
// person 객체 내에서 sayName 함수는 전통적인 함수이며
// 이 함수에서 this는 sayName이 속해 있는 객체, 즉 person 객체를 참조한다.
// 그래서 this.name은 person.name과 동일하며, 'Kitai'가 출력된다.

const person = {
    name: 'Kitai',
    sayName: function() {
        console.log(this.name);
    }
};
person.sayName();  // 출력: Kitai


//외부 this 참조
//sayName 함수 내에서 printName은 화살표 함수이며
// 화살표 함수는 자신의 this를 가지지 않고 상위 스코프에서 this를 참조한다
// 따라서 sayName 함수 내에서 this는 user 객체를 참조하며, 화살표 함수도 this를 그대로 상속받아
// this.name은 user.name으로 'Kitai'를 출력한다.

const user = {
    name: 'Kitai',
    sayName: function() {
        const printName = () => {
            console.log(this.name);  // 화살표 함수는 외부 스코프의 this를 사용
        };
        printName();
    }
};
user.sayName();  // 출력: Kitai

//전통 함수와 화살표 함수 비교
const member = {
    name: 'Kitai',
    sayName: function() {
        // 전통 함수: this는 동적으로 결정
        // setTimeout의 콜백 함수에서 this는 setTimeout을 호출한 전역 객체를 가리키게 된다. 따라서 this.name은 undefined
        setTimeout(function() {
            console.log('Traditional function:', this.name);  // undefined
        }, 100);

        // 화살표 함수: this는 외부의 this를 참조
        //  화살표 함수는 상위 스코프의 this를 참조하므로, sayName 함수의 this인 member 객체의 name을 사용한다. 따라서 'Kitai'가 출력
        setTimeout(() => {
            console.log('Arrow function:', this.name);  // Kitai
        }, 200);
    }
};
member.sayName();