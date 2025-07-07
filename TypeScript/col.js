var nums = [10, 13, 30];
var counter = 0;
while (counter < nums.length) {
    console.log(nums[counter]);
    counter++;
}

nums.push(40);             // ➤ Add to end
nums.pop();                // ➤ Remove last
nums.unshift(0);           // ➤ Add to beginning
nums.shift();              // ➤ Remove first
nums.includes(20);         // ➤ Check value exists
nums.indexOf(30);          // ➤ Find index
nums.slice(1, 3);          // ➤ Extract part
nums.splice(1, 1);         // ➤ Remove/insert
nums.map(n => n * 2);      // ➤ Transform
nums.filter(n => n > 15);  // ➤ Filter values