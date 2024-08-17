let btn1=document.querySelector("#btn1");
// btn1.onclick =(e) =>{
//     console.log(e);
//     console.log(e.type);
// };

// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=(e) =>{
//     console.log(e.clientX,e.clientY);
//     console.log(e.type);
// };

// let div1 = document.querySelector("div");
// div1.onmouseover = (e) =>{
//     console.log("You are over the division");
//     console.log(e.clientX,e.clientY);
//     console.log(e.type);
// };


//Event Listeners

// btn1.addEventListener("click",(e)=>{
//     console.log("button was clicked - handler 1");
// })

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler 2");
// })

// const handler3 =(e)=>{
//     console.log("button was clicked - handler 3");
// }
// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click",(e)=>{
//     console.log("button was clicked - handler 4");
// })

// btn1.removeEventListener("click",handler3);


let modebtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modebtn.addEventListener("click",()=>{
   if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
   }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

   console.log(currMode);
})
