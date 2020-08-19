import React, { FC } from "react"
import { Link } from "react-router-dom"
import { VideoGridItemProps } from "../../types/Types"

const SideListItem: FC<VideoGridItemProps> = ({ id, src, title }: VideoGridItemProps) => {
  return (
    <Link to={{ pathname: "watch", search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
