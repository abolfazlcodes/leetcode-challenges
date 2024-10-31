// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Remove every node which has duplicates

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

class ListNode {
  val;
  next;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};

const secondList = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
        },
      },
    },
  },
};

// walkThrough function
// function walkThrough(head) {
//   if (!head) {
//     return null;
//   }
//   if (!head.next) {
//     return head;
//   }
//   let fakeHead = new ListNode(undefined, head); // beginning of a returned linked list
//   let prev = fakeHead; // start of the group with same values
//   let current = head; // pointer

//   while (current) {
//     // move through the current group until new value is seen
//     while (current.next && prev.next && prev.next.val === current.next.val) {
//       current = current.next;
//     }

//     if (prev.next === current) {
//       prev = prev.next; // if group has only one member, move prev to current
//     } else {
//       prev.next = current.next; // otherwise, exclude the group
//     }

//     current = current.next; // Move to the next node
//   }

//   return fakeHead.next;
// }

function deleteDuplicates(head) {
  return walkThrough(head);
}

function deleteDuplicates(head) {
  // 2 pointers, left + right, right = left + 1
  // advance until right === right.next
  // then iterate the right until new value is seen
  // connect the left -> right
  // if right !== right.next,  advance left to right, right to right.next

  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  const dummy = new ListNode(); // undefined
  dummy.next = head; // [1]

  let prev = dummy; // undefined
  let current = dummy.next; // 2

  while (current !== null) {
    if (!current.next) break;

    if (current.val === current.next.val) {
      const val = current.val;
      while (current && current.val === val) {
        current = current.next;
      }
      prev.next = current;
    } else {
      prev.next = current;
      current = current.next;
      prev = prev.next;
    }
  }

  return dummy.next;
}

console.log(deleteDuplicates(list));
// console.log(deleteDuplicates(secondList));
