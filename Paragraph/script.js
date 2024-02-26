let para = document.getElementsByClassName('para');
console.log(para)
let span = document.querySelector('.spn')
console.log(span)
let btn = document.querySelector('button')
console.log(btn)


btn.addEventListener('click',show);
console.log(btn.innerHTML)


function show(e){
    if(btn.innerHTML=='show more'){
    span.style.display = 'block'
    btn.innerHTML = 'show less'
    }else{
        span.style.display='none';
        btn.innerHTML = "show more"
    }
}
