// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

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
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
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
      val: 2,
      next: null,
    },
  },
};

function walkThrough(head) {
  if (!head) {
    return null;
  }

  let newList = new ListNode(head.val);
  let previous = newList;
  let current = head;

  while (current) {
    if (current.val !== previous.val) {
      // console.log(previous, "previous", current, "current");

      previous.next = current;
      previous = current;
    }
    current = current.next;
  }

  previous.next = null;

  return newList;
}

function deleteDuplicates(head) {
  return walkThrough(head);
}

console.log(deleteDuplicates(list));
console.log(deleteDuplicates(secondList));
