class Queue
{
	constructor()
	{
		this.items = [];
	}
	isEmpty()
	{
		return (this.items.length == 0);
	}
	getSize()
	{
		return this.items.length;
	}
	enqueue(data)
	{
		this.items.push(data);
	}
	dequeue()
	{
		if(this.isEmpty())
			return false;
		else
		{
			const removedData = this.items[0];
			// shift() will shift all the elements towards left.
			// it saves the first element and then perform shifting,
			// after that it returns the first elements.

			// But it has a major drawback:
			// The overhead of shifting elements, to remove this overhead. 
			// we create our nodes dynamically just like linked list.
			
			// Why it is a drawback if no. of elements are lesser then 
			// shifting will be performed quickly. but once we have more 
			// elements we will see that shifting takes time, so our program
			// will work slowly. Solution is to create nodes dyanamically.
			this.items.shift();
			return removedData;
		}
	}
	getFront()
	{
		return this.items[0];
	}
};

// Driver code

const queue = new Queue();
console.log("Size: ", queue.getSize());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log("Size: ", queue.getSize());
console.log("Front element: ", queue.getFront());
console.log("Reomved element: ", queue.dequeue());
console.log("Front element: ", queue.getFront());