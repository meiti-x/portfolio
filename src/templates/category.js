import React, { useMemo } from "react";
import Helmet from "react-helmet";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Posts } from "../components/Posts";
import { Hero } from "../components/Hero";
import { SidebarLayout } from "../components/SidebarLayout";
import { georgianToPersianDigits, getSimplifiedPosts } from "../utils/helpers";
import config from "../utils/config";
import { graphql } from "gatsby";

export default function CategoryTemplate({ data, pageContext }) {
  let { category } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);
  const message =
    totalCount === 1
      ? "  پست دسته بندی شده در دسته:"
      : " پست های دسته بندی شده در دسته :";

  return (
    <div>
      <Helmet title={`${category} | ${config.siteTitle}`} />
      <SEO />

      <SidebarLayout>
        <Hero
          highlight={georgianToPersianDigits(totalCount)}
          subTitle={message}
          title={category}
        />
        <Posts data={simplifiedPosts} showYears />
      </SidebarLayout>
    </div>
  );
}

CategoryTemplate.Layout = Layout;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            title
            shortTitle
            date
            tags
            categories
          }
        }
      }
    }
  }
`;
