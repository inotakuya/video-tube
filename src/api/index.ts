import axios from "axios"
import { YoutubeProps } from "../types/Types"

const KEY = "AIzaSyDxnMzRoxcWXx_bI4GxygRmisG0-C_srIk"
const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
})

// 共通のパラメーター
const commonParams = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
}

// youtube動画リストを取得
export const fetchPopularData = async (): Promise<YoutubeProps> => {
  const result = await youtubeApi.get("videos", {
    params: {
      ...commonParams,
      chart: "mostPopular",
    },
  })
  return result
}

// youtube動画情報を取得
export const fetchSelectedData = async (id: string): Promise<YoutubeProps> => {
  const result = await youtubeApi.get("videos", {
    params: {
      ...commonParams,
      id,
    },
  })
  return result
}

// youtube関連動画情報を取得
export const fetchRelatedData = async (id: string): Promise<YoutubeProps> => {
  const result = await youtubeApi.get("search", {
    params: {
      ...commonParams,
      relatedToVideoId: id,
    },
  })
  return result
}

// youtube検索動画リスト情報を取得
export const fetchSearchData = async (query: string): Promise<YoutubeProps> => {
  const result = await youtubeApi.get("search", {
    params: {
      ...commonParams,
      q: query,
    },
  })
  return result
}
