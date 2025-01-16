// 2.8 데이터 전달과 비동기 처리
// 2.8.1 Promiose
//  1. Promise의 기본 구조
// Promise 객체는 JavaScript에서 비동기 작업을 다루는 중요한 도구입니다.
// 비동기 작업이 성공하면 resolve, 실패하면 reject를 호출하고, 그 후 then(), catch()로 결과나 에러를 처리합니다.
// Promise를 사용하면 비동기 작업을 순차적으로 처리하거나 여러 작업을 병렬로 처리할 수 있습니다.


const myPromise = new Promise((resolve, reject) => {
    const success = true;
  //  const success = false;
    if (success) {
        resolve("the operation was successfull ! ");
    } else {reject("The operation was failed ! ")}
});

myPromise
    .then(result => {console.log(result); })
    .catch(error => {console.error(error); });