class Stack
{
	constructor()
	{
		this.items = [];
	}

	push(data)
	{
		this.items.push(data);
	}
	pop()
	{
		return this.items.pop();
	}
	peek()
	{
		return this.items[this.items.length - 1];
	}
	getSize()
	{
		return this.items.length;
	}
	isEmpty()
	{
		return this.items.length == 0;
	}
};

// Driver code
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Top element: ", stack.peek());
console.log("Total elements: ", stack.getSize());
console.log("Removed element: ", stack.pop());
console.log("Top element: ", stack.peek());