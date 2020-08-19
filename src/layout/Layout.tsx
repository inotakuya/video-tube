import React, { FC, ReactNode } from "react"
import Header from "../header/Header"
import { Props } from "../types/Types"

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
