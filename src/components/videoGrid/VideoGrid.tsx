import React, { FC } from "react"
import { Link } from "react-router-dom"
import { VideoGridProps } from "../../types/Types"

const VideoGrid: FC<VideoGridProps> = ({ id, src, title }: VideoGridProps) => {
  return (
    <div>
      <Link to={{ pathname: "watch", search: `?v=${id}` }}>
        <div>
          <img src={src} alt={title} />
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}

export default VideoGrid
