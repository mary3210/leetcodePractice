const twoSum = function (numbers, target){
    const map = {};
    //make an object for storing numbers
    for (let p = 0; p < numbers.length; p++){
    
    
      const currMapVal = map[numbers[p]]
      //returns undefined if number is not in map
       if (currMapVal >= 0){
        //the value needed is found in map
         return [currMapVal, p]
         //returns the missing number for this index
       } else {
         const numToFind = target - numbers[p]
    
         map[numToFind] = p
         //storing key value pairs in map
         //map is read as "number needed to make target" : with this number at index whatevr
         console.log(map[numToFind])
       }
     }
    return null
  }

  const numbers = [1,2,3] 
  const target = 4

  twoSum([1,2,3], 4)


//stores every key value pair of the index and its number needed to make 
//target number and
//once the number needed is found for the already stored integer
// the integers position and iterator number of number needed is returned.

//only works for one target number
//better than brutal for method where each number has to go through the array.
//the array in this method is only gone through once. best time complexity.
