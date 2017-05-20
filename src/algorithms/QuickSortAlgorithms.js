export function quickSortIterative(arr) {
  const stack = [arr];
  const sorted = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    if (temp.length === 1) {
      sorted.push(temp[0]);
      continue;
    }

    const pivot = temp[0];
    const left = [];
    const right = [];

    for (let i = 1; i < temp.length; i++) {
      if (temp[i] <  pivot) {
        left.push(temp[i]);
      } else {
        right.push(temp[i]);
      }
    }

    left.push(pivot);

    if (right.length)
      stack.push(right);
    if (left.length)
      stack.push(left);

  }

  return sorted;
}

export const quickSortRecursive = (arrayToSort) => quickSort(arrayToSort, 0, arrayToSort.length - 1);

function quickSort(arr, left, right){
  let pivot, partitionIndex;

  if (left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, pivot, left, right){
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export const quickSortNative = (arrayToSort) => arrayToSort.sort((a,b) => a-b);

export const generateRandomArray = (length, max) => [...new Array(length)]
  .map(() => Math.round(Math.random() * max));