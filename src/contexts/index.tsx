import "normalize.css"
import React, { FC, useReducer } from "react"
import reducer from "../reducers/index"
import { initialState, Store } from "../store/index"
import { Props } from "../types/Types"

const StoreProvider: FC<Props> = ({ children }: Props) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  // すべてのコンポーネントでglobalStateとsetGlobalStateを使用できるようにする
  return <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
}

export default StoreProvider
