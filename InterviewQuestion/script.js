// find the total marks of each student and print the sum with avg of all the marks 



let student= [{
id:123,
name:"ravi",
marks:[12,43,3]
},
{
    id:123,
    name:"sampat",
    marks:[12,2,276]
    },
    {
        id:123,
        name:"ajay",
        marks:[12,478,2]
        }
]
let totalSum =0; let totalAvg = 0;
for(let i =0;i<student.length;i++){
    let sum=0;let count =0;totalAvg++;
    for(let j=0;j<student.length;j++){
        sum+=student[i].marks[j]
        count++;
        totalSum+=sum;
        totalAvg++;
    }
    console.log("the sum of each student is " + sum)
    console.log("the avg marks of student is :" +sum/count)
}
console.log("the sum of all the marks of all the student is :" +totalSum)
    console.log("the total avg marks of class is :"+totalSum/totalAvg)

