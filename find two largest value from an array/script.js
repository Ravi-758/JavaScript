const age =[19,17,20,4,157];


let largest =age.reduce(function(prev,cur,arr){
    return prev>cur ? prev:cur ;
})
console.log(largest);
for(let i=0;i<age.length;i++){
    if(age[i]==largest){
        var ind =i;
        // console.log(ind);
    }
}
age.splice(ind,1);
let seclargest =age.reduce(function(prev,cur,arr){
    return prev>cur ? prev:cur ;
})
console.log(seclargest);
