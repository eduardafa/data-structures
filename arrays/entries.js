let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries();

// console.log(aEntries.next().value);

for (const n of aEntries) {
    console.log(n);
}
