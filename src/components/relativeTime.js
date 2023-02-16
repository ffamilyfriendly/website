export default function(props) {
    const { time } = props
    
    const pushDate = new Date(time)
    const delta = pushDate - (new Date())

    const diff = [
        ["years", (delta / 1000 / 60 / 60 / 24 / 365)],
        ["months", (delta / 1000 / 60 / 60 / 24 / 30.437)],
        ["weeks", (delta / 1000 / 60 / 60 / 24 / 7)],
        ["days", (delta / 1000 / 60 / 60 / 24)],
        ["hours", (delta / 1000 / 60 / 60)]
    ].find(e => Math.floor(Math.abs(e[1])) !== 0)

    const rtf = new Intl.RelativeTimeFormat(window.navigator.language, { style: props.style || "short" })

    return (
        <span title={ pushDate.toDateString() } > { rtf.format(diff[1].toFixed(1), diff[0]) } </span>
    )
}