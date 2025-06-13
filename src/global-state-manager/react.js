/* 1. Import necessary hooks and utilities */

export const create = (createState) => {
  /* 2. Create the store using the createState */

  /* 3. Define a default selector function */

  /* 4. Create the useStore custom hook 
    Use useSyncExternalStore to subscribe to the store */
  
  /* 5. Attach the store API to the useStore hook */
  
  /* 6. Return the useStore hook */
  
}





















































/*
import { useSyncExternalStore } from 'react'
import { createStore } from './create-store'

const defaultSelector = (arg) => arg

export const create = (createState) => {
  const store = createStore(createState)
  
  const useStore = (selector = defaultSelector) => {
    return useSyncExternalStore(
      store.subscribe,
      () => selector(store.getState()),
      () => selector(store.getInitialState())
    )
  }

  Object.assign(useStore, store)
  return useStore
}
*/