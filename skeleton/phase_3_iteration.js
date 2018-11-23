Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted !== true) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        break;
      }
      if (this[i] > this[i + 1]) {
        let temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp; 
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let substr_lst = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      substr = this.slice(i, j + 1);
      if (substr) {
        substr_lst.push(substr);
      }
    }
  }
  return substr_lst;
};