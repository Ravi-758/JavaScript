const arr1 =[1,2,8,2,9,8,7,7,7,7];
const duplicate =arr1.filter((ele,index,arr)=>
    arr.indexOf(ele)!==index )
console.log(duplicate)


