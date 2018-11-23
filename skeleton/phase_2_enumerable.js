Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const mapped_arr = [];
  this.myEach(element => mapped_arr.push(callback(element)));
  return mapped_arr;
};

Array.prototype.myReduce = function(func, acc) {
  if (acc === undefined) {
    acc = this.shift();
  }
  this.myEach(element => acc = func(element, acc));
  return acc;
};