//------------------------------------------- ||1-masala||------------------------------
// let obj = {a: 2, b:3, c:4}
// let n = 3
// let result = {}

// for (const a in obj) {
//     result[a] = obj[a] *n
// }
// console.log(result)

//------------------------------------------- ||2-masala||------------------------------

// function fn(str){
//     let count = 0;
//     const spaces = str.split(" ") 
//     for (let space of spaces){
//         if (space.toLowerCase().includes('a')){
//             count++
//         }
//     }
//     return count
// }
// const text = "salom, kalesiz, yaxshimisiz, tuzumisiz . "
// console.log(fn(text))

//------------------------------------------- ||3-masala||------------------------------

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];

// books.forEach((book, index) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`);
// });

//------------------------------------------- ||4-masala||------------------------------

// const arr = ["text", "world", "laptop"];

// const result = {};
// arr.forEach(str => {
//     result[str] = str.length;
// });

// console.log(result);

//------------------------------------------- ||5-masala||------------------------------

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const result = {};
// animals.forEach(animal => {
//     result[animal] = (result[animal] || 0) + 1; 
// });
// console.log(result);


//------------------------------------------- ||6-masala||------------------------------

// const people = [
//     { name: 'Sarah', age: 14 },
//     { name: 'Kiar', age: 57 },
//     { name: 'Rasley', age: 46 },
//     { name: 'Hate', age: 68 },
//     { name: 'Jeny', age: 66 }
// ];
// people.sort((a, b) => a.age - b.age);
// const gap = people[people.length - 1].age - people[0].age;
// console.log(gap); 

//------------------------------------------- ||7-masala||------------------------------

// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// function getTruthyFalsy(arr) {
//     return {
//         truthy: arr.filter(item => Boolean(item)),
//         falsy: arr.filter(item => !Boolean(item))
//     };
// }
// const result = getTruthyFalsy(input);
// console.log(result);


//------------------------------------------- ||8-masala||------------------------------

// function fn(sentence){
//     const caps = sentence.split(" ");
//     let mincap = caps[0]
//     let maxcap = caps[0]

//     caps.forEach(cap => {
//         if (cap.length < mincap.length) mincap = cap
//         else if (cap.length > maxcap.length) maxcap = cap
//     })
//     return { mincap, maxcap }
// }
// console.log(fn("Man maktabda oqiyman"))


//------------------------------------------- ||12-masala||------------------------------
// Qilolmadim


// 13-masala

// const obj = {a: 2, b: 5, c: 7}

// const result = Object.entries(obj)
//     .map(([key, value]) => `${key}: ` + value).join(', ')

// console.log(result)

//------------------------------------------- ||14-masala||------------------------------
// Qilolmadim

//------------------------------------------- ||15-masala||------------------------------

// let array = [1, 2, 3, 4, 2, 3, 5, 6, 3]
// function fn(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr.indexOf(arr[i]) !== i && !newArr.includes(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// console.log(fn(array))
