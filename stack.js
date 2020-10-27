class Node {
	constructor(val) {
		this.value = val;
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	
	push (val) {
		const node = new Node(val);
		this.size++;
		if(this.first) {
			const presentFirst = this.first;
			this.first = node;
			node.next = presentFirst
		} else {
			this.first = node;
			this.last = node
		}
		return this.size 
	}
	pop () {
		this.size--;
		if(this.first) {
			const presentFirst = this.first;
			this.first = this.first.next;
			return presentFirst.value
		}
	}
	peek () {
		if(this.first) {
			return this.first.value
		} else {
			return undefined;
		}
	}
	print () {
		if(this.size > 0) {
			let item = this.first;
            while(item !== null) {
                console.log(item.value);
                item = item.next;
            }
		}
	}	
}