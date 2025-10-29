class CustomSet {
	constructor() {
		this.items = new Map();
	}
	add(data) {
		if(this.items.has(data)) {
			return false;
		}
		else {
			this.items.set(data, data);
			return true;
		}
	}
	getSize() {
		return this.items.size;
	}
	hasData(data) {
		return this.items.has(data);
	}
	remove(data) {
		return this.items.delete(data);
	}
	getValue() {
		return [...this.items.values()];
	}
	union(otherSet) {
		const unionSet = new CustomSet();
		this.getValue().forEach( data => unionSet.add(data));
		otherSet.getValue().forEach( data => unionSet.add(data));
		return unionSet;
	}
	intersection(otherSet) {
		const intersectionSet = new CustomSet();
		const smallerSet = this.getSize() < otherSet.getSize() ? this : otherSet;

		const largerSet = this.getSize() < otherSet.getSize() ? otherSet : this;

		smallerSet.getValue().forEach(data => {
			if(largerSet.hasData(data)) {
				intersectionSet.add(data);
			}
		});
		return intersectionSet;
	}
	difference(otherSet) {
		const differenceSet = new CustomSet();
		this.getValue().forEach(data =>{
			if(!otherSet.hasData(data)) {
				differenceSet.add(data);
			}
		});
		return differenceSet;
	}
};

// Driver code
const A = new CustomSet();
const B = new CustomSet();

let C = new CustomSet();
A.add(1);
A.add(2);

B.add(1);
B.add(2);
B.add(3);
B.add(4);
B.add(5);

console.log("\n** Set A **");
console.log(A);
console.log("\n** Set B **");
console.log(B);


C = A.union(B);
console.log("\n** Union of A and B **");
console.log(C);

C = A.intersection(B);
console.log("\n** Intersection of A and B **");
console.log(C);


C = B.difference(A);
console.log("\n** Difference of B and A **");
console.log(C);