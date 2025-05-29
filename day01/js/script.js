const screen = document.querySelector("#screen");
const toggleButton = document.querySelector("#button");
const resetButton = document.querySelector(".reset");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log("안녕");
// if (screen && toggleButton) {
//   function clickBtn() {
//     alert("하하");
//   }}
// 첫번째 아규먼트 :문자열(이벤트 이름)
// 두번째 아규먼트: 함수 주소값 >> 콜백함수
toggleButton.addEventListener("click", () => {
  stopWatchOn = !stopWatchOn; //토클 작업. 누를 때 마다 stopWatchOn의 값이 바뀐다
  toggleButton.innerText = stopWatchOn ? "■" : "▶";
  toggleButton.style.backgroundColor = stopWatchOn ? "#ff6232" : "#3e8dce";

  if (stopWatchOn) {
    
    // 첫번째 인자: 콜백함수
    // 두번째 인자: Number - ms(밀리세컨드)를 의미함
    timeInterval = setInterval(() => {

// 1초 >> 100
// 1분 >> 60초 > 6000
      seconds++;
      const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, "0"); //floor: 실수값은 날린다
      const ss = String(Math.floor(seconds / 100) % 60).padStart(2, "0"); 

// floor: 실수값은 날린다(실수 내림처리)
// Math.round는 반올림 처리
// Math.ceil은 올림처리 
// padStart 문자열의 시작부분부터 지정한 길이만큼 문자열을 채원줌 
// padStart(나타내고 싶은 길이, 부족한 자리를 채워줄 문자)

      const cs = String(seconds % 100).padStart(2, "0");
      screen.innerHTML = `${mm}:${ss}:${cs}`;
    }, 10);
  } else {
    clearInterval(timeInterval);
    // seconds = 0;
    // screen.innerHTML = "00:00:00";
  }
  resetButton.addEventListener('click', () => {
    if(stopWatchOn === false){
      stopWatchOn = true;
    } else {
        stopWatchOn = false;
    }
    clearInterval(timeInterval);
    seconds = 0;
    screen.innerHTML = "00:00:00";
  })
});
