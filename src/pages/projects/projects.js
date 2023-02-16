import ThreadWatcher from "./projectPages/ThreadWatcher";
import { SiJavascript, SiTypescript, SiRust } from "react-icons/si"
import { FaArrowLeft, FaCompass, FaExpand, FaGithub } from "react-icons/fa"
import "./projects.css"
import { Link, useParams } from "react-router-dom";
import Website from "./projectPages/Website";
import Lang from "../../components/lang";
import { GithubStats } from "../../components/github";
import Button from "../../components/button";
import Giscus from "@giscus/react"
import { useEffect, useState } from "react";

const projectsList = {
    "Thread-Watcher": ThreadWatcher,
    "Website": Website
}

const LangIcon = (props) => {
    const languageIcons = {
        "ts": <SiTypescript color="#3178C6" />,
        "rs": <SiRust color="darkorange" />,
        "js": <SiJavascript color="#f0db4f" />
    }
    const { language } = props

    return ( languageIcons[language] )
}

const ProjectTitle = (props) => {
    const { project } = props
    return (
        <span>{ <LangIcon language={ project.language } /> } { project.name }</span>
    )
}

const ProjectListing = (props) => {
    const { project } = props

    return (
        <div className="project-listing">
            <h2 className="display project-name"> <ProjectTitle project={project} /> </h2>
            { typeof project.description === "string" ? <p>{project.description}</p> : project.description }
            { project.tags ?
                <div className="project-tags"> { project.tags.map(t => <p key={t} className="tag">{t}</p>) } </div>
                :
                null
            }
            <Link className="project-expand" to={ `/project/${project.name}` } ><FaExpand /></Link>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <h1 className="display"><Lang sv="Projekt" en="Projects" /></h1>
            <div className="project-list">
                { Object.values(projectsList).map( p => <ProjectListing key={p.name} project={p} /> ) }
            </div>
        </div>
    )
}

const Comments = () => {
    return(
        <Giscus
            repo="ffamilyfriendly/website"
            repoId="MDEwOlJlcG9zaXRvcnkzODQ3MzM5ODg="
            category="Announcements"
            categoryId="DIC_kwDOFu6TJM4CUQnS"
            mapping="pathname"
            reactionsEnabled="0"
            emitMetadata="0"
            theme="preferred_color_scheme"
        />
    )
}

export function Project(props) {
    const { name } = useParams()
    const { language, github, about, example, website } = projectsList[name]

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.document.title = name
        const onScroll = () => setOffset(window.scrollY)
        window.removeEventListener("scroll", onScroll)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="project-page">
            <div className={"project-header" + ( offset > 20 ? " scroll" : "" )}>
                <Link to="/#projects"> <FaArrowLeft /> <Lang sv="Tillbaka" en="Back" /> </Link>
            </div>
            <div className="project-title-big">
                <LangIcon language={ language } />
                <div>
                    <h1 className="display"> { name } </h1>
                    { github ? <GithubStats url={ github } /> : null}
                </div>
            </div>

            <div className="project-buttons">
                { website ? <Button href="https://threadwatcher.xyz">  <FaCompass /> <Lang sv="Hemsida" en="Website" /> </Button> : null }
                { github ? <Button href="https://threadwatcher.xyz/github">  <FaGithub /> GitHub </Button> : null }
            </div>

            <section className="project-about">
                <h2 className="display"><Lang sv="Om" en="About" /></h2>
                { about }
            </section>

            {
                example ?
                <section className="project-example">
                    <h2 className="display"> <Lang sv="Exempel" en="Example" /> </h2>
                    { example }
                </section> 
                :
                null
            }

            <section className="project-comments">
                <h2 className="display"> <Lang sv="Kommentarer" en="Comments" /> </h2>
                <Comments />
            </section>
        </div>
    )
}