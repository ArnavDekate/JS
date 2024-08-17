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




//Inheritance

class parent{
    hello(){
        console.log(`hello`);
    }
}

class child extends parent{
     
}

let obj = new child();