import { useEffect, useState } from "react"
import { FaClock, FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Lang from "./lang"
import styles from "./contact.module.css"

const Pill = props => {
    return (
        <div className={styles.pill}>
            <div style={{ "backgroundColor": props.color }} className={styles.icon}>
                {props.icon}
                {props.name}
            </div>
            <a href={props.value}> { props.username || props.value } </a>
        </div>
    )
}

const Contact = (props) => {

    const date = new Date()

    const [ swedenTime, setSwedenTime ] = useState()

    useEffect(() => {
        const formatted = new Intl.DateTimeFormat(window.navigator.language, { timeStyle: "short", timeZone: "Europe/Stockholm" }).format(date)
        setSwedenTime(formatted)
    }, [])

    return (
        <div className={styles.contact}>
            <h1 className="display"><Lang sv="Kontakta mig" en="Contact me" /></h1>
            <div className={styles.infobox}>
                <FaClock />
                <span><Lang en="Time in Sweden:" sv="Tid i Sverige:" /> { swedenTime }</span>
            </div>

            <h2><Lang sv="Snabbast svar" en="fastest response" /></h2>
            <div className="contact-list">
                <Pill icon={ <FaEnvelope /> } name={ <Lang sv="Epost" en="Email" /> } value="mailto:me@familyfriendly.xyz" username="me@familyfriendly.xyz" />
                <Pill color="#5865F2" icon={ <FaDiscord /> } name="Discord" value="https://threadwatcher.xyz/devserver" username="Family friendly#6191" />
            </div>

            <h2><Lang sv="Jag finns även på" en="I'm also on" /></h2>
            <div className="contact-list">
                <Pill color="#0077B5" icon={ <FaLinkedin /> } name="Linkedin" value="https://www.linkedin.com/in/jonathan-hermin/" username="Jonathan Hermin" />
                <Pill color="#4078c0" icon={ <FaGithub /> } name="Github" value="https://github.com/ffamilyfriendly" username="@ffamilyfriendly" />
                <Pill color="#1DA1F2" icon={ <FaTwitter /> } name="Twitter" value="https://twitter.com/jhvartaget" username="@jhvartaget" />
            </div>
        </div>
    )
}

export default Contact