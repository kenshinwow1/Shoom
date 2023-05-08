import { useReducer } from 'react';

export default function useStateHistory(initialValue) {
  const [allStates, setState] = useReducer(
    (oldState, newState) => {
      return [...oldState, newState];
    },
    typeof initialValue === 'function'
      ? [initialValue()]
      : initialValue !== undefined
      ? [initialValue]
      : []
  );

  const currentState = allStates[allStates.length - 1];
  const stateHistory = allStates.slice(0, allStates.length - 1);
  return [currentState, setState, stateHistory];
}
