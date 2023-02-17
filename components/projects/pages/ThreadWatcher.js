import { useState } from "react"
import Lang from "../../lang"
import RelativeTime from "../../relativeTime"

const ThreadWatcher = (props) => {

    const date = <RelativeTime style="long" time="2021-08-10" />
    const ThreadLink = (props) => {
        return ( <a href="https://discord.com/blog/connect-the-conversation-with-threads-on-discord">{props.t}</a> )
    }

    return (
        <div>
            <Lang
            sv={
                <p>
                    Thread-Watcher är en discord bot jag skapade {date} när chattplattformen discord lanserade <ThreadLink t="trådar" />.
                    <br/><br/>
                    Ett problem var dock att trådarna automatiskt blev gömda efter några dagar. Jag har erfarenhet med discords API och började arbeta på en prototyp
                    som lät användare hålla sina trådar öppna i all oändlighet.
                    <br/><br/>
                    Det visade sig snabbt att jag inte var den ända med detta problem. Efter bara några dagar började min prototyp aggregera användare och är idag med i över 4000 servrar.
                    <br/><br/>
                    Botten är skriven i programeringsspråket { <a href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a>} och är helt gratis att använda. Det går även att göra sin egen bot med samma kod då källkoden är publicerad på github
                </p>
            }

            en={
                <p>
                    Thread-Watcher is a discord bot i created {date} when the chat platform discord announced <ThreadLink t="threads" />.
                    <br/><br/>
                    One problem was that the threads automatically got hidden after a few days of inactivity. I have experience with the discord API and started working on a prototype
                    that let users keep their threads open indefinently
                    <br/><br/>
                    It became quite apperent that I was not the only one with this issue. After only a few days my protype started aggregating users and is at the time of writing in over 4000 servers.
                    <br/><br/>
                    The bot is written in the { <a href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a>} programing language and is completely free to use. It is also possible for users to host their own Thread-Watcher bot as the source code is published on github  
                </p>
                }

            />
        </div>
    )
}

const ShortDescription = () => {

    const [ failed, setFailed ] = useState(false)
    const [ data, setData ] = useState()

    const getData = async () => {
        fetch("https://threadwatcher.xyz/api/stats")
            .then(r => {
                r.json()
                    .then(data => {
                        setData(data)
                    })
                    .catch(() => setFailed(true))
            })
            .catch(() => setFailed(true))
    }

    if(!data && !failed) getData()

    const DsLink = () => {
        return (
            <a href="https://discord.gg"> Discord </a>
        )
    }

    const Guilds = () => {
        return (
            <span>{ data ? data.guildCount : "4000+" }</span>
        )
    }

    return (
        <p>
            <Lang
                en={ <span> Thread-Watcher is a <DsLink /> bot used by <Guilds /> servers </span> }
                sv={ <span> Thread-Watcher är en <DsLink /> bot som används av <Guilds /> servrar </span> }
            />
        </p>
    )
}

const project = {
    name: "Thread-Watcher",
    github: "https://github.com/ffamilyfriendly/Thread-Watcher/",
    website: "https://threadwatcher.xyz",
    language: "ts",
    about: <ThreadWatcher />,
    example: null,
    description: <ShortDescription />,
    textDescription: "Thread-Watcher is a popular discord bot designed to keep Threads open",
    tags: [ "discord", "ts", "bot", "discord bot", "utility", "top.gg", "auto thread", "auto-thread", "forum" ]
}

export default project