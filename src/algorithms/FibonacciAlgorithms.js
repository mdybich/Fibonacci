export function computeFibonacciIterative(amount) {
  let a = 0;
  let b = 1;
  let result = 1;

  for (let i = 2; i <= amount; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

export function computeFibonacciRecursive(amount) {
  if (amount <= 2) {
    return 1;
  } else {
    return computeFibonacciRecursive(amount - 1) + computeFibonacciRecursive(amount - 2);
  }
}

export function computeFibonacciDynamicRecursive(amount) {
  const results = new Map();
  results.set(0, 0);
  results.set(1, 1);

  function fibonacciRecursive(step) {
    if (!results.has(step)) {
      results.set(step, fibonacciRecursive(step - 1) + fibonacciRecursive(step - 2));
    }

    return results.get(step);
  }

  return fibonacciRecursive(amount);
}
