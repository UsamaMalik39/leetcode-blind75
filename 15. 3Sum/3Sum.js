/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    
    let result=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        let currentNum=nums[i];
        let myarr=[...nums];
        let combination=[];
        let target=0;
        currentNum == 0 ?  target = currentNum :  target = -1*currentNum
        myarr = myarr.slice(i+1,)
        if(myarr.length>1){
            let rightPtr=myarr.length-1;
            let leftPtr=0;
            while(rightPtr>leftPtr){
                let sum=myarr[leftPtr] + myarr[rightPtr];
                if(sum>target){
                    rightPtr--;
                }
                else if(sum<target){
                    leftPtr++;
                }
                else{
                    combination.push(myarr[leftPtr],myarr[rightPtr],currentNum)
                    combination.length>2 ? result.push(combination):result=result;
                    combination=[];
                    while(myarr[leftPtr] == myarr[leftPtr+1])
                    {
                        leftPtr++;
                    }
                    while(myarr[rightPtr] == myarr[rightPtr-1])
                    {
                        rightPtr--;
                    }
                    leftPtr++;
                    rightPtr--;
                }
            }
        }
        
    }


    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
    
};

