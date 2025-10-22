// Queue is a linear DS. It follows the FIFO(First In First Out)
// principal.
// e.g.: queue of cars on the road
// queue of people in front of ticket purchasnig counter.

class Node
{
	constructor(data)
	{
		this.data = data;
		this.next = null;
	}
};

class Queue
{
	constructor()
	{
		this.front = null;
		this.rear = null;
		this.size = 0;
	}
	isEmpty()
	{
		return (this.size == 0);
		
	}
	getSize()
	{
		return this.size;
	}
	enqueue(data)
	{
		if(this.isEmpty())
		{
			this.rear = new Node(data);
			this.front = this.rear;
		}
		else
		{
			this.rear.next = new Node(data);
			this.rear = this.rear.next;
		}
		this.size++;
	}
	dequeue()
	{
		if(this.isEmpty())
			return false;
		else
		{
			const removedData = this.front.data;
			this.front = this.front.next;
			this.size--;
			return removedData;
		}
	}
	getFront()
	{
		if(this.isEmpty())
			return null;
		else
			return this.front.data;
	}
};

// Driver code

const queue = new Queue();
console.log("Size of the queue: ", queue.getSize());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Size of the queue: ", queue.getSize());
console.log("Front element: ", queue.getFront());
console.log("Removed element: ", queue.dequeue());
console.log("Front element: ", queue.getFront());
console.log("Size of the queue: ", queue.getSize());