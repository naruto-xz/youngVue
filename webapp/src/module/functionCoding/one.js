// 1.声明式编程
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i<arr.length; i++){
//   arr[i] = Math.pow(arr[i], 2);
// }
// console.log(arr); //[1, 4, 9, 16, 25]
//
// let arr = [1, 2, 3, 4, 5];
// arr = arr.map(num=> Math.pow(num, 2));
// console.log(arr); //[1, 4, 9, 16, 25]

// 2.纯函数
// let count = 0;
// function increment() {
//   count++;
// }

//另外一个例子

// function showStudent(id) {
//   let student = db.get(id);
//   if(student !== null){
//     document.querySelector("elementId").innerHTML = `${student.id},${student.firstName},${student.lastName}`;
//   }else{
//     throw new Error('student not found!');
//   }
// }
// showStudent(101);


// let find = function(db, id){
//   let obj = db.get(id);
//   if(obj === null){
//     throw new Error('student not found!');
//   }
//   return obj;
// };
//
// let str = function (student) {
//   return `${student.id},${student.firstName},${student.lastName}`
// };
//
// let append = function (elementId, info) {
//   document.querySelector(elementId).innerHTML = info;
// };
//
// let showStudent = run(
//   append('#elementId'),
//   str,
//   find(db)
// );
// showStudent(101);

// 3.引用透明

// let count = 0;
// //...
// function increment() {
//   //...
//   count++;
// }
// increment();
// increment();
// console.log(count); // ?
//
//
// let increment = count => count++;
// let res = run(increment, increment);
// run(0);
// console.log(res); //2


// let arr = [80, 90, 100];
// let total = 0;
// let count = 0;
// arr.forEach(item => {
//   total += item;
//   count++;
// });
// let average = total/count;
// console.log(average);


// let arr = [80, 90, 100];
// let res = average(arr);
// console.log(res); //90


// let sum = arr => arr.reduce((pre, cur)=>{
//   return pre + cur;
// });
// let size = arr => arr.length;
// let divide = (a, b) => a/b;
// let average = arr => divide(sum(arr), size(arr));
// console.log(average(arr));

//流式链处理数据

// let errollment = [
//   {course: 2, grade: 100 },
//   {course: 2, grade: 80 },
//   {course: 1, grade: 89 },
// ];
// let totalGrades = 0;
// let totalStudentFound = 0;
// for (let i = 0; i<errollment.length; i++) {
//   let student = errollment[i];
//   if(student !== null && student.course > 1){
//     totalGrades += student.grade;
//     totalStudentFound++;
//   }
// }
// let average = totalGrades/totalStudentFound;
// console.log(average);   //90


// let errollment = [
//   {course: 2, grade: 100 },
//   {course: 2, grade: 80 },
//   {course: 1, grade: 89 },
// ];
// let res = _.chain(errollment)
//           .filter(student => student.course > 1)
//           .pluck('grade')
//           .average();
//
// console.log(res); //90


function eat() {
  let age = 0;
  return {
    getAge(){
      return age;
    }
  }
}
let res = eat();
console.log(res.getAge());
