// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

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
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: 4,
        next: { val: 2 },
      },
    },
  },
};

function hasCycle(head) {
  if (!head) {
    return false;
  }
  let slowPointer = head;
  let fastPointer = head.next;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next; // moves two nodes
    slowPointer = slowPointer.next; // move slow pointer by one node
    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
}

console.log(hasCycle(list));
