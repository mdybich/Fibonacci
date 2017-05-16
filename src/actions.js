export const SET_FIBONACCI_PROGRAMMING_LANGUAGE = "SET_FIBONACCI_PROGRAMMING_LANGUAGE";

export function setFibonacciProgrammingLanguage(programmingLanguage) {
  return {
    type: SET_FIBONACCI_PROGRAMMING_LANGUAGE,
    programmingLanguage
  }
}