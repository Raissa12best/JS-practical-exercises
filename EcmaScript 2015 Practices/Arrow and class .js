class SortedArray {
  constructor(compare) {
    this.compare = compare;
    this.content = [];
  }

  
  findPos = (elt) => {
    return this.content.findIndex(item => this.compare(item, elt) >= 0);
  };

  insert = (elt) => {
    const i = this.findPos(elt);
    if (i === -1) {
      
      this.content.push(elt);
    } else {
      
      this.content.splice(i, 0, elt);
    }
  };
}


const sorted = new SortedArray((a, b) => a - b);

sorted.insert(5);
sorted.insert(1);
sorted.insert(2);
sorted.insert(4);
sorted.insert(3);

console.log("array:", sorted.content); 

