import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  topBar,
  navLinkItem,
  navLinkText,
  navLinkItemCurrent,
  profilePicture
} from './leaders.module.css'

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
  }
const Notices = () => <p>Notices</p>
const News = () => <p>News</p>

const Leaders = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

  const user = getProfile()
  console.log(user)
  return (
    <div className={container}>
        <nav className={topBar}>
          <Link to="/" className={navLinkItem} activeClassName={navLinkItemCurrent}>
            <StaticImage className={navLinkItem}
              alt="1st Twyford Scouts"
              src="../images/Scouts1stTwyfordLinearWhite96px.png"/>
          </Link>
          <Link className={navLinkItem} to="/leaders"><div className={navLinkText}>Leaders Home</div></Link>{" "}
          <Link className={navLinkItem} to="/leaders/notices"><div className={navLinkText}>Notices</div></Link>{" "}
          <Link className={navLinkItem} to="/leaders/news"><div className={navLinkText}>News Stories</div></Link>{" "}
          <a className={navLinkItem} href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}><div className={navLinkText}>Log Out</div></a>
            <div className={navLinkItem}>
              <img className={profilePicture} src={user.picture} alt={user.name}/>
            </div>
        </nav>
        <Router>
        <Home path="/leaders" user={user} />
        <Notices path="/leaders/notices" />
        <News path="/leaders/news" />
        </Router>
    </div>
    )
}

export default Leaders