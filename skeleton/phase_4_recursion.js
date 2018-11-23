const range = function(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
};

const sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1, arr.length));
};

const exponent = function(base, exp) {
  if (exp == 0) {
    return 1;
  } else if (exp == 1) {
    return base;
  } else {
    return base * exponent(base, exp - 1);
  }
};

const exponentTwo = function(base, exp) {
  if (exp == 0) {
    return 1;
  } else if (exp == 1) {
    return base;
  } else {
    if (exp % 2 === 0) {
      return Math.pow(exponentTwo(base, exp / 2), 2);
    } else {
      return base * exponentTwo(base, ((exp - 1) / 2) * ((exp - 1) / 2));
    }
  }
};

const fibonacci = function(n) {
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 1];
  } else {
    sequence_so_far = fibonacci(n - 1);
    sequence_length = sequence_so_far.length;
    return sequence_so_far.concat([sequence_so_far[sequence_length - 1] + sequence_so_far[sequence_length - 2]]);
  }
};

const deepDup = function(arr) {
  let duppedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      duppedArr.push(deepDup(arr[i]));
    } else {
      duppedArr.push(arr[i]);
    }
  }
  return duppedArr;
};

const bsearch = function(arr, target) {
  console.log(arr);
  
  if (arr.length === 0) {
    return null;
  }
  
  let midIndex = Math.floor(arr.length / 2);
  if (arr[midIndex] === target) {
    return midIndex;
  }
  
  if (target < arr[midIndex]) {
    return bsearch(arr.slice(0, midIndex), target);
  } else {
    bsearch_results = bsearch(arr.slice(midIndex + 1), target);
    if (bsearch_results >= 0) {
      return bsearch_results + 1 + midIndex;
    }
  }
};

const mergesort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  return mergeHelper(mergesort(left), mergesort(right));
};

const mergeHelper = function(left, right) {
  let combined_arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      combined_arr.push(right.shift());
    } else {
      combined_arr.push(left.shift());
    }
  }
  return combined_arr.concat(left, right);
};