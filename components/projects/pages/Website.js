import Lang from "../../lang"

const Website = (props) => {
    return (
        <div>
            <Lang
                sv={
                <p>
                    <i>Alla behöver en hemsida. Detta är min!</i>
                    <br/><br/>
                    Hemsidan är skapad med <a href="https://reactjs.org/">react</a> och JavaScript.
                </p>
                }

                en={
                <p>
                    <i>Everyone needs a website. This is mine!</i>
                    <br/><br/>
                    The website is created with <a href="https://reactjs.org/">react</a> and JavaScript.
                </p>
                }
            
            />
        </div>
    )
}

const ShortDescription = () => {

    return (
        <p>
            <Lang
                en={ <span> This is the website you are on right now! </span> }
                sv={ <span> Detta är sidan du är på just nu! </span> }
            />
        </p>
    )
}

const project = {
    name: "Website",
    language: "js",
    github: "https://github.com/ffamilyfriendly/website",
    about: <Website />,
    description: <ShortDescription />,
    tags: [ "react", "next.js", "js", "SSR", "react.js", "javascript" ]
}

export default project