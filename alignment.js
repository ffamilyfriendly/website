const calcWidth = () => {
    const title = document.getElementById("title")
    const content = document.getElementById("content")
    if(!title || !content) return

    content.style.width = `${title.clientWidth}px`
}

document.addEventListener("DOMContentLoaded", calcWidth)
window.onresize = calcWidth