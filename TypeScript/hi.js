var numbers = [10, 13, 30];
var idx = 0;
while (idx < numbers.length) {
    console.log(numbers[idx]);
    idx++;
}
numbers.push(40);
console.log("After push:", numbers); // [10, 13, 30, 40]
numbers.pop();
console.log("After pop:", numbers); // [10, 13, 30]
numbers.unshift(0);
console.log("After unshift:", numbers); // [0, 10, 13, 30]
numbers.shift();
console.log("After shift:", numbers); // [10, 13, 30]
console.log("Includes 20:", numbers.includes(20)); // false
console.log("Index of 30:", numbers.indexOf(30)); // 2
console.log("Slice (1,3):", numbers.slice(1, 3)); // [13, 30]
numbers.splice(1, 1);
console.log("After splice (1,1):", numbers); // [10, 30]
var doubledNumbers = numbers.map(function (n) { return n * 2; });
console.log("After map (*2):", doubledNumbers); // [20, 60]
var filteredNumbers = numbers.filter(function (n) { return n > 15; });
console.log("After filter (>15):", filteredNumbers); // [30]
