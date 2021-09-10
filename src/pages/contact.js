import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import {
  smallPrint
} from './contact.module.css'

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
        <div className={smallPrint}>
          <p>1st Twyford Scout Group is a charity registered with the Charity Commission. For further information, please follow the link below</p>
          <p><a href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/269687">https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/269687</a></p>
        </div>
    </Layout>
  )
}
export default ContactPage