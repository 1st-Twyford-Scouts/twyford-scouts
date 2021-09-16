import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

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
    return (
    <>
        <nav>
          <Link to="/leaders">Leaders Home</Link>{" "}
          <Link to="/leaders/notices">Notices</Link>{" "}
          <Link to="/leaders/news">News Stories</Link>{" "}
          <a href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}>Log Out</a>
        </nav>
        <Router>
        <Home path="/leaders" user={user} />
        <Notices path="/leaders/notices" />
        <News path="/leaders/news" />
        </Router>
    </>
    )
}

export default Leaders