// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

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

const listOne = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
    },
  },
};

const listTwo = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
    },
  },
};

const listThree = {};
const listFour = {};

const listFive = {};
const listSix = {
  val: 0,
  next: null,
};

// recursive function
function walkThrough(list1, list2) {
  const dummy = new ListNode(-Infinity);
  console.log(dummy, "dummy");

  // Step 2: Initialize pointers
  let prev = dummy;
  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    console.log(current1, "current1", current2, "current2", prev, "prev");
    if (current1.val <= current2.val) {
      prev.next = current1;
      console.log(prev, "prev.next");

      prev = current1;
      console.log(prev, "prev");

      current1 = current1.next;
      console.log(current1, "current1 updated");
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }

  if (current1) prev.next = current1;
  if (current2) prev.next = current2;

  return dummy.next;
}

function mergeTwoLists(list1, list2) {
  return walkThrough(list1, list2);
}

mergeTwoLists(listOne, listTwo);
// console.log(mergeTwoLists(listThree, listFive));
// console.log(mergeTwoLists(listFive, listSix));

// function mergeTwoLists(list1, list2) {
//   const dummy = new ListNode();
//   let head = dummy;

//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       head.next = list1;
//       list1 = list1.next;
//     } else {
//       head.next = list2;
//       list2 = list2.next;
//     }
//     head = head.next;
//   }

//   while (list1) {
//     head.next = list1;
//     list1 = list1.next;
//     head = head.next;
//   }
//   while (list2) {
//     head.next = list2;
//     list2 = list2.next;
//     head = head.next;
//   }
//   return dummy.next;
// }
