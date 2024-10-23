var num="adwdawew";
// var num1=num.toString();//else give the num directly in double quotes as string
if(!isNaN(num)){
var count=num.length;
if(count>10 || count<10){
    console.log("Enter a 10 digit phone number")
}
else{
    console.log("You have given a correct phone number")
}
}
else{
    console.log("Enter a number")
}
