Problem Link :-  https://www.geeksforgeeks.org/problems/third-largest-element/1?page=2&difficulty=Basic&sortBy=submissions
class Solution {
    
    thirdLargest(a, n)
    {
        if(a.length<2){
            return -1;
        }else{
        //your code here
        let big =0;
        for(let i=0;i<n;i++){
            if(a[i]>big){
                big =a[i];
            }
        }
        let index1=a.indexOf(big);
        a.splice(index1,1);
        // big 2
        let big2 =0;
        for(let j=0;j<n;j++){
            if(a[j]>big2){
                big2 =a[j];
            }
        }
        let index2=a.indexOf(big2);
        a.splice(index2,1);
        
        let big3 = 0;
        for(let k=0;k<n;k++){
            if(a[k]>big3){
                big3 =a[k];
            }
        }
        return big3;
        }       
    }
}
