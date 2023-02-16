import ThreadWatcher from "./projectPages/ThreadWatcher";
import { SiJavascript, SiTypescript, SiRust } from "react-icons/si"
import { FaExpand } from "react-icons/fa"
import "./projects.css"
import { Link, useParams } from "react-router-dom";
import Okapi from "./projectPages/Okapi";
import Lang from "../../components/lang";
import { GithubStats } from "../../components/github";

const projectsList = {
    "Thread-Watcher": ThreadWatcher,
    "website": Okapi
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

    console.log(project)
    return (
        <div className="project-listing">
            <h2 className="display project-name"> <ProjectTitle project={project} /> </h2>
            { typeof project.description === "string" ? <p>{project.description}</p> : project.description }
            

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
    return (
        <script src="https://giscus.app/client.js"
        data-repo="ffamilyfriendly/website"
        data-repo-id="MDEwOlJlcG9zaXRvcnkzODQ3MzM5ODg="
        data-category="Announcements"
        data-category-id="DIC_kwDOFu6TJM4CUQnS"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async>
        </script>
    )
}

export function Project(props) {
    const { name } = useParams()
    const { language, github, about, example } = projectsList[name]


    return (
        <div className="project-page">
            <div className="project-title-big">
                <LangIcon language={ language } />
                <div>
                    <h1 className="display"> { name } </h1>
                    { github ? <GithubStats url={ github } /> : null}
                </div>
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

            <Comments />
        </div>
    )
}