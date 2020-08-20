import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC, useContext, useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { Store } from "../store/index"
import Style from "./Header.module.scss"
import { ActionType } from "../types/Types"

const Header: FC = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const [searchWord, setSearchWord] = useState("")
  const history = useHistory()
  // 検索キーワードをstateに登録
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value)
  // 検索実行
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGlobalState({ type: ActionType.SET_SEARCH_WORD, payload: { searchWord } })
    // 検索結果画面に遷移
    history.push(`/search?query=${searchWord}`)
  }
  useEffect(() => {
    if (globalState.searchWord) {
      setSearchWord(globalState.searchWord)
    }
  }, [globalState.searchWord])
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
