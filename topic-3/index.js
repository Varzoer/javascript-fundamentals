// Task 1

function compact(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
compact([1, 2, 2, 4, 7]);

// Task 2

function createArray(start, end) {
    const result = [];
    for (let i = 0; result.length <= end; i++) {

    }
}
createArray(2, 9);