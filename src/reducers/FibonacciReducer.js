import { ProgrammingLanguage } from "../enums"
import { SET_FIBONACCI_PROGRAMMING_LANGUAGE } from "../actions";

const initialState = {
  selectedProgrammingLanguage: ProgrammingLanguage.JAVASCRIPT,
  amount: null,
  iterativeResult: null,
  recursiveResult: null
};

function fibonacciReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIBONACCI_PROGRAMMING_LANGUAGE:
      return Object.assign({}, state, {
        selectedProgrammingLanguage: action.programmingLanguage
      });
    default:
      return state;
  }
}

export default fibonacciReducer;