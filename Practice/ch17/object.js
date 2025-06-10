const person1 ={
  name : '김철수',
  age: 25, 
  married: false
};

// console.log(typeof person1);
// console.log(person1);

// console.log(person1.name);
// console.log(person1.age);

person1.age = 30;

console.log(person1.age);
console.log("person1['age']",person1['age']);

person1.job = 'programmer';
person1['bloodtype'] = 'o';
console.log(person1);

// 상수인데 어케 바뀜?
// person1이 상수지 그 안에 name, age 이게 상수는 아님
// person1에는 주소값이 저장되어있음 그러니까 주소값을 못 바꾼다는거지 내용은 관계없다는 뜻
// person1은 영원히 저 객체의 주소값만을 가리킴