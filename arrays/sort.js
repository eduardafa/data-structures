let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.reverse();
numbers.sort();

// numbers.sort((a, b) => a - b);

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // equal to 0
    return 0;
}

numbers.sort(compare);
console.log(numbers);
