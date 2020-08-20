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
  SET_RELATED = "SET_RELATED",
  SET_SEARCHED = "SET_SEARCHED",
  SET_SEARCH_WORD = "SET_SEARCH_WORD",
}

export interface Snippet {
  title: string
  description: string
  thumbnails: {
    standard: {
      url: string
    }
    medium: {
      url: string
    }
  }
}

export interface Popular {
  id: string
  snippet: Snippet
}
export interface Video {
  id: {
    videoId: string
  }
  snippet: Snippet
}

export interface ContextValue {
  globalState: AppState
  setGlobalState: (action: AppAction) => void
}

export interface AppState {
  popular?: []
  selected?: Popular
  related?: []
  searched?: []
  searchWord?: string
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
