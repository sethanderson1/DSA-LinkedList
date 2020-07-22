class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

//Create a linked list class

class LinkedList {
    constructor() {
        this.head = null;
    };
    // insert first node
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    };

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            // begin at start node
            let tempNode = this.head;
            while (tempNode.next !== null) {
                // jump to each subsequent node until next is null
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        };
    };

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                     and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }


    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currNode.next;
    }



    insertBefore(key, item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // search until find key 
        while (currNode.value !== key) {
            if (currNode.next === null) {
                return null;
            } else {
                // else, keep going
                currNode = currNode.next;
            }
        }
        // key found, so have item point to it
        let newNode = new _Node(item, currNode.next);
        currNode.next = newNode;
    }

    insertAfter(item, key) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let currNode = this.head
            // while not at end and havent found key yet
            while ((currNode !== null) && (currNode.value !== key)) {
                currNode = currNode.next
            }
            if (currNode === null) {
                this.insertLast(item)
                return
            }
            // found key so have point to item
            currNode.next = new _Node(item, currNode.next)
        }
    }

    insertAt(item, idx) {
        if (!this.head) {
            return null
        }
        if (idx > this.length - 1) {
            return null
        }
        let currNode = this.head
        let prevNode = this.head

        for (let i = 0; i < idx - 1; i++) {
            prevNode = currNode
            currNode = currNode.next
        }
        let newNode = new _Node(item, currNode)
        prevNode.next = newNode
        this.length++
    }


    findLast() {
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.next !== null) {
            if (currNode.next === null) {
                return currentNode;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
    }

}


const display = linkedList => {
    console.log('linkedList', linkedList)
};

const size = linkedList => {
    let currentNode = linkedList.head;
    let count = 0;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        count++;
    }
    return count;
};

const isEmpty = linkedList => {
    if (linkedList.head === null) {
        return false;
    } else {
        return true;
    }
};

// Creating a singly linked list

const main = () => {
    const SLL = new LinkedList();

    SLL.insertFirst('Starbuck');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Apollo');

    SLL.insertLast("Tauhida");

    SLL.remove("Boomer");
    SLL.find("Helo");
    SLL.insertBefore("Boomer", "Athena");
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove("Tauhida");

    display(SLL);
    console.log('isEmpty(SLL)', isEmpty(SLL))
    console.log('size(SLL)', size(SLL))
};

main();
console.log('main()', main())

// Mystery Program

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// it removes duplicates

// // reverse a list 

// function reverse(head) {
//     let currNode = head;
//     let prevNode, nextNode

//     while (currNode) {
//         nextNode = currNode.next;
//         currNode.next = prevNode;
//         prevNode = currNode;
//         currNode = nextNode;
//     }
//     return prevNode;
// }

// Recursive
const reverse = head => {
    if (!head || !head.next) {
        return head;
    }

    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
};

// 3rd from the end

const find3rd = list => {
    let currNode = this.head;
    if (!this.head) {
        return null;
    }
    while (currNode.value !== null) {
        if (currNode.next.next === null) {
            return currNode;
        } else {
            currNode = currNode.next;
        }
    }
};

// Middle of a list
//**** */
const middleList = head => {
    let double = head
    let single = head

    while (double.next !== null && double.next.next !== null) {
        double = double.next.next
        single = single.next
    }

    return single.value
}


// Cycle in a List

const cycleList = list => {
    let currNode = list.head;
    if (!head) {
        return null;
    }
    while (currNode.next !== null) {
        if (currNode.next === null) {
            return false;
        } else {
            currNode = currNode.next;
        }
    }
};

// Sorting a list
//**** */
// const sortList = linkedList => {
// };
