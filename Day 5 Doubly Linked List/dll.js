class Node
{
	constructor(data)
	{
		this.data = data;
		this.prev = null;
		this.next = null;
	}
};

class DoublyLinkedList
{
	constructor()
	{
		this.head = null;
		this.size = 0;
		this.tail = null;
	}
	isEmpty()
	{
		return this.size == 0;
	}
	getLength()
	{
		return this.size;	
	}
	append(data)
	{
		if(this.isEmpty())
		{
			this.head = new Node(data);
			this.tail = this.head;
		}
		else
		{
			let newNode = new Node(data);
			let current = this.head;
			while(current.next)
			{
				current = current.next;
			}

			current.next = newNode;
			newNode.prev = current;
			this.tail = newNode;
		}
		this.size++;
	} // end of append()
	prepend(data)
	{
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		// No need to touch the tail pointer
		this.size++;
	} // end of prepend()
	insertAt(data, index)
	{
		if(index < 0 || index > this.size)
		{
			console.error("Invalid index!");
		}
		else if(index == 0)
		{
			this.prepend(data);
			// No need to touch tail pointer
		}
		else
		{
			let newNode = new Node(data);
			let current = this.head;
			let prev = null;
			let count = 0;
			while(count < index)
			{
				prev = current;
				current = current.next;
				count++;
			}
			newNode.next = current;
			current.prev = newNode;
			prev.next = newNode;
			newNode.prev = prev;

			// re-initialized *current* for reusing it
			current = this.head;
			while(current.next)
			{
				current = current.next;
			}
			this.tail = current;
			this.size++;			
		} // end of else 
	} // end of inserAt()
	removeAt(index)
	{
		let removedData;
		if(index < 0 || index >= this.size)
		{
			console.error("Invalid index!");
			return false;
		}
		else if(index == 0)
		{
			removedData =  this.head.data;
			this.head = this.head.next;
			this.head.prev = null;
			// No need to touch tail pointer
		}
		else
		{
			let current = this.head;
			let prev = null;
			let count = 0;
			while(count < index)
			{
				prev = current;
				current = current.next;
				count++;
			}
			removedData = current.data;
			current.next.prev = prev;
			prev.next = current.next;

			// re-initialized *current* for reusing it
			current = this.head;
			while(current.next)
			{
				current = current.next;
			}
			this.tail = current;
		} // end of else
		this.size--;
		return removedData;
	} // end of removeAt()
	printListForward()
	{
		let result = "";
		let current = this.head;
		while(current)
		{
			result = result + current.data + " <-> ";
			current = current.next;
		}
		result = result + " null";
		console.log(result);
	}
	printListBackward()
	{
		let result = "";
		let current = this.tail;
		while(current)
		{
			result = result + current.data + " <-> ";
			current = current.prev;
		}
		result = result + " null";
		console.log(result);
	}
};

// Driver code
list = new DoublyLinkedList();
list.append(5);
list.append(10);
list.prepend(15);
list.insertAt(20, 1);
list.printListForward();
list.printListBackward();
console.log("Length of DLL is ", list.getLength())
list.removeAt(0);
list.printListForward();
list.printListBackward();
console.log("Length of DLL is ", list.getLength())