let bulb = document.querySelector(".bulb1");
let btn1 = document.getElementsByTagName("button")[0]
// console.log(btn1)
let btn2 =document.getElementsByTagName("button")[1]
// console.log(btn2);
btn1.onclick =onFun;
btn2.onclick =ofFun;
function onFun(){
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = "0 0 20px 3px yellow";

    button1.style.color = "white"; 
    button1.style.backgroundColor = "red";
    button1.style.cursor = "pointer"

    button2.style.color = "black"; 
    button2.style.backgroundColor = "white";
}
function ofFun(){

    bulb.style.boxShadow = "none";
        bulb.style.backgroundColor = "white";

        button2.style.backgroundColor = "red";
        button2.style.color = "white"; 
        button2.style.cursor = "pointer";

        button1.style.color = "black"; 
        button1.style.backgroundColor = "white";
}
