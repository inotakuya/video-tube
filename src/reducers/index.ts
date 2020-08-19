import { ActionType, AppState, AppAction } from "../types/Types"

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SET_POPULAR:
      return { ...state, popular: action.payload.popular }
    default:
      return state
  }
}
export default reducer
