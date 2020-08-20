import React, { FC, useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { fetchSearchData } from "../api"
import VideoGrid from "../components/videoGrid/VideoGrid"
import VideoGridItem from "../components/videoGridItem/VideoGridItem"
import Layout from "../layout/Layout"
import { Store } from "../store"
import { Video, ActionType } from "../types/Types"

const Search: FC = () => {
  const { search } = useLocation()
  const { globalState, setGlobalState } = useContext(Store)

  const setSearchResult = async () => {
    // urlのid(query=以降)を取得
    const searchParams = new URLSearchParams(search)
    const query = searchParams.get("query")
    if (query) {
      // queryがある場合、 検索動画リスト情報を取得
      await fetchSearchData(query).then(res => {
        setGlobalState({ type: ActionType.SET_SEARCHED, payload: { searched: res.data.items } })
      })
    }
  }
  useEffect(() => {
    setSearchResult()
  }, [search])
  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((video: Video) => {
            return (
              <VideoGridItem
                id={video.id.videoId}
                key={video.id.videoId}
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
            )
          })
        ) : (
          <span>no data</span>
        )}
      </VideoGrid>
    </Layout>
  )
}

export default Search
