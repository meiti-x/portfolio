import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { PostSidebar } from "../components/PostSidebar";
import config from "../utils/config";
import { Link, graphql } from "gatsby";
import { georgianToPersianDigits, slugify } from "../utils/helpers";
import { useGetTaxonomies } from "../utils/hooks/useGetTaxonomies";

export default function PostTemplate({ data }) {
  const post = data.markdownRemark;
  const { title, date, thumbnail } = post.frontmatter;
  const data2 = useGetTaxonomies();
  const categories = data2.categories.group;
  const tags = data2.tags.group;
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.frontmatter.slug} postNode={post} postSEO />

      <div className="container post-page">
        <div className="grid">
          <div className="article-content">
            <div className="post-header medium width">
              {thumbnail && (
                <div className="mobile-post-image">
                  <Img fixed={thumbnail.childImageSharp?.fixed} />
                </div>
              )}
              <h1>{title}</h1>
              <small>{georgianToPersianDigits(date)}</small>
            </div>
            <section className="segment small">
              <div
                id={post.frontmatter.slug}
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </section>

            <div className="tags">
              {tags.map((tag) => {
                return (
                  <Link
                    key={tag.name}
                    to={`/tags/${slugify(tag.name)}`}
                    className="tag"
                    activeClassName="active"
                  >
                    {tag.name}#
                  </Link>
                );
              })}
            </div>
            {/* <section id="comments" className="segment">
              <div className="card single">
                <h3>Newsletter</h3>
                <p className="text-medium">
                  If you liked this post, sign up to get updates in your email
                  when I write something new! No spam ever.
                </p>
                <a
                  href="https://taniarascia.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button highlighted"
                >
                  Subscribe to the Newsletter
                </a>
              </div>
            </section> */}
          </div>
          {/* 
          <PostSidebar
            date={date}
            tags={tags}
            categories={categories}
            thumbnail={thumbnail}
          /> */}
        </div>
      </div>
    </div>
  );
}

PostTemplate.Layout = Layout;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        slug
        title
        date
        tags
        categories
      }
    }
  }
`;
