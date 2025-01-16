// (3) 비동기 작업 serTimeout 을 이용한 비동기 Promise



const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
};
// 2초 기다리기 전에 'wait!'을 먼저 로그에 출력
console.log("wait!");

// fetchData 함수 호출 후 프로미스가 해결되면 결과를 출력
fetchData().then(result => { console.log(result); });