import { useEffect, useState } from "react"

const Lang = props => {
    const [lang, setLang] = useState("en")

    useEffect(() => {
        setLang(window.navigator.language)
    }, [ ])
    let elem = props[lang] ? props[lang] : (props["en"] ? props["en"] : <p>no lang string</p>)
    if(typeof elem === "string") elem = <span>{elem}</span>
    return elem
}

export default Lang