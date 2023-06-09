import React from "react";
import Helmet from "react-helmet";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import config from "../utils/config";
import { graphql } from "gatsby";

export default function PageTemplate(data) {
  console.log(data);
  const post = data.markdownRemark;

  const { title, description, slug } = post.frontmatter;

  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>{title}</h1>
            </div>
            <section className="segment small">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageTemplate.Layout = Layout;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;
