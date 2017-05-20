import React from 'react';
import { computeFibonacciRecursive, computeFibonacciIterative, computeFibonacciDynamicRecursive } from "./algorithms/FibonacciAlgorithms";
import { quickSortRecursive, quickSortIterative } from "./algorithms/QuickSortAlgorithms";

describe("Fibonacci", () => {
  it("Properly compute fibonacci for 10 using iterative approach", () => {
    const result = computeFibonacciIterative(10);

    expect(result).toEqual(55);
  });

  it("Properly compute fibonacci for 25 using iterative approach", () => {
    const result = computeFibonacciIterative(25);

    expect(result).toEqual(75025);
  });

  it("Properly compute fibonacci for 1 using iterative approach", () => {
    const result = computeFibonacciIterative(1);

    expect(result).toEqual(1);
  });

  it("Properly compute fibonacci for 10 using recursive approach", () => {
    const result = computeFibonacciRecursive(10);

    expect(result).toEqual(55);
  });

  it("Properly compute fibonacci for 25 using recursive approach", () => {
    const result = computeFibonacciRecursive(25);

    expect(result).toEqual(75025);
  });

  it("Properly compute fibonacci for 1 using recursive approach", () => {
    const result = computeFibonacciRecursive(1);

    expect(result).toEqual(1);
  });

  it("Properly compute fibonacci for 10 using better recursive approach", () => {
    const result = computeFibonacciDynamicRecursive(10);

    expect(result).toEqual(55);
  });

  it("Properly compute fibonacci for 25 using better recursive approach", () => {
    const result = computeFibonacciDynamicRecursive(25);

    expect(result).toEqual(75025);
  });

  it("Properly compute fibonacci for 1 using better recursive approach", () => {
    const result = computeFibonacciDynamicRecursive(1);

    expect(result).toEqual(1);
  });
});

describe("QuickSort", () => {
  it("Properly sort array of 10 elements using recursive approach", () => {
    const arrayToSort = [34, 41, 1, 12, 98, 112, 23, 4, 78, 66];
    const sortedArray = [1, 4, 12, 23, 34, 41, 66, 78, 98, 112];

    const result = quickSortRecursive(arrayToSort);
    expect(result).toEqual(sortedArray);
  });

  it("Properly sort array of 10 elements using iterative approach", () => {
    const arrayToSort = [34, 41, 1, 12, 98, 112, 23, 4, 78, 66];
    const sortedArray = [1, 4, 12, 23, 34, 41, 66, 78, 98, 112];

    const result = quickSortIterative(arrayToSort);
    expect(result).toEqual(sortedArray);
  });

  it("Properly sort array of 10 already sorted elements using recursive approach", () => {
    const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = quickSortRecursive(arrayToSort);
    expect(result).toEqual(sortedArray);
  });

  it("Properly sort array of 10 already sorted elements using iterative approach", () => {
    const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = quickSortIterative(arrayToSort);
    expect(result).toEqual(sortedArray);
  });

  it("Properly sort array of 10 inverse sorted elements using recursive approach", () => {
    const arrayToSort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = quickSortRecursive(arrayToSort);
    expect(result).toEqual(sortedArray);
  });

  it("Properly sort array of 10 inverse sorted elements using iterative approach", () => {
    const arrayToSort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = quickSortIterative(arrayToSort);
    expect(result).toEqual(sortedArray);
  });
});
