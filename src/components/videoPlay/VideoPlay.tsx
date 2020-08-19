import React, { FC } from "react"
import YouTube from "react-youtube"
import { VideoPlayProps } from "../../types/Types"
import Style from "./VideoPlay.module.scss"

const VideoPlay: FC<VideoPlayProps> = ({ id }: VideoPlayProps) => {
  return (
    <div>
      <YouTube videoId={id} className={Style.video} />
    </div>
  )
}

export default VideoPlay
