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
        commisions: {
            def: `
                Commisions?
            `,
            swe: `
                Förfrågningar om skapelse av hemsida?
            `
        },
        commisionstext: {
            def: `
                due to me still being in school and not having the greatest confidence I don't "officially" take commisions. However if you for some reason really want me to make something for you shoot me an mail at <a href="mailto:me@familyfriendly.xyz?subject=commission&body=describe what you want here">me@familyfriendly.xyz</a>
            `,
            swe: `
                eftersom jag fortfarande går i skolan och inte har särskilt stort självförtroende så tar jag inte "officielt" emot förfrågningar om websidor osv. Men om du av någon anledning ändå vill att jag ska göra något åt dig så kan du mejla <a href="mailto:me@familyfriendly.xyz?subject=tja&body=skriv vad du vill att jag ska göra här">me@familyfriendly.xyz</a>
            `
        }
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
                    <li><b>Mail </b> <a href="mailto:me@familyfriendly.xyz">me@familyfriendly.xyz</a> <abbr title="Mails sent from this adress will be s/mime signed"><svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg></abbr> <small><b>(PGP-encryption available)</b></small></li>
                    <li><b>Discord </b> <a href="https://www.youtube.com/watch?v=5jnZMW8C6wA">Family friendly#6191</a></li>
                </ul>
            `,
            swe: `
                <ul>
                    <li><b>Mejl </b> <a href="mailto:me@familyfriendly.xyz">me@familyfriendly.xyz</a> <abbr title="Mejl från detta konto är signerade med s/mime"><svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg></abbr> <small><b>(PGP-enkryptering möjlig)</b></small></li>
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