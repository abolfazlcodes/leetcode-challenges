// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

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

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// sample linked list
const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
        },
      },
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 2,
  },
};

const list3 = {
  val: 1,
};

function walkThrough(list, newList) {
  if (!list) {
    return newList;
  }

  const reversedList = walkThrough(list.next, newList);
  // console.log(reversedList, "reversedList");

  if (reversedList) {
    let temp = reversedList; // head of it
    // console.log(temp, "temp");

    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new ListNode(list.val);
  } else {
    newList = new ListNode(list.val);
  }
  // console.log(list, "list item", newList, "new list");

  return newList.next;
}

// function reverseList(head) {
//   const newList = new ListNode(0);
//   const result = walkThrough(head, newList);

//   if (!result.val) {
//     return null;
//   }
//   return result;
// }

function reverseList(head) {
  // Base case: if head is null or only one node, return head
  if (!head || !head.next) {
    return head;
  }

  // Recursively reverse the rest of the list
  const reversedListHead = reverseList(head.next);

  // Adjust the next pointers
  head.next.next = head;
  head.next = null;

  // Return the new head of the reversed list
  return reversedListHead;
}

// iterative approach
// function reverseList(head) {
//   let prev = null;
//   let current = head;

//   while (current) {
//     let next = current.next;

//     current.next = prev;

//     prev = current;
//     current = next;
//   }

//   return prev;
// }

console.log(reverseList(list));
// console.log(reverseList(list2));
console.log(reverseList(list3));
