import {
  SET_QUICK_SORT_AMOUNT, COMPUTE_QUICK_SORT, SWITCH_QUICK_SORT_NATIVE_FLAG,
  SWITCH_QUICK_SORT_RECURSION_FLAG, SWITCH_QUICK_SORT_ITERATIVE_FLAG
} from "../actions";
import { quickSortRecursive, quickSortIterative, quickSortNative, generateRandomArray } from "../algorithms/QuickSortAlgorithms";

const initialState = {
  amount: 0,
  iterativeResult: 0,
  recursiveResult: 0,
  nativeResult: 0,
  isIterativeActive: true,
  isRecursiveActive: true,
  isNativeActive: true
};

function quickSortReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUICK_SORT_AMOUNT:
      return Object.assign({}, state, {
        amount: action.amount
      });
    case COMPUTE_QUICK_SORT:
      const { amount } = state;
      if (amount && amount > 0) {
        let iterativeResult = 0;
        let recursiveResult = 0;
        let nativeResult = 0;

        const arrayToSort = generateRandomArray(parseInt(amount), 1000);

        if (state.isIterativeActive) {
          iterativeResult = getIterativeResultInSeconds(arrayToSort);
        }

        if (state.isRecursiveActive) {
          recursiveResult = getRecursiveResultsInSeconds(arrayToSort);
        }

        if (state.isNativeActive) {
          nativeResult = getNativeResultsInSeconds(arrayToSort);
        }

        return Object.assign({}, state, {
          iterativeResult,
          recursiveResult,
          nativeResult
        });
      }
      return state;
    case SWITCH_QUICK_SORT_RECURSION_FLAG:
      const { isRecursiveActive } = state;

      return Object.assign({}, state, {
        isRecursiveActive: !isRecursiveActive
      });
    case SWITCH_QUICK_SORT_ITERATIVE_FLAG:
      const { isIterativeActive } = state;

      return Object.assign({}, state, {
        isIterativeActive: !isIterativeActive
      });
    case SWITCH_QUICK_SORT_NATIVE_FLAG:
      const { isNativeActive } = state;

      return Object.assign({}, state, {
        isNativeActive: !isNativeActive
      });
    default:
      return state;
  }
}

function getIterativeResultInSeconds(arrayToSort) {
  const begin = performance.now();
  quickSortIterative(arrayToSort);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(3);
}

function getRecursiveResultsInSeconds(arrayToSort) {
  const begin = performance.now();
  quickSortRecursive(arrayToSort);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(3);
}

function getNativeResultsInSeconds(arrayToSort) {
  const begin = performance.now();
  quickSortNative(arrayToSort);
  const end = performance.now();

  return ((end - begin) / 1000).toFixed(3);
}


export default quickSortReducer;