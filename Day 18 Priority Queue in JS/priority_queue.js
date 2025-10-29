// **** Start of code
// this code is getting error. i am unable to understand
// why this is happening?

// TypeError: Cannot read properties of undefined (reading 'priority')

class MinHeap {
	constructor() {
		this.items = [];
	}

	getSize() {
		return (this.items.length);
	}

	isEmpty() {
		if (this.items.length == 0)
			return true;
		else
			return false;
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return (2 * index + 1);
	}

	getRightChildIndex(index) {
		return (2 * index + 2);
	}

	swap(i, j) {
		let temp = this.items[i];
		this.items[i] = this.items[j];
		this.items[j] = temp;
	}

	bubbleUp(index) {
		let currentIndex = index;
		let parentIndex = this.getParentIndex(currentIndex);
		let continueLoop = true;

		while (continueLoop && (this.items[currentIndex].priority <	this.items[parentIndex].priority)) {
			this.swap(currentIndex, parentIndex);
			currentIndex = parentIndex;
			parentIndex = this.getParentIndex(currentIndex);

			// We will stop as soon as we reach at root 
			// node.
			if (currentIndex == 0)
				continueLoop = false;
		}
	} // end of bubbleUp()

	insert(data) {
		this.items.push(data);
		this.bubbleUp(this.items.length - 1);
	} // end of insert()

	sinkDown(index) {
		let currentIndex = index;
		const lastIndex = this.getSize() - 1;
		let continueLoop = true;

		while (continueLoop) {
			let leftChildIndex = this.getLeftChildIndex(currentIndex);
			let rightChildIndex = this.getRightChildIndex(currentIndex);
			let minValueIndex = null;

			if (leftChildIndex <= lastIndex) {
				if (this.items[leftChildIndex].priority < this.items[currentIndex].priority) {
					minValueIndex = leftChildIndex;
				}
			}

			if (rightChildIndex <= lastIndex) {
				let isRightChildHightPriority = minValueIndex == null || this.items[rightChildIndex].priority < this.items[minValueIndex].priority;

				if (isRightChildHightPriority) {
					minValueIndex = rightChildIndex;
				}
			}

			if (minValueIndex == null) {
				continueLoop = false;
			}
			else {
				this.swap(currentIndex, minValueIndex);
				currentIndex = minValueIndex;
			}
		}
	} // end of sinkDown()

	remove() {
		if (this.getSize() == 0) {
			console.log("Heap is empty.");
			return null;
		}
		else if (this.getSize() == 1) {
			return (this.items.pop());
		}

		// swap the root node with the last node.
		this.swap(0, this.getSize() - 1);
		const removedData = this.items.pop();
		this.sinkDown(0);
		return removedData;
	}

	peek() {
		if (this.getSize() == 0) {
			return null;
		}
		else {
			return (this.items[0]);
		}
	}
}; // end of class::MinHeap

class PriorityQueue {
	constructor() {
		// Remember: In JS class memeber variables are always created like **this.memberVariableName = someValue;**
		this.minHeap = new MinHeap();
	}

	isEmpty() {
		return minHeap.getSize() == 0;
	}

	getSize() {
		return this.minHeap.getSize();
	}

	enqueue(priority, data) {
		const newItem = {priority, data};
		this.minHeap.insert(newItem);
	}

	dequeue() {
		return this.minHeap.remove();
	}

	peek() {
		return this.minHeap.peek();
	}

}; // end of class::PriorityQueue

// Driver code

const taskQueue = new PriorityQueue();

taskQueue.enqueue(1, "Daily Learning");
taskQueue.enqueue(7, "Sleep");
taskQueue.enqueue(2, "Study");
taskQueue.enqueue(0, "Being a good human");
taskQueue.enqueue(4, "Attend live sessions");

while(!taskQueue.isEmpty()) {
	let nextTask = taskQueue.dequeue();
	console.log(nextTask.priority," .", nextTask.data);
}


// **** End of code