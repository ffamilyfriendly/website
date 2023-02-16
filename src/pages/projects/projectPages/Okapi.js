import { useState } from "react"
import Lang from "../../../components/lang"

const ThreadWatcher = (props) => {

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
                en={ <span> This is the website you are on right now! </span> }
                sv={ <span> Detta är sidan du är på just nu! </span> }
            />
        </p>
    )
}

export default {
    name: "website",
    website: "https://threadwatcher.xyz",
    language: "js",
    element: <ThreadWatcher />,
    description: <ShortDescription />
}