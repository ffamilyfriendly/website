import { useState } from "react"
import { GoClock, GoRepoForked, GoStar } from "react-icons/go"
import styles from "./github.module.css"
import Lang from "./lang"
import RelativeTime from "./relativeTime"

const getRepoData = (url) => {
    const [ username, repo ] = url.split("/").splice(3,2)
    const apiPath = `https://api.github.com/repos/${username}/${repo}`

    return new Promise((resolve, reject) => {
        if( !username || !repo ) return reject("invalid github url")

        fetch(apiPath, { cache: "force-cache" })
            .then(r => {
                r.json()
                    .then((data) => {
                        if(data.message) return reject(data.message)
                        resolve(data)
                    })
                    .catch(reject)
            })
            .catch(reject)
    })
}

export function GithubStats(props) {
    const { url } = props
    const [ stats, setStats ] = useState()
    const [ error, setError ] = useState(false)

    const populateStats = () => {
        getRepoData(url)
            .then(d => setStats(d))
            .catch(() => setError(true))
    }

    if(!stats && !error) populateStats()
    if(!stats) return ( <div className="gh-stats"></div> )

    return (
        <div className={styles.gh_stats}>
            <p> <GoStar title={ <Lang sv="Github stjärnor" en="GitHub stars" /> } color="gold" /> { stats.stargazers_count || 0 } </p>
            <p> <GoRepoForked title={ <Lang en="GitHub forks" /> } /> { stats.forks_count } </p>
            <p> <GoClock title={ <Lang sv="Senaste uppdateringen" en="Last push" /> } /> <RelativeTime time={ stats.pushed_at } /> </p>
        </div>
    )
}