import React, { FC } from "react"
import { Props } from "../../types/Types"
import Style from "./VideoGrid.module.scss"

const VideoGrid: FC<Props> = ({ children }: Props) => {
  return <div className={Style.container}>{children}</div>
}

export default VideoGrid
