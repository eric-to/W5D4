Array.prototype.uniq = function () {
  let uniqueArr = [];
  let i;
  for (i = 0; i < this.length; i++) {
    if (uniqueArr.includes(this[i])) {
      continue;
    } else {
      uniqueArr.push(this[i]);
    }
  }
  return uniqueArr;
};

Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

Array.prototype.transpose = function () {
  let transposed_matrix = [];
  for (let i = 0; i < this[0].length; i++) {
    transposed_matrix.push([]);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      transposed_matrix[j][i] = this[i][j];
    }
  }
  
  return transposed_matrix;
};