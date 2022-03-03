String.prototype.span = function() {
    let span = document.createElement("span")
    span.innerText = this
    return span
}

String.prototype.bold = function() {
    let span = document.createElement("b")
    span.innerText = this
    return span
}

document.addEventListener("DOMContentLoaded", () => {
    const c = document.getElementById("conversions")
    document.getElementById("from").onkeydown = (ev) => {
        if(ev.ctrlKey || ev.metaKey || ev.altKey) return
        let conversions = doConversions(ev.target.value + ev.key)
        c.innerHTML = ""
        for(let conversion of conversions) {
            let li = document.createElement("li"),
            [ from, to] = [ document.createElement("span"), document.createElement("span")]
            from.append(" from ".bold(), conversion.from.span())
            to.append(" to ".bold(), conversion.to.span())
            li.append(from, to)
            c.appendChild(li)
        }
    }
})