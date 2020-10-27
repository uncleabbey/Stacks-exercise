class Node {
    constructor(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}
class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	pop () {
		 if(this.head) {
            let remove = this.head;
            this.head = this.head.next;
            this.size--;
            return remove.val;
        }
        return undefined;
	}
	push (val) {
		this.size++;
        let node = new Node(value);
        if(this.head) {
            let presentHead = this.head;
            this.head.prev = node;
            this.head = node;
            node.next = presentHead;
        }else {
            this.head = node;
            this.tail = node;
        }
        return this.size;
	}
	peek() {
		if (this.head) {
			return this.head.val;
		} else {
			return undefined;
		}
	}
}
