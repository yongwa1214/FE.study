// 객체에 사용 
// 키명 가져옴 
const person2 = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    schoole: '한국대',
    major: ['컴퓨터공학','전자공학'],
    graduated: true,
  }
};
for(const item in person2){
  console.log(item); 
}
console.log("----------------------")
for(const item in person2){
  // console.log(`${item}: ${person2[item]}`);  << 이거 쓰면 education은 object object 뜬다 
  console.log(item, ':', person2[item]);
  
}