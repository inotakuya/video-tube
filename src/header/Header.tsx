import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC, useState } from "react"
import { Link } from "react-router-dom"
import Style from "./Header.module.scss"

const Header: FC = () => {
  const [searchWord, setSearchWord] = useState("")
  // 検索キーワードをstateに登録
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value)
  // 検索実行
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="検索" value={searchWord} onChange={handleChange} />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header
