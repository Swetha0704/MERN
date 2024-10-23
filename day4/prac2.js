var weight=60;
var height=1.55;
var bmi=Math.floor((weight/(height*height))*10)/10; //to trim the bmi 24.97 to 24.9
//if we use toFixed it will round off
// console.log(bmi);
if(bmi<18.5){
    console.log("Your bmi is "+bmi+" and you are underweight")
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("Your bmi is "+bmi+" and you are normal weight")
}
else if(bmi>=25 && bmi<=29.9){
    console.log("Your bmi is "+bmi+" and you are over weight")
}
else if(bmi>=30){
    console.log("Your bmi is "+bmi+" and you are obese")
}

