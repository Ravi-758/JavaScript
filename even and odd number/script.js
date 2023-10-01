// even number 
const arr=[2,3,4,5,6,7,8];
const even = arr.filter((item)=>{
    return item%2==0;
})
console.log(even);

// odd number
const arr=[2,3,4,5,6,7,8];
const odd = arr.filter((item)=>{
    return item%2!==0;
})
console.log(odd);
