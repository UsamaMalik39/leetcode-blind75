var containsDuplicate = function(nums) {
    let myobj={};
    let resut=false;
    for(let i=0;i<nums.length;i++){
        myobj[nums[i]]=(myobj[nums[i]] || 0) +1;
        if(myobj[nums[i]]>1){
            resut= true;
            break;
        }
            
    } 
    return resut
};