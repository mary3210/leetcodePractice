// function arrayDiff(a, b) {
//   let array1 = a;
//   let array2 = b;

 
// const array3 = array1.filter(function(num) {
//     let foundInB = false;
//     for (let i = 0; i < array2.length; i++ ){
//         if( num == array2[i] ){
//             foundInB = true;
//         }
//     }
//     return !foundInB;
// }); 
// console.log(array3)
// }

function arrayDiff(a, b) {
    let array1 = a;
    let obj2 = {};
    
    b.forEach(function(num){
      obj2[num]=false;
    });

    console.log(obj2);
  
    return array1.filter(function(num) {
        console.log(obj2[num]);
      return obj2[num] === false ? false : true;
    }); 
}

console.log(arrayDiff([1, 2, 2], [1,2]));
