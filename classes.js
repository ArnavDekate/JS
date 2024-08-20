// //prototype

// const employee={
//     clacTax(){
//         console.log(`tax is 10%`);
//     },
// }

// const emp1={
//     salary : 50000,

//     calcTax(){
//         console.log(`Tax is 15%`);
//     },
// }

// const emp2={
//     salary : 40000
// }

// emp1.__proto__ = employee;
// emp2.__proto__ = employee;

// // classes

// class car {
//     constructor(){
//         console.log("new obj created");
//     }
//     start(){
//         console.log(`start`);
//     }

//     stop(){
//         console.log(`stop`);
//     }

//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let bmw = new car();
// bmw.setBrand("M4");




// //Inheritance

// class person{
//     constructor(name){
//         this.species="homosapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }

    // sleep(){
    //     console.log("sleep");
    // }

//     // work(){
//     //     console.log("Do assigned job");
//     // }
// }

// class engineer extends person{
//     constructor(name,branch){
      
//         super(name); // used to invoke parent class constructor
//         this.branch=branch;
//     }
//     work(){
//         console.log("solve issues");
//     }
// }

// class doctor extends person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let abc=new engineer("Arnav","ECE");



// error Handling

let a=10;
let b=20;

console.log("sum : ",a+b);
console.log("sum : ",a+b);
console.log("sum : ",a+b);
try {
console.log("sum : ",a+c);
console.log("sum : ",a+b);
console.log("sum : ",a+b);
console.log("sum : ",a+b);
}catch (error) {
    console.log(error);
}

console.log("sum : ",a+b);
console.log("sum : ",a*b);

