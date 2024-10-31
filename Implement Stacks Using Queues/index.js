// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// queues are FIFO
// so we use 2 of them, to simulate the LIFO behavior of a Stack

class MyStack {
  queue1; // the stack
  queue2;

  constructor() {
    this.queue1 = []; // the first queue
    this.queue2 = []; // the second queue
  }

  push(x) {
    this.queue1.push(x);
  }
  // we have to move all elements inside queue1 to queue2 except the last item (which is what we delete in a normal stack ==> pop())
  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const poppedElement = this.queue1.shift();

    // return all elements back into queue1
    // while (this.queue2.length > 0) {
    //   this.queue1.push(this.queue2.shift());
    // }

    // ? or
    // Swap q1 and q2 to make q1 the queue with all elements again
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedElement;
  }

  // it only wants to get the top of the stack so clone and return tha last as we do not want to mutate the queue
  top() {
    const clonedQueue1 = [...this.queue1];
    return clonedQueue1.pop();
  }

  empty() {
    return this.queue1.length === 0;
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6); // 6 is the top of the stack - lastly added
console.log(myStack.top()); // return 6
console.log(myStack.pop()); // return 6
console.log(myStack.empty()); // return False
console.log(myStack);
