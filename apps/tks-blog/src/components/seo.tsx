/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import type { ReactNode } from "react";
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps { description?: string; title: string; children?: ReactNode }

function Seo({ description, title, children }: SeoProps) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta content={metaDescription} name="description" />
      <meta content={title} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta
        content={site.siteMetadata?.social?.twitter || ``}
        name="twitter:creator"
      />
      <meta content={title} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      {children}
    </>
  )
}

export default Seo
