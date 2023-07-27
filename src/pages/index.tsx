import React, {useMemo} from "react";
import {graphql, Link} from "gatsby";
import Helmet from "react-helmet";
import {Layout} from "../components/Layout";
import {Posts} from "../components/Posts";
import {SEO} from "../components/SEO";
import {Heading} from "../components/Heading";
import {Hero} from "../components/Hero";
import {projectsList} from "../data/projectsList";
import {getSimplifiedPosts} from "../utils/helpers";
import config from "../utils/config";
import Img from 'gatsby-image'

export default function Index({data}) {
    const latest = data.latestBlog.edges;
    const highlights = data.simplifiedHighlights.edges;
    const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest]);
    const simplifiedHighlights = useMemo(
        () =>
            getSimplifiedPosts(highlights, {shortTitle: true, thumbnails: true}),
        [highlights]
    );
    return (
        <div>
            <Helmet title={config.siteTitle}/>
            <SEO/>

            <div className="container">
                <div className="hero-wrapper">
                    <Hero title="سلام، من مهدی‌ام" index>
                        <p className="hero-description small width">
                            
                            <br/>
                            <br/>
                            من توسعه دهنده نرم افزار هستم.من{" "}
                            <Link to="/projects">پروژه های اوپن سورس </Link> میسازم
                            و در مورد مهندسی
                            نرم افزار تجربه میکنم و میخونم و
                            <Link to="/blog">
                                {' '}اینجا{' '}
                            </Link>
                             در موردشون مینویسم🌱
                        </p>
                    </Hero>
                    <div className="decoration">
                        <img
                            src={`${config.assetsBasePath}/astro.png`}
                            alt="RAM Ram"
                            className="image hero-image"
                            title="RAM Ram"
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <section className="segment first">
                    <Heading title="آخرین پست‌ها" slug="/blog"/>

                    <Posts data={simplifiedLatest} newspaper/>
                </section>

                {/*<section className="segment large">
                    <Heading title="پرطرفدارها"/>

                    <div className="highlight-preview">
                        {simplifiedHighlights.map((post) => {
                            return (
                                <div className="muted card flex" key={`popular-${post.slug}`}>
                                    {post.thumbnail && <Img fixed={post.thumbnail}/>}
                                    <div>
                                        <time>{post.date}</time>
                                        <Link className="card-header" to={post.slug}>
                                            {post.title}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>*/}

                <section className="segment large">
                    <Heading title="پروژه‌ها" slug="/projects"/>

                    <div className="post-preview">
                        {projectsList
                            .filter((project) => project.highlight)
                            .map((project) => {
                                return (
                                    <div className="anchored card" key={project.slug}>
                                        <div>
                                            <time>{project.date}</time>
                                            <a
                                                className="card-header"
                                                href={`https://github.com/taniarascia/${project.slug}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {project.name}
                                            </a>
                                            <p>{project.tagline}</p>
                                        </div>
                                        <div className="anchored links">
                                            {project.writeup && (
                                                <Link className="button" to={project.writeup}>
                                                    Article
                                                </Link>
                                            )}
                                            <a className="button flex" href={project.url}>
                                                Demo
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </section>

                {/* <section className="segment large">
          <Heading title="Newsletter" />
          <p>
            Sign up to get updates when I write something new. No spam ever.
          </p>
          <p>
            <a
              href="https://taniarascia.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button large highlighted"
            >
              Subscribe to the Newsletter
            </a>
          </p>
        </section> */}
            </div>
        </div>
    );
}

Index.Layout = Layout;

export const blogQuery = graphql`
  query MyQuery {
    latestBlog: allMarkdownRemark(
      limit: 10
      sort: { frontmatter: { date: DESC } }
    ) {
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
    
      simplifiedHighlights: allMarkdownRemark(
    limit: 10
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        id
        frontmatter {
          categories
          slug
          shortTitle
          title
          date
          thumbnail {
            childImageSharp {
              fixed {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
    }
`;
