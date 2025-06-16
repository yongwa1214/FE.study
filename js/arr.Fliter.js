
// 원본에서 필요한 아이템만 걸러서 새로운 배열을 만들고 싶을 때 

const arr = [11, 32, 5, 19, 40, 56];
const filterArr = arr.filter(item => item % 2 === 0); // 결과 타입 불린 
//console.log('arr:', arr);
//console.log('filterArr:', filterArr); 

/*
const temp = [];
temp.push(1);
temp.push(2);
temp.push(3);

console.log(temp);
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
  },

  filter: function(cb){
  const temp = [];
  // 작업
  // 짝수 값을 찾아 true 면 집어넣기 
  // push는 공간 지정 안해줘도 됨 그냥 넣어 
  for( let i = 0; i < this.length; i++){
    if(cb(this[i],i)){
      temp.push(this[i]);
    }
   }
   return temp;
  }
};



const myFilterArr = myArr.filter(item => item % 2 === 0); // 결과 타입 불린 
//const myFilterArr2 = arr.filter(item => item > 50); // 결과 타입 불린 
console.log('myFilterArr', myFilterArr); 