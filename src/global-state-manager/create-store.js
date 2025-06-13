export const createStore = (createState) => {
  /* 0. Create state and be able to get it */
  let state
  const getState = () => state
  const listeners = new Set()

  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  /* 2. Be able to get the initialState */
  const getInitialState = () => initialState
  /* 3. Be able to update the state */
  /* 3.1 Do not replace objects */
  /* 3.2 Allow partial as function */
  /* 3.3. Create listeners and subscribe(), add to API */
  /* 3.4. Inform listeners with state and previousState */
  const setState = (partial) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial

    const isSameState = Object.is(nextState, state)
    if (isSameState) return
    
    const hasToReplace = typeof nextState !== 'object' || nextState === null || Array.isArray(nextState)
    const previousState = state
    state = hasToReplace ? nextState : { ...state, ...nextState }

    listeners.forEach(
      (listener) => listener(state, previousState)
    )
  }



  /* 1. Create api and state with createState, return api */
  const api = { getState, getInitialState, setState, subscribe }
  const initialState = state = createState(setState, getState, api)
  return api
}



















/*
Solution for managing global state in a React application.

export const createStore = (createState) => {X
  let state

  const getState = () => state
  const getInitialState = () => initialState

  const listeners = new Set()

  const setState = (partial) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial

    const isSameState = Object.is(nextState, state)
    if (isSameState) return

    const previousState = state

    const hasToReplace = typeof nextState !== 'object'
      || nextState === null
      || Array.isArray(nextState)
    
    state = hasToReplace
      ? nextState
      : { ...state, ...nextState }

    listeners.forEach(
      (listener) => listener(state, previousState)
    )
  }

  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  const api = { setState, getState, getInitialState, subscribe }
  const initialState = state = createState(setState, getState, api)
  return api
}
*/
