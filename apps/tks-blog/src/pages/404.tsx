import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: {
      title?: string
    }
  }
}

const NotFoundPage:React.FC<PageProps<DataProps>> = ({ data:{site:{siteMetadata:{title}}}, location }) => {
  
  return (
    <Layout location={location} title={title}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
