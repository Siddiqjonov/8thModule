var nums = [10, 13, 30];
var counter = 0;

while (counter < nums.length) {
    console.log(nums[counter]);
    counter++;
}

nums.push(40);             
console.log("After push:", nums);   // [10, 13, 30, 40]

nums.pop();                         
console.log("After pop:", nums);    // [10, 13, 30]

nums.unshift(0);                    
console.log("After unshift:", nums); // [0, 10, 13, 30]

nums.shift();                       
console.log("After shift:", nums);   // [10, 13, 30]

console.log("Includes 20:", nums.includes(20)); // false

console.log("Index of 30:", nums.indexOf(30));  // 2

console.log("Slice (1,3):", nums.slice(1, 3));  // [13, 30]

nums.splice(1, 1);                              
console.log("After splice (1,1):", nums);       // [10, 30]

let doubled = nums.map(n => n * 2);             
console.log("After map (*2):", doubled);        // [20, 60]

let filtered = nums.filter(n => n > 15);        
console.log("After filter (>15):", filtered);   // [30]
