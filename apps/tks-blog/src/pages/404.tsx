import * as React from "react"
import type { PageProps } from "gatsby";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

interface DataProps {
  site: {
    buildTime: string
    siteMetadata: {
      title?: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  return (
    <Layout location={location} title={title}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export function Head() {
  return <Seo title="404: Not Found" />
}

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
