// 2.8.3 Proxy

// 타겟 객체 정의 - 이 객체의 프로퍼티에 접근할 때 동작을 수정하려고 함
const target = { message : "Hello, world ! "} ;

// 핸들러 객체 정의 - get 트랩을 사용하여 프로퍼티에 접근할 때 특정 동작을 정의
const handler = {
    get: (target, property) => {  // 'get' 트랩은 타겟 객체에서 프로퍼티를 읽을 때 호출됨
        if (property in target) {  // 타겟 객체에 프로퍼티가 존재하는지 확인
            return target[property];  // 존재하면 해당 프로퍼티 값을 반환
        } else {
            return "Property does not exist";
        }
    }
};


// Proxy 생성 - target 객체에 접근할 때 handler에 정의된 동작을 사용

const proxy = new Proxy(target, handler);  // 프록시 생성할 때 대문자 P!!!

console.log(proxy.message);  // 타겟 객체의 'message' 프로퍼티에 접근, 정상적으로 값 반환
console.log(proxy.nonExistentProperty);  // 타겟 객체에 없는 'nonExistentProperty'에 접근, 핸들러에서 처리된 기본 메시지 반환
console.log(proxy.testing);  // 타겟 객체에 없는 'nonExistentProperty'에 접근, 핸들러에서 처리된 기본 메시지 반환