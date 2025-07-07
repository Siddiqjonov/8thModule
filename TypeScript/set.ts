let set = new Set<number>();
set.add(1);
set.add(2);
set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set.has(2))

set.forEach(element => {
    console.log(element);
})