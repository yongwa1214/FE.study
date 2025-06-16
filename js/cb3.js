function sum(n1, n2){
  return n1 + n2;
}

function sub (n1, n2){
  return n1 - n2;
}

const calc = function(cd, n1, n2){
  console.log("결과:",cd(n1,n2));
}

/*
호이스팅 일어나서 밑에 적어도 됨 
그래도 선언하고 사용하도록 하자 
function calc (cd, n1, n2){
  console.log("결과:",cd(n1,n2));
}
*/

calc(sum, 10, 20); // 콘솔에 결과: 30 출
calc(sub, 20 ,12); // 콘솔에 결과: 8이 출력
