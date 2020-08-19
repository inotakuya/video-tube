import React, { FC, useContext, useEffect } from "react"
import fetchPopularData from "../api"
import VideoGrid from "../components/videoGrid/VideoGrid"
import VideoGridItem from "../components/videoGridItem/VideoGridItem"
import Layout from "../layout/Layout"
import { Store } from "../store/index"
import { ActionType, Popular } from "../types/Types"

const Top: FC = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    // 動画一覧を取得
    fetchPopularData().then(res => {
      setGlobalState({
        type: ActionType.SET_POPULAR,
        payload: { popular: res.data.items },
      })
    })
  }, [])
  return (
    <div>
      <Layout>
        <VideoGrid>
          {globalState.popular &&
            // 動画一覧がある場合
            globalState.popular.map((popular: Popular) => (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title}
              />
            ))}
        </VideoGrid>
      </Layout>
    </div>
  )
}

export default Top
