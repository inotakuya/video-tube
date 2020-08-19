import React, { FC } from "react"
import { Link } from "react-router-dom"
import { VideoGridItemProps } from "../../types/Types"
import Style from "./VideoGridItem.module.scss"

const VideoGridItem: FC<VideoGridItemProps> = ({ id, src, title }: VideoGridItemProps) => {
  return (
    <Link to={{ pathname: "watch", search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default VideoGridItem
