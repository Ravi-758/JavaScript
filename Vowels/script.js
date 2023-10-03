const string = "ravikumar";
const vowel =['a','e','i','o','u'];

const counTValue = (str)=>{
    var count =0;
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count;
}
console.log((counTValue(string)));
