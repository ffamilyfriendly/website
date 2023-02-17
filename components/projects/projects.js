import { SiJavascript, SiTypescript, SiRust, SiPython } from "react-icons/si"
import { FaExpand } from "react-icons/fa"
import Lang from "../lang";
import Link from "next/link"

import styles from "./projects.module.css"

// Projects
import ThreadWatcher from "./pages/ThreadWatcher";
import Website from "./pages/Website";
import RPICamera from "./pages/RPI-camera";

export const projectsList = {
    "Thread-Watcher": ThreadWatcher,
    "Website": Website,
    "RPI-camera": RPICamera
}

export const LangIcon = (props) => {
    const languageIcons = {
        "ts": <SiTypescript className={styles.svg} color="#3178C6" />,
        "rs": <SiRust className={styles.svg} color="darkorange" />,
        "js": <SiJavascript className={styles.svg} color="#f0db4f" />,
        "py": <SiPython className={styles.svg} color="#ffd43b" />
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
        <div className={styles.listing}>
            <h2 className={ styles.name + " display" }> <ProjectTitle project={project} /> </h2>
            { typeof project.description === "string" ? <p>{project.description}</p> : project.description }
            { project.tags ?
                <div className={styles.tags}> { project.tags.slice(0,3).map(t => <p key={t} className={styles.tag}>{t}</p>) } </div>
                :
                null
            }
            <Link className={styles.expand} href={ `/project/${project.name}` } ><FaExpand /></Link>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <h1 className="display"><Lang sv="Projekt" en="Projects" /></h1>
            <div className={styles.project_list}>
                { Object.values(projectsList).map( p => <ProjectListing key={p.name} project={p} /> ) }
            </div>
        </div>
    )
}