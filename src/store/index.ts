import { createContext } from "react"
import { AppState, ContextValue } from "../types/Types"

export const initialState: AppState = {
  popular: [],
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
} as ContextValue)
