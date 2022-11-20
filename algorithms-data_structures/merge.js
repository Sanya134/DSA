var merge = (arr1, arr2) => {
  var array = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }
  return array;
}

console.log(merge([1, 10,], [6, 25]));