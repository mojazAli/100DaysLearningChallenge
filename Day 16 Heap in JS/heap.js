class MinHeap
{
	constructor()
	{
		this.items = [];
	}

	getSize()
	{
		return (this.items.length);
	}

	isEmpty()
	{
		if(this.items.length == 0)
			return true;
		else
			return false;
	}

	getParentIndex(index)
	{
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index)
	{
		return (2 * index + 1);
	}

	getRightChildIndex(index)
	{
		return (2 * index + 2);
	}

	swap(i, j)
	{
		let temp = this.items[i];
		this.items[i] = this.items[j];
		this.items[j] = temp;
	}

	bubbleUp(index)
	{
		let currentIndex = index;
		let parentIndex = this.getParentIndex(currentIndex);
		let continueLoop = true;

		while(continueLoop && (this.items[currentIndex] < 
			   				   this.items[parentIndex]))
		{
			this.swap(currentIndex, parentIndex);
			currentIndex = parentIndex;
			parentIndex = this.getParentIndex(currentIndex);

			// We will stop as soon as we reach at root 
			// node.
			if(currentIndex == 0)
				continueLoop = false;
		}
	} // end of bubbleUp()

	insert(data)
	{
		this.items.push(data);
		this.bubbleUp(this.items.length - 1);
	} // end of insert()

	sinkDown(index)
	{
		let currentIndex = index;
		const lastIndex = this.getSize() - 1;
		let continueLoop = true; 
		
		while(continueLoop)
		{
			let leftChildIndex = this.getLeftChildIndex(currentIndex);
			let rightChildIndex = this.getRightChildIndex(currentIndex);
			let minValueIndex = null;
			
			if(leftChildIndex <= lastIndex)
			{
				if(this.items[leftChildIndex] < this.items[currentIndex])
				{
					minValueIndex = leftChildIndex;
				}
			}
			
			if(rightChildIndex <= lastIndex)
			{
				if(minValueIndex == null && (this.items[rightChildIndex] < this.items[currentIndex]))
				{
					minValueIndex = rightChildIndex;
				}
				else if(minValueIndex != null && (this.items[rightChildIndex] < this.items[minValueIndex]))
				{
					minValueIndex = rightChildIndex;
				}
			}

			if(minValueIndex == null)
			{
				continueLoop = false;
			}
			else
			{
				this.swap(currentIndex, minValueIndex);
				currentIndex = minValueIndex;
			}
		}
	} // end of sinkDown()

	remove()
	{
		if(this.getSize() == 0)
		{
			console.log("Heap is empty.");
			return null;
		}
		else if(this.getSize() == 1)
		{
			return (this.items.pop());
		}
		
		// swap the root node with the last node.
		this.swap(0, this.getSize() - 1);
		const removedData = this.items.pop();
		this.sinkDown(0);
		return removedData;
	}

	peek()
	{
		if(this.getSize() == 0)
		{
			return null;
		}
		else
		{
			return (this.items[0]);
		}
	}
};

// Driver code
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(30);
minHeap.insert(60);
minHeap.insert(41);
minHeap.insert(40);
minHeap.insert(65);
minHeap.insert(90);
minHeap.insert(70);
minHeap.insert(65);
minHeap.insert(52);

// let nextMin;
while(minHeap.getSize() > 0)
{
	console.log("Removed Min Value: ", minHeap.remove(), "| New Root: ", minHeap.peek());
}