var merge = function(nums1, m, nums2, n) {
    if (n = 0){
        return nums1;
    }

    n = nums2.length
    while(nums1[nums1.length-1] == 0 && n > 0){
        nums1.pop()
        n--
    }

    for (let i = 0; i < nums2.length; i++){
        nums1.push(nums2[i])
    }
    
    function compareNumbers(a, b) {
    return a - b;
    }

    nums1.sort(compareNumbers)

};