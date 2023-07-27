import React from 'react'

// import netlify from '../../content/thumbnails/netlify.png'
import github from '../assets/nav-github.png'

const links = [
    {url: 'https://taniarascia.substack.com', label: 'Newsletter'},
    {url: 'https://ko-fi.com/taniarascia', label: 'Ko-Fi'},
    {url: 'https://patreon.com/taniarascia', label: 'Patreon'},
    {url: 'https://www.taniarascia.com/rss.xml', label: 'RSS'},
]
const madeWithLinks = [
    {url: 'https://github.com/meiti-x', label: 'GitHub', icon: github},
]

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                {/*                <nav>
                    {links.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>*/}
                <nav>
                    {madeWithLinks.map((link) => (
                        <a
                            href={link.url}
                            title={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                        >
                            <span>{link.label}</span>
                            <img src={link.icon} alt={link.label}/>
                        </a>
                    ))}
                </nav>

                <nav>
                    <div className="powerdby">
                        قدرت گرفته از Gatsby و
                        ساخته شده با این <a href='https://github.com/taniarascia/taniarascia.com'>قالب</a>
                    </div>
                </nav>
            </section>
        </footer>
    )
}
