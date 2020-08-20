import { ActionType, AppState, AppAction } from "../types/Types"

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SET_POPULAR:
      return { ...state, popular: action.payload.popular }
    case ActionType.SET_SELECTED:
      return { ...state, selected: action.payload.selected }
    case ActionType.SET_RELATED:
      return { ...state, related: action.payload.related }
    case ActionType.SET_SEARCHED:
      return { ...state, searched: action.payload.searched }
    case ActionType.SET_SEARCH_WORD:
      return { ...state, searchWord: action.payload.searchWord }
    default:
      return state
  }
}
export default reducer
