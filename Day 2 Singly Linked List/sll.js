class Node
{
	constructor(data)
	{
		this.data = data;
		this.next = null;
	}
};

class SinglyLinkedList
{
	constructor()
	{
		this.head = null;
		this.size = 0;
	}
	append(data)
	{
		let newNode = new Node(data);
		if(this.head == null)
		{
			this.head = newNode;
		}
		else
		{
			let current = this.head;
			while(current.next != null)
			{
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	} // end of append()
	prepend(data)
	{
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode; 
		this.size++;
	} // end of prepend()
	insertAt(data, index)
	{
		if(index < 0 || index > this.size)
		{
			console.error("Invalid Index!");
			return false;
		}
		
		if(index == 0)
			this.prepend(data);
		else if(index == this.size)
			this.append(data);
		else
		{
			let newNode = new Node(data);
			let current = this.head;
			let previous = null;
			let count;

			count = 0;
			while(count < index)
			{
				previous = current;
				current = current.next;
				count++;
			}
			newNode.next = current;
			previous.next = newNode;
			this.size++;
			return true;
		} // end of else block-To insert a node in the
		  // middle of head and tail.
	} // end of insertAt()
	removeAt(index)
	{
		if(index < 0 || index >= this.size)
		{
			console.error("Invalid Index!");
			return false;
		}

		let removedData;
		if(index == 0)
		{
			removedData = this.head.data;
			this.head = this.head.next;
		}
		else
		{
			let current = this.head;
			let previous = null;
			let count = 0;
			while(count < index)
			{
				previous = current;
				current = current.next;
				count++;
			}
			removedData = current.data;
			previous.next = current.next;
		}
		this.size--;
		return removedData;
	} // end of removeAt()
	printList()
	{
		let current = this.head;
		let result = "";
		while(current)
		{
			result = result + current.data + " -> ";
			current = current.next;
		}
		console.log(result, "null");
	} // end of printList()
	isEmpty()
	{
		return (this.size == 0);
	}
	getSize()
	{
		return (this.size);
	}
};

// Driver code
list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log("Printing list:");
list.printList();
console.log("\n");

list.prepend(100);
list.insertAt(5, 3);
console.log("After prepend printing list:");
list.printList();

removedData = list.removeAt(0);
console.log(removedData);
console.log("After remove printing list:");
list.printList();

removedData = list.removeAt(3);
console.log(removedData);
console.log("After remove printing list:");
list.printList();