class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			return "Underflow";
		}
		else{
			return this.items.pop();
		}
	}

	peek() {
		if (this.isEmpty()) {
			return "Empty";
		}
		else{
			// Return the last element (the top)
			return this.items[this.items.length - 1];
		}
	}

	isEmpty() {
		return this.items.length === 0;
	}
	get size() {
		return this.items.length;
	}
}

const stack = new Stack();
const stackContainer = document.getElementById('stack-container');
const statusMessage = document.getElementById('status-message');

let elementCounter = 1;
function updateVisualization(highlightTop = false) {
	stackContainer.innerHTML = '';
	if (stack.isEmpty()) {
		stackContainer.innerHTML = '<div class="text-gray-400 mt-20">Stack is empty. Push an element!</div>';
		return;
	}

	for(let i=stack.items.length-1;i>=0;i--){
		const item = stack.items[i];
		const elementDiv = document.createElement('div');
		elementDiv.className = `stack-element bg-blue-500 hover:bg-blue-700 shadow-lg`;
		elementDiv.id = `stack-item-${i}`;
		elementDiv.textContent = item.value;

		if (highlightTop && i === stack.items.length - 1) {
			elementDiv.classList.add('peek-highlight');
		}
		stackContainer.prepend(elementDiv);
	}
}

function pushElement(){
	const input = document.getElementById('push-input');
	let value = input.value.trim();
	if (value === "") {
		value = `Element ${elementCounter}`;
	}

	if (stack.size >= 10) {
		 showStatus("Stack is full! Cannot push more than 10 elements.", "bg-red-100 text-red-800");
		 return;
	}

	const newItem = { 
		value: value,
		id: elementCounter 
	};
	elementCounter++;
	
	stack.push(newItem);
	input.value = '';
	showStatus(`PUSHED: ${newItem.value}`, "bg-green-100 text-green-800");
	updateVisualization();
}

function popElement(){
	const poppedItem = stack.pop();
	
	if (poppedItem === "Underflow") {
		showStatus("Error: Stack is empty (Underflow).", "bg-red-100 text-red-800");
	} 
	else {
		showStatus(`POPPED: ${poppedItem.value}`, "bg-red-100 text-red-800");
		updateVisualization();
	}
}

function peekElement(){
	const peekedItem = stack.peek();
	
	if (peekedItem === "Empty") {
		showStatus("Stack is empty. Nothing to peek.", "bg-red-100 text-red-800");
	} 
	else {
		showStatus(`PEEKED: ${peekedItem.value} (Top element highlighted)`, "bg-yellow-100 text-yellow-800");
		updateVisualization(true); // Pass true to highlight the top element
	}
}

function showStatus(message, styleClasses) {
	statusMessage.textContent = message;
	statusMessage.className = `mt-4 p-2 text-sm font-medium text-center rounded-md ${styleClasses}`;
	statusMessage.classList.remove('hidden');
	
	// Hide message after 3 seconds
	setTimeout(() => {
		statusMessage.classList.add('hidden');
	}, 4000);
}

window.onload = updateVisualization; 