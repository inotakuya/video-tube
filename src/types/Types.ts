import { ReactNode } from "react"

export interface Props {
  children: ReactNode
}

export interface VideoGridItemProps {
  id: string
  src: string
  title: string
}

export enum ActionType {
  SET_POPULAR = "SET_POPULAR",
  SET_SELECTED = "SET_SELECTED",
}

export interface Popular {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      standard: {
        url: string
      }
    }
  }
}

export interface ContextValue {
  globalState: AppState
  setGlobalState: (action: AppAction) => void
}

export interface AppState {
  popular?: []
  selected?: Popular
}

export interface AppAction {
  type: ActionType
  payload: AppState
}

export interface YoutubeProps {
  data: {
    items: []
  }
}

export interface VideoPlayProps {
  id: string
}
