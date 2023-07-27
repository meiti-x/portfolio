import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { ExternalLinkIcon } from '../assets/ExternalLinkIcon'
import { StarIcon } from '../assets/StarIcon'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const title = 'پروژه‌ها'


  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <Hero title={title} color="red" />
      </div>

      <section className="segment">
        <div className="container">
          <div className="project-preview">
            {projectsList.map((project) => {
              return (
                <div className="card anchored large" key={project.slug}>
                  <div className="stars">
                    {/*{repos.find((repo) => repo.name === project.slug) && (
                      <div className="star">
                        <a
                          href={`https://github.com/meiti-x/${project.slug}/stargazers`}
                        >
                          {Number(
                            repos.find((repo) => repo.name === project.slug)
                              .stargazers_count
                          ).toLocaleString()}
                        </a>
                        <StarIcon />
                      </div>
                    )}*/}
                  </div>
                  <div>
                    <time>{project.date}</time>
                    <a
                      className="card-header"
                      href={`https://github.com/meiti-x/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="links anchored">
                    {project.writeup && (
                      <Link className="button small" to={project.writeup}>
                        مقاله
                      </Link>
                    )}
                    {project.url && (
                      <a
                        className="button small flex"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        دمو <ExternalLinkIcon />
                      </a>
                    )}
                    <a
                      className="button small flex"
                      href={`https://github.com/meiti-x/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      سورس کد <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

Projects.Layout = Layout
