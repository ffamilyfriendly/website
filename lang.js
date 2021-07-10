const birthdate = new Date("2003/05/01")
const datum = new Date()

const lines = {
    languages: [["def","🇬🇧"], ["swe","🇸🇪"]],
    global: {
        about: {
            def: "About",
            swe: "Om"
        },
        contact: {
            def: "Contact",
            swe: "Kontakt"
        },
        projects: {
            def: "Projects",
            swe: "Projekt"
        }
    },
    index: {
        title: {
            def: "Home / FamilyFriendly",
            swe: "Hem / FamilyFriendly"
        }
    },
    about: {
        title: {
            def: "About / FamilyFriendly",
            swe:" Om / Family Friendly"
        },
        whoami: {
            def: "Who am I?",
            swe: "Vem är jag?"
        },
        whoamitext: {
            def: `
                My name is Jonathan and I have existed for <b>${datum.getFullYear() - birthdate.getFullYear()} years!</b> I normally spend my days by hanging with friends, working, or tinkering with some code. 
                There aint much interesting to say about myself to be frank. This list should suffice what is left to say.

                <ul>
                    <li>I have a very cool garage 😎</li>
                    <li>I drink too much coffee</li>
                    <li>I am 195cm or for the yanks about 27.91 big macs tall</li>
                    <li>I can legaly drive a forklift</li>
                    <li>I think you should listen to <a href="https://open.spotify.com/artist/73U1Zb71I5JwgC1qVqZ8NO">mischeif brew</a></li>
                </ul>
                `,
            swe: `
                Jag heter Jonathan och jag har existerat i <b>${datum.getFullYear() - birthdate.getFullYear()} år!</b> Jag brukar normalt sätt spendera mina dagar med att hänga med vänner, jobba, eller programmera.
                Om jag ska vara uppriktig så finns det inte särskilt mycket interesant att säga om mig. Denna lista borde räcka med vad som finns kvar att säga

                <ul>
                    <li>Jag har ett väldigt coolt garage 😎</li>
                    <li>Jag dricker för mycket kaffe</li>
                    <li>Jag är 195cm lång</li>
                    <li>Jag får lagligt köra gaffeltruck</li>
                    <li>Jag tycker du borde lyssna på <a href="https://open.spotify.com/artist/73U1Zb71I5JwgC1qVqZ8NO">mischeif brew</a></li>
                </ul>

                `
        },
        whatiknow: {
            def: "What are my skills?",
            swe: "Vad är mina kunskaper?"
        },
        whatiknowtext: {
            def: `
                I would describe myself as a jack of all trades when it comes to web development, I know a little about quite a lot. To see some examples simply go to <a href="./projects.html">my projects</a>
                `,
            swe: `
                Jag skulle beskriva mig själv som en "jack of all trades" när det gäller webbutveckling, jag vet lite om ganska mycket. Det är bara att gå till <a href="./projects.html">mina projekt</a> för att se exempel 
                `
        },
    },
    contact: {
        title: {
            def: "Contact / FamilyFriendly",
            swe: "Kontakt / FamilyFriendly"
        },
        priocontact: {
            def: "These are read most frequently",
            swe: "Dessa läser jag oftare"
        },
        priocontacts: {
            def: `
                <ul>
                    <li><b>Mail </b> <a href="mailto:me@familyfriendly.xyz">me@familyfriendly.xyz</a></li>
                    <li><b>Discord </b> <a href="mailto:me@familyfriendly.xyz">Family friendly#6191</a></li>
                </ul>
            `,
            swe: `
                <ul>
                    <li><b>Mejl </b> <a href="mailto:me@familyfriendly.xyz">me@familyfriendly.xyz</a></li>
                    <li><b>Discord </b> <a href="https://www.youtube.com/watch?v=5jnZMW8C6wA">Family friendly#6191</a></li>
                </ul>
            `
        },
        nonpriocontact: {
            def: "I also use these",
            swe: "Jag använder även dessa"
        }
    },
    projects: {
        proj: {
            def: "Project",
            swe: "Projekt"
        }
    }
}

let page = null
let locale

const getLocale = () => {
    return localStorage.getItem("locale") || "def"
}

const setLocale = (l) => {
    locale = l
    localStorage.setItem("locale",l)
    renderLanguage()
}

const onLocaleChange = (ev) => {
    setLocale(ev.target.value)
}

const initLocaleBtn = () => {
    const btn = document.createElement("div")
    btn.innerHTML = `
        <div id="localeSelector">
            <select onchange="onLocaleChange(event)" id="localeSelect">
                ${lines.languages.map(lang => {
                    return `<option value="${lang[0]}" ${locale == lang[0] ? "selected" : ""}>${lang[1]}</option>`
                }).join("")}
            </select>
        </div>
    `
    const style = document.createElement("link")
    style.href = "./lang.css"
    style.rel = "stylesheet"
    document.head.append(style)
    document.body.append(btn)
}

const renderLanguage = () => {
    document.querySelectorAll("*[data-lang]").forEach(el => {
        let d = el.getAttribute("data-lang")
        let p = d.startsWith("g-") ? "global" : page
        if(p == "global") d = d.substr(2)
        if(!lines[p] || !lines[p][d]) return
        if(lines[p][d]["def"] && !lines[p][d][locale]) return el.innerHTML = lines[p][d]["def"]
        el.innerHTML = lines[p][d][locale]
    })
}

document.addEventListener("DOMContentLoaded", () => {
    locale = getLocale()
    page = document.body.getAttribute("data-page")||"index"
    initLocaleBtn()
    renderLanguage()
})