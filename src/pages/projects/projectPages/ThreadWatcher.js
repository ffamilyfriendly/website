import { useState } from "react"
import Lang from "../../../components/lang"

const ThreadWatcher = (props) => {
    return (
        <div>
            Thread-Watcher is a cool bot
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

export default {
    name: "Thread-Watcher",
    github: "https://github.com/ffamilyfriendly/Thread-Watcher/",
    website: "https://threadwatcher.xyz",
    language: "ts",
    about: <ThreadWatcher />,
    example: null,
    description: <ShortDescription />
}