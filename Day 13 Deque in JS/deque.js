class Deque
{
	constructor()
	{
		this.items = {};
		this.head = 0;
		this.tail = 0;
	}

	isEmpty()
	{
		return (this.head == this.tail);
	}

	// On head, elements are on negative keys.
	addHead(data)
	{
		this.head--;
		this.items[this.head] = data;
	}

	// On tail, elements are on zero and positive keys.
	addTail(data)
	{
		this.items[this.tail] = data;
		this.tail++;
	}

	removeHead()
	{
		if(this.isEmpty())
		{
			return undefined;
		}

		const removedData = this.items[this.head];
		delete this.items[this.head];
		this.head++;

		if(this.isEmpty())
		{
			this.head = 0;
			this.tail = 0;
		}

		return removedData;
	}

	removeTail()
	{
		if(this.isEmpty())
		{
			return undefined;
		}

		this.tail--;
		const removedData = this.items[this.tail];
		delete this.items[this.tail];

		// if deque is empty, then reset the tail and head. so that
		// they points to 0 key. it means no element is there in 
		// the deque.
		if(this.isEmpty())
		{
			this.head = 0;
			this.tail = 0;
		}

		return removedData;
	}

	getHead()
	{
		return this.items[this.head];
	}

	getTail()
	{
		return this.items[this.tail - 1];
	}

	getSize()
	{
		return (this.tail - this.head);
	}
};


// Driver code
const q = new Deque();
q.addHead(10);
q.addHead(20);
q.addTail(30);
q.addTail(40);
q.addTail(50);
console.log("Deque size: ", q.getSize());
console.log("Head: ", q.getHead());
console.log("Tail: ", q.getTail());

console.log("Removed head: ", q.removeHead());
console.log("Removed tail: ", q.removeTail());

console.log("Deque size: ", q.getSize());
console.log("Head: ", q.getHead());
console.log("Tail: ", q.getTail());
