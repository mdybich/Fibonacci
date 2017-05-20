export const SET_FIBONACCI_AMOUNT = "SET_FIBONACCI_AMOUNT";
export const COMPUTE_FIBONACCI = "COMPUTE_FIBONACCI";
export const SWITCH_FIBONACCI_ITERATIVE_FLAG = "SWITCH_FIBONACCI_ITERATIVE_FLAG";
export const SWITCH_FIBONACCI_RECURSION_FLAG = "SWITCH_FIBONACCI_RECURSION_FLAG";
export const SWITCH_FIBONACCI_DYNAMIC_RECURSION_FLAG = "SWITCH_FIBONACCI_DYNAMIC_RECURSION_FLAG";

export const SET_QUICK_SORT_AMOUNT = "SET_QUICK_SORT_AMOUNT";
export const COMPUTE_QUICK_SORT = "COMPUTE_QUICK_SORT";
export const SWITCH_QUICK_SORT_ITERATIVE_FLAG = "SWITCH_QUICK_SORT_ITERATIVE_FLAG";
export const SWITCH_QUICK_SORT_RECURSION_FLAG = "SWITCH_QUICK_SORT_RECURSION_FLAG";
export const SWITCH_QUICK_SORT_NATIVE_FLAG = "SWITCH_QUICK_SORT_NATIVE_FLAG";

export function setFibonacciAmount(amount) {
  return {
    type: SET_FIBONACCI_AMOUNT,
    amount
  }
}

export function computeFibonacci() {
  return {
    type: COMPUTE_FIBONACCI
  }
}

export function switchFibonacciRecursionFlag() {
  return {
    type: SWITCH_FIBONACCI_RECURSION_FLAG
  }
}

export function switchFibonacciIterativeFlag() {
  return {
    type: SWITCH_FIBONACCI_ITERATIVE_FLAG
  }
}

export function switchFibonacciDynamicRecursionFlag() {
  return {
    type: SWITCH_FIBONACCI_DYNAMIC_RECURSION_FLAG
  }
}

export function setQuickSortAmount(amount) {
  return {
    type: SET_QUICK_SORT_AMOUNT,
    amount
  }
}

export function computeQuickSort() {
  return {
    type: COMPUTE_QUICK_SORT
  }
}

export function switchQuickSortIterativeFlag() {
  return {
    type: SWITCH_QUICK_SORT_ITERATIVE_FLAG
  }
}

export function switchQuickSortRecursionFlag() {
  return {
    type: SWITCH_QUICK_SORT_RECURSION_FLAG
  }
}

export function switchQuickSortNativeFlag() {
  return {
    type: SWITCH_QUICK_SORT_NATIVE_FLAG
  }
}