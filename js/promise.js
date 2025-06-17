// promise.js
// ES5 생성자 함수 , 인자로 콜백함수를 보낸다
// 콜백함수의 파라미터는 2개 파라미터명은 아무거나해도 상관없으나
// 보통 resolve, reject로 한다.
// resolve - 콜백함수(함수 주소값)
// reject - 콜백함수 (함수 주소값)
// 함수 주소값 알면 호출할 수 있다.
const p = new Promise((resolve, reject) => {
  // resolve는 성공시 호출
  //resolve('성공'); // then 메소드의 콜백함수가 호출

  // reject는 실패시 호출 // catch 메소드의 콜백함수가 호출
  reject('실패');
});

p.then(item =>{
  console.log('then:', item);
})
  .catch(item => {
  console.log('catch:',item);
}); 