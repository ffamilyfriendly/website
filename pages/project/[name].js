import { useRouter } from "next/dist/client/router"
import Button from "../../components/button"
import Link from "next/link"
import { projectsList, LangIcon } from "../../components/projects/projects"
import { useState, useEffect } from "react"
import styles from "../../components/projects/projects.module.css"
import { FaArrowLeft, FaCompass, FaGithub } from "react-icons/fa"
import Lang from "../../components/lang"
import { GithubStats } from "../../components/github"
import Giscus from "@giscus/react"
import Head from "next/head"
import SEO from "../../components/seo"

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

export async function getServerSideProps(context) {
    const { name } = context.params
    return { props: { name } }
}

export function Project(props) {

    const router = useRouter()
    const { name } = router.query
    if(!name) return null

    if(!projectsList[name]) {
        return (
            <div>
                <h1>404 - not found</h1>
                <Button href="/">back</Button>
            </div>
        )
    }
    const { language, github, about, example, website, textDescription, tags } = projectsList[name]

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if(!window) return
        const onScroll = () => setOffset(window.scrollY)
        window.removeEventListener("scroll", onScroll)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [name])

    return (
        <div className={styles.project_page}>

            <SEO title={name} description={textDescription} tags={tags} />

            <div className={styles.project_header + " " + ( offset > 20 ? styles.scroll : "" )}>
                <Link className={styles.back_button} href="/#projects"> <FaArrowLeft /> <Lang sv="Tillbaka" en="Back" /> </Link>
            </div>
            <div className={styles.title_big}>
                <LangIcon language={ language } />
                <div>
                    <h1 className="display"> { name } </h1>
                    { github ? <GithubStats url={ github } /> : null}
                </div>
            </div>

            <div className={styles.buttons}>
                { website ? <Button href={ website }>  <FaCompass /> <Lang sv="Hemsida" en="Website" /> </Button> : null }
                { github ? <Button href={ github }>  <FaGithub /> GitHub </Button> : null }
            </div>

            <section className={styles.about}>
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

const Wrapper = props => {
    return (
        <div className="container">
            <Project />
        </div>
    )
}

export default Wrapper