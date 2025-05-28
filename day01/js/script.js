const screen = document.querySelector("#screen");
const toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;
if (screen && toggleButton) {
  function clickBtn() {
    alert("하하");
  }
  // 첫번째 아규먼트 :문자열(이벤트 이름)
  // 두번째 아규먼트: 함수 주소값 >> 콜백함수
  toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn; //토클 작업. 누를 때 마다 stopWatchOn의 값이 바뀐다
  });
}
