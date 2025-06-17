/*
  asynchronous.js 비동기 처리에 대한 이해
  자바스크립트 특징이 싱글 스레드, 비동기 처리를 한다.
*/
console.log('-- 시작 --')

// setTimeout 메소드는 인자 2개를 보낸다
// 1. 콜백
// 2. 밀리 세컨드
// 3초 후에 콜백함수 작동
setTimeout(()=> console.log('안녕'), 3000);
// ↑ 이쪽 이 아니라 ↓이쪽 먼저 실행됨 안 기다려줌 
console.log('--끝--')