import { useEffect, useState } from "react"

const RelativeTime = (props) => {
    const { time } = props
    
    const pushDate = new Date(time)
    const delta = pushDate - (new Date())

    const diff = [
        ["years", (delta / 1000 / 60 / 60 / 24 / 365)],
        ["months", (delta / 1000 / 60 / 60 / 24 / 30.437)],
        ["weeks", (delta / 1000 / 60 / 60 / 24 / 7)],
        ["days", (delta / 1000 / 60 / 60 / 24)],
        ["hours", (delta / 1000 / 60 / 60)],
        ["minutes", (delta / 1000 / 60)],
        ["seconds", (delta / 1000)]
    ].find(e => Math.floor(Math.abs(e[1])) !== 0)

    const [ rtf, setRtf ] = useState()

    useEffect(() => {
        const _rtf = new Intl.RelativeTimeFormat(window.navigator.language, { style: props.style || "short" })
        setRtf(_rtf)
    }, [ ])

    return (
        <span title={ pushDate.toDateString() } > { rtf ? rtf.format(diff[1].toFixed(1), diff[0]) : null } </span>
    )
}

export default RelativeTime