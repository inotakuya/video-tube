import React, { FC, useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import VideoDetail from "../components/videoDetail/VideoDetail"
import Layout from "../layout/Layout"
import { Store } from "../store/index"
import { fetchSelectedData, fetchRelatedData } from "../api/index"
import { ActionType } from "../types/Types"
import SideList from "../components/sideList/SideList"

const Watch: FC = () => {
  const { setGlobalState } = useContext(Store)
  const { search } = useLocation()

  const setVideos = async () => {
    // urlのid(v=以降)を取得
    const searchParams = new URLSearchParams(search)
    const id = searchParams.get("v")
    if (id) {
      // idがある場合、動画情報と関連動画情報を取得
      const [selected, related] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
      // 動画情報を設定
      setGlobalState({
        type: ActionType.SET_SELECTED,
        payload: { selected: selected.data.items.shift() },
      })
      // 関連動画情報を設定
      setGlobalState({
        type: ActionType.SET_RELATED,
        payload: { related: related.data.items },
      })
    }
  }
  useEffect(() => {
    setVideos()
  }, [search])
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch
