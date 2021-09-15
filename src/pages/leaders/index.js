import * as React from 'react'
import Layout from '../../components/layout'
import { AuthService, useAuth } from 'gatsby-theme-auth0'

const LeadersPage = () => {
const { isLoggedIn,isLoading, profile } = useAuth()
console.log('isLoading: ' + isLoading)
console.log('isLoggedIn: ' + isLoggedIn)
console.log('profile: ' + JSON.stringify(profile))
return (
    <Layout>
      <h1>Leader Page</h1>
      {
          profile && <p>Hello {profile.name}</p>
        }
        {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
    </Layout>
  )
}

export default LeadersPage
