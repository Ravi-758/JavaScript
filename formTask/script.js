let form =document.querySelector('form');
console.log(form);

let table =document.querySelector('table');

let inputTages=document.getElementsByTagName('input');
console.log(inputTages)
let userName = inputTages[0];
let userEmail = inputTages[1];
let sal =inputTages[2];
console.log(inputTages);

form.addEventListener("submit",handleSubmit);
function handleSubmit(e){
    e.preventDefault();
    let userNameData = userName.value;
    let userEmailD = userEmail.value;
    let salaryD = sal.value;

    table.innerHTML+= `<tr>
    <td>${userNameData}</td>
    <td>${userEmailD}</td>
    <td>${salaryD}</td>
    </tr>`

    userName.value="";
    userEmail.value="";
    sal.value="";

}


