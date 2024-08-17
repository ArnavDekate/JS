let score=prompt("Enter your Score : ");
let grade;

if (score<=100 && score>90) {
    grade="A";
} else if (score<=90 && score>80){
    grade="B";
}else if (score<=80 && score>70){
    grade="C";
}else if (score<=70 && score>60){
    grade="D";
}else if(score<=60){
    grade="F";
}

console.log("Your grade is : ",grade);