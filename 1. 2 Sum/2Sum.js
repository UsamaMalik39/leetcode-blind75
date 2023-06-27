var twoSum = function(nums, target) {

    let result={};
    for(let index=0;index<nums.length;index++){
        if(result[target-nums[index]]!=undefined){
            return [index,result[target-nums[index]]]
        }
        else{
            result[nums[index]]=index;
        }
    }
    return [ ]

};