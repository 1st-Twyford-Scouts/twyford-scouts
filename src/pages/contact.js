import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
const ContactPage = () => {
    const contacts = useStaticQuery(graphql`
    query {
        allContentfulContact {
          group(field: category) {
            nodes {
              email
              name
              phone
            }
            fieldValue
          }
        }
      }`)
  return (
    <Layout pageTitle="Contact Us">
        {
            contacts.allContentfulContact.group.map(group =>(
                <div>
                <h2>{group.fieldValue}</h2>
                <ul>
                {
                    group.nodes.map(node => (
                        <li key = {node.name}>
                            {node.name} - <a href={"mailto:" + node.email}>{node.email}</a> {node.phone}
                        </li>
                    ))
                }
                </ul>                
                </div>                
            ))
        }
    </Layout>
  )
}
export default ContactPage