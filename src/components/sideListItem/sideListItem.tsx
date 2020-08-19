import React, { FC } from "react"
import { Link } from "react-router-dom"
import { VideoGridItemProps } from "../../types/Types"
import Style from "./SideListItem.module.scss"

const SideListItem: FC<VideoGridItemProps> = ({ id, src, title }: VideoGridItemProps) => {
  return (
    <Link className={Style.item} to={{ pathname: "watch", search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
