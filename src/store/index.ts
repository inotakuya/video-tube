import { createContext } from "react"
import { AppState, ContextValue, Popular } from "../types/Types"

export const initialState: AppState = {
  popular: [],
  selected: {} as Popular,
  related: [],
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
} as ContextValue)
