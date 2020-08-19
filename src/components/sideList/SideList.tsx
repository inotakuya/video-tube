import React, { FC, useContext } from "react"
import { Store } from "../../store/index"
import { Video } from "../../types/Types"
import SideListItem from "../sideListItem/sideListItem"

const SideList: FC = () => {
  const { globalState } = useContext(Store)
  return (
    <div>
      {globalState.related ? (
        globalState.related.map((video: Video) => (
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
