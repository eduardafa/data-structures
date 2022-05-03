// queue: << 1, 2, 3, 4
// FIFO - first in, first out

const Queue = () => {
    const data = [];

    const add = (value) => {
        // adding to beginning
        data.unshift(value);
    };

    const remove = () => {
        if (data.length === 0) {
            return -1;
        }
        const value = data[data.length - 1];
        data.splice(data.length - 1, 1);
        return value;
    };

    const print = () => console.log(data);

    return {
        add,
        remove,
        print,
    };
};

const queue = Queue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();

// task (current (true/false), timestamp, processed (true/false))
