console.log("I have started my career journey!");
let x = 10;
let y = "10";
//2. Without running it first, what do you think this prints?
console.log(x == y);
console.log(x === y);

//3. Write a function called calculateTotal that accepts: price, quantity
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(100, 3));

//4. Find the largest number
const numbers = [10, 25, 7, 42, 18];
console.log(Math.max(...numbers)); 
//Traditional way to find the maximum number in an array
var maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        
    }
}
console.log(maxNumber);

//5. Filter
//  Create a new array containing only numbers greater than 10.
const numberArray = [5, 12, 8, 20, 3, 15];
var newArray = [];
for(let i =0; i < numberArray.length; i++){
    if(numberArray[i] > 10){
        newArray.push(numberArray[i]);
    } 
}
console.log(newArray);

//6. map() Use map() to produce: [2, 4, 6, 8]
var originalArray = [1, 2, 3, 4];
var mappedArray = originalArray.map(function(num) {
    return num * 2;
});
console.log(mappedArray);





    