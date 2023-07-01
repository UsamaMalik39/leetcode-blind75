var productExceptSelf = function(nums) {
    
    let result=[]
    for(let i=0;i<nums.length;i++){
        result.push(nums[i]*(result[i-1]!=undefined ? result[i-1] : 1));
    }
    console.log(result)
    let num=1;
    for(let i=nums.length-1;i>=0;i--){
        result[i] = num*(result[i-1]!=undefined ? result[i-1] : 1);
        num=num*nums[i]
    }
    return result;
};