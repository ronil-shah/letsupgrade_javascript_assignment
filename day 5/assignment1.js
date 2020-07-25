let array = [1,2,3,4,5,6,7,8,9,10];
let oddArray = array.filter( number =>  number%2 ); 
console.log(oddArray);
for ( var i = 0; i < oddArray.length;i++) {
    oddArray[i] = oddArray[i]*oddArray[i]*oddArray[i];
 }
 console.log(oddArray);