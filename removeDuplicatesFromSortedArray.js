var removeDuplicates = function(nums) { 
    for (let i = nums.length-1; i >= 0; i--){
        if (i > 0 && nums[i] === nums[i-1]){
            nums.splice(i, 1);
        }
    }
};