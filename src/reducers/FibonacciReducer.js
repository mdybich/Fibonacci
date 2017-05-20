import {
  SET_FIBONACCI_AMOUNT, COMPUTE_FIBONACCI,
  SWITCH_FIBONACCI_RECURSION_FLAG, SWITCH_FIBONACCI_ITERATIVE_FLAG, SWITCH_FIBONACCI_DYNAMIC_RECURSION_FLAG
} from "../actions";
import { computeFibonacciRecursive, computeFibonacciIterative, computeFibonacciDynamicRecursive, } from "../algorithms/FibonacciAlgorithms";

const initialState = {
  amount: 0,
  iterativeResult: 0,
  recursiveResult: 0,
  dynamicRecursiveResult: 0,
  isIterativeActive: true,
  isRecursiveActive: true,
  isDynamicRecursiveActive: true
};

function fibonacciReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIBONACCI_AMOUNT:
      return Object.assign({}, state, {
        amount: action.amount
      });
    case COMPUTE_FIBONACCI:
      const { amount } = state;
      if (amount && amount > 0) {
        let iterativeResult = 0;
        let recursiveResult = 0;
        let dynamicRecursiveResult = 0;

        if (state.isIterativeActive) {
          iterativeResult = getIterativeResultInSeconds(amount);
        }

        if (state.isRecursiveActive) {
          recursiveResult = getRecursiveResultsInSeconds(amount);
        }

        if (state.isDynamicRecursiveActive) {
          dynamicRecursiveResult = getDynamicRecursiveResultsInSeconds(amount);
        }

        return Object.assign({}, state, {
          iterativeResult,
          recursiveResult,
          dynamicRecursiveResult
        });
      }
      return state;
    case SWITCH_FIBONACCI_RECURSION_FLAG:
      const { isRecursiveActive } = state;

      return Object.assign({}, state, {
        isRecursiveActive: !isRecursiveActive
      });
    case SWITCH_FIBONACCI_ITERATIVE_FLAG:
      const { isIterativeActive } = state;

      return Object.assign({}, state, {
        isIterativeActive: !isIterativeActive
      });
    case SWITCH_FIBONACCI_DYNAMIC_RECURSION_FLAG:
      const { isDynamicRecursiveActive } = state;

      return Object.assign({}, state, {
        isDynamicRecursiveActive: !isDynamicRecursiveActive
      });
    default:
      return state;
  }
}

function getIterativeResultInSeconds(amount) {
  const begin = performance.now();
  computeFibonacciIterative(amount);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(5);
}

function getRecursiveResultsInSeconds(amount) {
  const begin = performance.now();
  computeFibonacciRecursive(amount);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(5);
}

function getDynamicRecursiveResultsInSeconds(amount) {
  const begin = performance.now();
  computeFibonacciDynamicRecursive(amount);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(5);
}


export default fibonacciReducer;