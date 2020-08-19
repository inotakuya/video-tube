import React, { FC, useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import VideoDetail from "../components/videoDetail/VideoDetail"
import Layout from "../layout/Layout"
import { Store } from "../store/index"
import { fetchSelectedData } from "../api/index"
import { ActionType } from "../types/Types"

const Watch: FC = () => {
  const { setGlobalState } = useContext(Store)
  const { search } = useLocation()
  const setVideos = async () => {
    // urlのid(v=以降)を取得
    const searchParams = new URLSearchParams(search)
    const id = searchParams.get("v")
    if (id) {
      // idがある場合、動画情報を取得
      fetchSelectedData(id).then(res => {
        setGlobalState({
          type: ActionType.SET_SELECTED,
          payload: { selected: res.data.items.shift() },
        })
      })
    }
  }
  useEffect(() => {
    setVideos()
  }, [search])
  return (
    <Layout>
      <VideoDetail />
    </Layout>
  )
}

export default Watch
