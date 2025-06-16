// map을 사용하는 이유는? 똑같은 크기의 새로운 배열을 만들면서 새로운 값들로 세팅하고 싶을 때
// 원본을 건드리지 않음 
const arr = [11, 32, 5, 19, 40, 56];
const mapArr = arr.map(item => item + 1);
// const mapArr = arr; // 이건 shallow copy(주소값 복사)

console.log('arr: ', arr);
mapArr[0] = 100;
console.log('mapArr: ', mapArr);
console.log('arr === mapArr', arr === mapArr)


/*
객체 프로퍼티 접근 방법
1. 점 표기법
객체.key: 마침표를 사용하여 프로퍼티에 접근하는 표기법
※ 대소문자 구분해서 써야함, 변수를 포함할 수 없음, 숫자로 시작할 수 없음 

2. 괄호 표기법
객체['key']: 대괄호 사이에 키의 값을 문자열로 넣어서 접근하는 표기법이다. 
- 키 값이 변수일 때 주로 사용 (예 name:전우치 이때는[name]으로 표기), 
객체의 프로퍼티에 변수를 활용하여 접근할 수 있다
대소문자를 구분하지 않고, 숫자나 공백이 사용 가능하다 
*/
const myArr = {
  0: 11,
  1: 32,
  2: 5,
  3: 19,
  4: 40,
  5: 56,
  length: 6,
  forEach: function(cb) {
    for(let i=0; i < this.length; i++){
      cb(this[i],i)
    }
  },
  map: function(cb){
   const temp = new Array(this.length);
   for( let i = 0; i <this.length; i++){
    temp[i]= cb(this[i],i)
   }
   return temp;
  }
};

const myMapArr = myArr.map(item => item + 1);
console.log('myMapArr: ',myMapArr);
