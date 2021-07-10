let config = VS.getDefaultConfig()
config.onready = () => {
    viewMovie((res) => {
        if(!res) return
        const pb = document.getElementById("prog-inner")
        pb.style.width = "100%"
        pb.classList = "done"
    })
}
const fileManager = new VS(config)

fileManager.onprogress = (ev) => {
    const pd = Math.round(fileManager.c.loaded / fileManager.c.total * 100)
    document.getElementById("prog-inner").style.width = `${pd}%`
}

const saveVid = () => {
    fileManager.save("example", "./example.mp4", () => {
        document.getElementById("prog-inner").classList = "done"
        viewMovie()
    })
}

const viewMovie = (cb) => {
    fileManager.get("example")
    .then(f => f.getUrl().then(u => {
        if(cb) cb(true)
        document.getElementsByTagName("video")[0].innerHTML = `
            <source src="${u.url}">
        `
    }))
    .catch(e => {
        if(cb) cb(false)
        alert("No video found. Click \"download\" to download it first")
    })
}

const deleteVid = () => {
    const pb = document.getElementById("prog-inner")
    pb.style.width = "0"
    pb.classList = ""
    fileManager.delete("example")
}

