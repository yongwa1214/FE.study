const arr = [10, 20, 30, 40];

console.log('length:', arr.length);

// arr.length 수만큼 반복함 
arr.forEach(function(item,idx){
  console.log(`item: ${item} , idx:${idx}`)
});

const myArr = {
  0:10,
  1:20,
  2:30,
  3:40,
  4:55,
  length: 5,
  forEach: function(cb) {
    for(let i=0; i<this.length; i++){
      cb(this[i],i)
    }
  }
};
console.log('');
console.log('my-length:', myArr.length);

// myArr에 있는 foreach를 호출
// 인자 하나 받고 있음 
myArr.forEach(function(item,idx){
  console.log(`item: ${item} , idx:${idx}`)
});


// forEach를 이용하여 arr의 모든 값들을 더한 결과값을 구하시오.
let sumArr = 0;
myArr.forEach(item => sumArr += item);

console.log(sumArr);