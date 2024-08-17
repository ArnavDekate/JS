// function sum(a,b){
//     s=a+b;
//     return s;
// } 


// //Arrow function

// const arrowSum = (a,b)=>{return a+b};

// let val = arrowSum(10,200);
// console.log(val);

// const printHello =()=>{console.log("Hello!!")};

// arrowSum();
// printHello();



// //Create function with string as an argument and return no of vowels

// function countVowels(str){
//     n=str.length;
//     let c=0;
//     for(let i=0;i<n;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//             c++;
//         }
//     } 
//     return c;
// }
//     let count=countVowels("arnav dekate");
//     console.log(count);

// let arr=[1,2,3,4,5];

//forEach() loop in array

// let sum=0;
// arr.forEach(function printVal(val){
//     sum+=val;
//     console.log(sum);
// })

//print square of numbers in array using for each loop

// function squareNum(val){
//     console.log(val**2);
// }

// arr.forEach(squareNum);




// //map() Method
// let newArr=arr.map((val)=>{
//     return val**2;
// });
// console.log(arr);
// console.log(newArr);

// filter() Method
let arr=[6,5,4,7,9,10,40,21];

let evenArr=arr.filter((val) =>{
    return val;
});

console.log(evenArr);


// reduce Method()

const op=arr.reduce((res,curr)=>{ return res+curr;})
 
