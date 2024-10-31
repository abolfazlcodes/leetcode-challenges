// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

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
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};

const list2 = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: null,
      },
    },
  },
};

class ListNode {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// walkThrough the nodes
// function walkThrough(head, val) {
//   if (!head) return [];

//   if (head.val === val) {
//     head = head.next;
//     console.log("here");
//   }

//   let curr = head;
//   let prev = head;
//   let next;

//   prev = curr; // getting the prev
//   while (curr) {
//     console.log(curr, prev, next);

//     // check if we found the value
//     next = curr.next;
//     if (curr.val === val) {
//       console.log("equals");

//       prev.next = next;
//     }

//     curr = curr.next;
//   }
//   return head;
// }
function walkThrough(head, val) {
  const dummyList = new ListNode(0);
  dummyList.next = head;

  let curr = head;
  let prev = dummyList;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      // move prev forward
      prev = curr;
    }

    // move current forward
    curr = curr.next;
  }

  // as we do not want the node created ourselves,
  return dummyList.next;
}

// remove all the node that their val equals val
function removeElements(head, val) {
  return walkThrough(head, val);
}

console.log(removeElements(list, 6));
console.log(removeElements(list2, 7));
