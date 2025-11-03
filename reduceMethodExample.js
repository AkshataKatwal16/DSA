// //Reduce
// //Q1️⃣. Sum of Numbers
// const nums = [1, 2, 3, 4];
// const y = nums.reduce(
//   (accumulator, currentValue) => {accumulator = accumulator + currentValue
//   return  accumulator},
//   0
// );
// //Q2️⃣. Multiply All Numbers
// const m=nums.reduce((accumulator, currentValue)=>{accumulator=accumulator*currentValue ;
//     return accumulator;
// }, 1)
// //console.log(m)

// //Q3️⃣. Find Maximum Number
// const max=nums.reduce((accumulator, currentValue)=>{
//   if(accumulator>currentValue) return accumulator
//   return currentValue; })
// //console.log(max)

// //Q5️⃣. Count Total Characters
// const words = ['hi', 'hello', 'world'];
// // 👉 Output: 12  (2 + 5 + 5)
// const l=words.reduce((accumulator, currentValue)=>
//     accumulator+ currentValue.length

// ,0)
// //console.log(l)


// //Q6️⃣. Count Occurrences of Each Fruit
// const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'apple'];
// // 👉 Output: { apple: 3, banana: 2, mango: 1 }

// const obj=fruits.reduce((accumulator, currentValue )=>{
//   accumulator[currentValue] = currentValue.length;
//   return  accumulator;
// }, {})
// //console.log(obj)

// //Q7️⃣. Concatenate All Strings
// const arr = ['Hi', 'there', 'user'];
// // 👉 Output: "Hithereuser"
// const s=arr.reduce((accumulator, currentVlaue)=>{
    
//     accumulator=accumulator+currentVlaue;
//     return accumulator;
// }, "")
// console.log(s)


// //Q8️⃣. Flatten Array
// const a= [[1, 2], [3, 4], [5]];
// // 👉 Output: [1, 2, 3, 4, 5]

// const flatten=a.reduce((accumulator, currentValue)=>{
//     accumulator.push(...currentValue)
//     return accumulator;
    
// },[])
// //console.log(flatten)

// //Q9️⃣. Count Even Numbers
// const n = [1, 2, 3, 4, 5, 6];
// // 👉 Output: 3
// const t=n.reduce((accumulator,currentValue )=>
// {
//     if(currentValue%2===0)
//     {
//         accumulator++;
//     }
//     return accumulator;
// }, 0)
// //console.log(t)

// //Q🔟. Convert Array to Object
// const users = ['Amit', 'Riya', 'Sneha'];
// // 👉 Output: { 0: 'Amit', 1: 'Riya', 2: 'Sneha' }
// const k=users.reduce((accumulator, currentValue)=>
// {
//     accumulator[users.indexOf(currentValue)]=currentValue;
//     return accumulator;
// }, {})
// console.log(k)



// const orders = [
//   { userId: 1, amount: 100 },
//   { userId: 2, amount: 50 },
//   { userId: 1, amount: 150 },
//   { userId: 3, amount: 75 }
// ];
// //Output should be : {1:250.2:50,3:75}
// const output=orders.reduce((accumulator, currentvalue)=>{
//     if(accumulator[currentvalue.userId])
//         accumulator[currentvalue.userId]=    accumulator[currentvalue.userId]+currentvalue.amount;
// else
//     accumulator[currentvalue.userId]= currentvalue.amount;
//     return accumulator;
// }, {})
// //console.log(output)




// ADVANCED reduce() QUESTIONS
// 🔹 Q1️⃣: Count Occurrences of Each Element

// 👉 Input:

 const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];


// //👉 Expected Output:

// { apple: 3, banana: 2, orange: 1 }
const o=fruits.reduce((a, c)=>{
   if(a[c]) 
   {
      a[c]= a[c]+1;
   }
   else
   a[c]=1;
   return a;
    
},{} )
//console.log(o)


// Q2️⃣: Group Objects by a Property

// 👉 Input:

const people = [
  { name: 'Amit', city: 'Pune' },
  { name: 'Riya', city: 'Mumbai' },
  { name: 'Sneha', city: 'Pune' },
];


// 👉 Expected Output:

// {
//   Pune: [{ name: 'Amit', city: 'Pune' }, { name: 'Sneha', city: 'Pune' }],
//   Mumbai: [{ name: 'Riya', city: 'Mumbai' }]
// }

const g=people.reduce((a ,c)=>{
    if(a[c.city])
    {
       const t= a[c.city];
    t.push(c);
     a[c.city]=t;
       
    }
    else
     a[c.city]=[c]
     return a;
    

    
},{})
//console.log(g)







// 🔹 Q7️⃣: Remove Duplicates Without Using filter()

// 👉 Input:

 const nums = [1, 2, 3, 2, 4, 1, 5];


// 👉 Expected Output:

// [1, 2, 3, 4, 5]

const p=nums.reduce((a, c)=>{
    if(!a.includes(c))
    a.push(c);
    return a;
    
}, [])
//console.log(p)



//🔹 Q8️⃣: Merge Multiple Objects into One

//👉 Input:

const objs = [{ a: 1 }, { b: 2 }, { c: 3 }];


// 👉 Expected Output:

// { a: 1, b: 2, c: 3 }

const n=objs.reduce((a,c)=>{
  a={...a,...c};
  return a;
} , {})
console.log(n)







