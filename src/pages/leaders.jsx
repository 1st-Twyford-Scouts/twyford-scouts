// @ts-check

import React from "react"
import { graphql } from 'gatsby'
import { login, logout, isAuthenticated, getProfile, getTokens } from "../utils/auth"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import EditNotices from '../components/leaders/EditNotices'
import EditNews from '../components/leaders/EditNews'
import EditStaticPages from '../components/leaders/EditStaticPages'
import store from '../state/store'
import { populate } from '../state/reducers/tagsReducer'

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

const Leaders = ({data}) => {
  if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
  }

  const state = store.getState();
  if (state.tags.list.length === 0) {
    store.dispatch(populate(data.allContentfulTag.nodes.map(tag => ({ id: tag.contentful_id, name: tag.name }))))
  }

  const user = getProfile()
  console.log(user)
  const tokens = getTokens()
  console.log(tokens)
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
          <Link className={navLinkItem} to="/leaders/static-pages"><div className={navLinkText}>Static Pages</div></Link>{" "}
          <a className={navLinkItem} href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}><div className={navLinkText}>Log Out</div></a>
            <div className={navLinkItem}>
              <img className={profilePicture} src={user.picture} alt={user.name}/>
            </div>
        </nav>
    </div>
    )
}

export const query = graphql`
query {
  allContentfulTag {
    nodes {
      contentful_id
      name
    }
  }
}
`

export default Leaders