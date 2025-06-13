/* 1. Import necessary hooks and utilities */

import { useSyncExternalStore } from "react"
import { createStore } from "./create-store"

export const create = (createState) => {
  /* 2. Create store using the createState */
  const store = createStore(createState)
  /* 3. Define a default selector function */
  const defaultSelector = (arg) => arg
  /* 4. Create the useStore custom hook 
    Use useSyncExternalStore to subscribe to the store */
  const useStore = (selector = defaultSelector) => {
    return useSyncExternalStore(
      store.subscribe,
      () => selector(store.getState()),
      () => selector(store.getInitialState())
    )
  }
  /* 5. Attach the store API to the useStore hook */
  Object.assign(useStore, store)
  /* 6. Return the useStore hook */
  return useStore
  
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