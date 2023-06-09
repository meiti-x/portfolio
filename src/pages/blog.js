import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { SidebarLayout } from '../components/SidebarLayout'
import config from '../utils/config'
import { graphql } from 'gatsby'
import { getSimplifiedPosts } from '../utils/helpers'

export default function Blog({ data }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const title = 'بلاگ'
  const description = 'یادداشت ها و آموزش‌ها'

  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <SidebarLayout>
        <header className="hero">
          <h1>{title}</h1>
        </header>
        <Posts data={simplifiedPosts} showYears />
      </SidebarLayout>
    </div>
  )
}

Blog.Layout = Layout

export const blogQuery = graphql`
query MyQuery {
  posts: allMarkdownRemark(limit: 10, sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        id
        frontmatter {
          categories
          slug
          shortTitle
          title
          date
        }
      }
    }
  }
}`
