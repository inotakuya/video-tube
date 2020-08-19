import React, { FC, useEffect, useContext } from "react"
import Layout from "../layout/Layout"
import fetchPopularData from "../api"
import { ActionType, Popular } from "../types/Types"
import VideoGrid from "../components/videoGrid/VideoGrid"
import { Store } from "../store/index"
import VideoGridItem from "../components/videoGridItem/VideoGridItem"

const Top: FC = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchPopularData().then(res => {
      setGlobalState({
        type: ActionType.SET_POPULAR,
        payload: { popular: res.data.items },
      })
    })
  }, [globalState])
  return (
    <div>
      <Layout>
        <VideoGrid>
          {globalState.popular &&
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
