// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

// Example 1:

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:

// Input: head = [0]
// Output: 0

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const list = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1,
    },
  },
};

const list2 = {
  val: 0,
  next: null,
};

const list3 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 1,
              next: {
                val: 1,
                next: {
                  val: 1,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// ? IMPORTANT EXPLANATION
// Explanation of the Problem:
// The binary number is represented as a linked list, where each node contains a single bit (0 or 1). The most significant bit is at the head of the linked list, and the least significant bit is at the tail. Therefore, when traversing the linked list, the first node represents the highest place value, and the last node represents the lowest place value.

// with this approach wr are treating the first element of the list as the lowest place value and the tail the highest
// ! which it should be completely the reverse
// function getDecimalValue(head) {
//   let length = 0;

//   let curr = head;
//   let sum = 0;

//   while (curr) {
//     // multiply the curr.val by 2 to the power of length
//     const currentSum = curr.val * Math.pow(2, length);

//     curr = curr.next;

//     // we have to increment the length
//     length++;

//     sum = sum + currentSum;
//   }

//   return sum;
// }

// ? fixed version of previous function
// function getDecimalValue(head) {
//   let sum = 0;
//   let curr = head;

//   while (curr) {
//     // Shift the sum left by 1 (equivalent to multiplying by 2)
//     sum = sum * 2 + curr.val;
//     curr = curr.next;
//   }

//   return sum;
// }

// function to get all the length of the list
function getListLength(head) {
  let curr = head;
  let length = 0;

  while (curr) {
    length++;
    curr = curr.next;
  }

  return length;
}

function getDecimalValue(head) {
  let length = getListLength(head) - 1;

  let curr = head;
  let sum = 0;

  while (curr) {
    // multiply the curr.val by 2 to the power of length
    const currentSum = curr.val * Math.pow(2, length);

    curr = curr.next;

    // we have to decrement the length to make the first the highest place and tail the lowest
    length--;

    sum = sum + currentSum;
  }

  return sum;
}

console.log(getDecimalValue(list));
console.log(getDecimalValue(list2));
console.log(getDecimalValue(list3));
