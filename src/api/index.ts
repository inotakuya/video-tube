import axios from "axios"
import { YoutubeProps } from "../types/Types"

const KEY = "AIzaSyCNLv1nMKz1ITHKoCUsvzq21JAgRl5kmFk"
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
const fetchPopularData = async (): Promise<YoutubeProps> => {
  const result = await youtubeApi.get("videos", {
    params: {
      ...commonParams,
      chart: "mostPopular",
    },
  })
  return result
}

export default fetchPopularData
