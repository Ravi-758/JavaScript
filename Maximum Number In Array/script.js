const arr = [1,2,3,4,5,4];
let max =(arry)=>{
    return arry.reduce(function(prev,cur){
        return prev>cur ? prev : cur
    })
} 
console.log(max(arr))
