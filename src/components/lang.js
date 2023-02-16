export default function(props) {
    const lang = window.navigator.language
    let elem = props[lang] ? props[lang] : (props["en"] ? props["en"] : <p>no lang string</p>)
    if(typeof elem === "string") elem = <span>{elem}</span>
    return elem
}