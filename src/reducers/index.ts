import { ActionType, AppState, AppAction } from "../types/Types"

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SET_POPULAR:
      return { ...state, popular: action.payload.popular }
    case ActionType.SET_SELECTED:
      return { ...state, selected: action.payload.selected }
    case ActionType.SET_RELATED:
      return { ...state, related: action.payload.related }
    default:
      return state
  }
}
export default reducer
