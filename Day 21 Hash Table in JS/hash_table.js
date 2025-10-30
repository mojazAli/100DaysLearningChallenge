class HashTable{
	constructor(capacity = 50){
		this.table = new Array(capacity);
		this.size = 0;
	}
	// We can declare private function, by starting function-name with _ (like _functionName() )
	_hashFunction(key){
		let hashValue = 0;
		for(let i = 0; i < key.length; i++){
			hashValue = hashValue + key.charCodeAt(i);
		}
		return hashValue % this.table.length;
	}
	insert(key, value){
		const index = this._hashFunction(key);
		if(this.table[index]==undefined){
			this.table[index] = [];
		}

		const chain = this.table[index];
		for(let i = 0; i < chain.length; i++){
			if(chain[i][0]==key){
				chain[i][1] = value;
				return;
			}
		}

		chain.push([key, value]);
		this.size++;
	}
	remove(key){
		const index = this._hashFunction(key);
		const chain = this.table[index];

		if(chain){
			for(let i = 0; i < chain.length; i++){
				if(chain[i][0] == key){
					const removedValue = chain.splice(i, 1);
					this.size--;
					// ignoring key. return the value of the removed record
					return removedValue[1];
				}
			}
		}
		else{
			return undefined;
		}
	}
	get(key){
		const index = this._hashFunction(key);
		const chain = this.table[index];

		if(chain){
			for(let i = 0; i < chain.length; i++){
				if(chain[i][0] == key){
					return chain[i][1];
				}
			}
		}
		else{
			return undefined;
		}
	}
	getSize(){
		return this.size;
	}

} // end of class::HashTable 

// Driver code
const ht = new HashTable(10);
ht.insert("Amjad", 90);
ht.insert("Usman", 40);
ht.insert("Usama", 65);
ht.insert("Kamal", 71);
ht.insert("Nazeer", 53);

console.log(ht.get("Kamal"));
console.log(ht.get("Usama"));
console.log(ht.get("Hamza"));

console.log("Size of Hash table: ", ht.getSize());

const removedValue = ht.remove("Usama");
console.log("After removing record: ");
console.log("Size of Hash table: ", ht.getSize());
console.log(ht.get("Usama"));