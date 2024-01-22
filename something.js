var mergeAlternately = function(word1, word2) {
    //put them in two different arrays
    //define a variable, have an empty string for holding the final string
    //loop through the first array
    //each iteration add the first index of the first array into the empty string and then after add the first index of the second array into that string
    //have an if statement comparing the lengths of the string and if the second string is bigger than the first one, on the last iteratible index of the
    //first string/array add the rest of the letters. 
  
   let array1 = [...word1];
   let array2 = [...word2];
   let finalString = ""
   let extraWord1;
   let extraWord2;
 
   if (array1.length > array2.length){
      extraWord1 = array1.splice(array2.length).toString().split(",").join("")
      console.log(extraWord1)
   }
   if (word2.length > word1.length){
     extraWord2 = array2.splice(word1.length).toString().split(",").join("")
     console.log(extraWord2)
   }
   for (let i = 0; i < array1.length; i++){
     finalString += array1[i]
     finalString += array2[i]
     console.log(finalString)
     if (i == array1.length-1 && extraWord2){
         finalString += extraWord2
         console.log(extraWord2)
     }
     if (i == array1.length-1 && extraWord1){
         finalString += extraWord1
         console.log(extraWord1)
     }
   }
   console.log(finalString)
   return finalString
 };