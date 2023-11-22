// hash table Search with implementation in JavaScript with minimum time and space complexity
 
class HashTable {
    constructor() {
        this.table = {};
    }

    // Hash function to convert keys into an index
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // Use a prime number for better distribution
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    // Search for a key in the hash table
    search(key) {
        const index = this.hash(key);
        return this.table[index];
    }
}

// Example usage:
const myHashTable = new HashTable();

myHashTable.insert("name", "John");
myHashTable.insert("age", 25);
myHashTable.insert("city", "New York");

const nameValue = myHashTable.search("name");
const ageValue = myHashTable.search("age");
const cityValue = myHashTable.search("city");

console.log("Name:", nameValue);
console.log("Age:", ageValue);
console.log("City:", cityValue);
