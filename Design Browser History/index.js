// class BrowserHistory {
//   constructor(homepage: string) {}

//   visit(url: string): void {}

//   back(steps: number): string {}

//   forward(steps: number): string {}
// }

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class BrowserHistory {
  head;
  tail;
  length;

  constructor(homepage) {
    this.head = this.tail = { val: homepage, next: undefined, prev: undefined };
    this.length = 1;
  }

  visit(url) {
    const newNode = { val: url, next: undefined, prev: undefined };

    this.length++;
    // if head does not exist
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    // we want add it to head and current head should point to new head with next value
    const currHead = this.head;
    newNode.prev = currHead;
    currHead.next = newNode;
    this.head = newNode;
  }

  back(steps) {
    if (steps > this.length) {
      return this.tail.val;
    }

    // find the element
    const foundItem = this.getHistoryBackItem(steps);

    // now we need to replace and swap pointers in history
    this.head = foundItem;
    return foundItem.val;
  }

  forward(steps) {
    const foundItem = this.getHistoryForwardItem(steps);

    if (!foundItem) {
      return this.head.val;
    }

    const currHead = this.head;
    foundItem.prev = currHead;
    currHead.next = foundItem;
    this.head = foundItem;
    return foundItem.val;
  }

  getHistoryBackItem(step) {
    let current = this.head;

    for (let i = 0; current && i < step; i++) {
      current = current.prev;
    }

    return current;
  }
  getHistoryForwardItem(step) {
    let current = this.head;

    for (let i = 0; current && i < step; i++) {
      current = current.next;
    }

    return current;
  }
}

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.forward(1));
browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2));
console.log(browserHistory.back(2));
console.log(browserHistory.back(7));
console.log(browserHistory);
