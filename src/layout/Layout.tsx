import React, { FC } from "react"
import Header from "../header/Header"
import { Props } from "../types/Types"
import Style from "./Layout.module.scss"

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  )
}

export default Layout
