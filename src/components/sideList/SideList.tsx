import React, { FC, useContext } from "react"
import { Store } from "../../store"
import { Video } from "../../types/Types"
import SideListItem from "../sideListItem/sideListItem"
import Style from "./SideList.module.scss"

const SideList: FC = () => {
  const { globalState } = useContext(Store)
  return (
    <div className={Style.sideNav}>
      {globalState.related ? (
        globalState.related
          .filter((video: Video) => video.snippet != null)
          .map((video: Video) => (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          ))
      ) : (
        <span>no data</span>
      )}
    </div>
  )
}

export default SideList
