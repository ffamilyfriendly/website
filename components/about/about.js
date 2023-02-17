import Lang from "../lang";
import RelativeTime from "../relativeTime";

const age = () => Math.abs( (new Date( Date.now() - (new Date("2003-05-01")) ).getUTCFullYear() - 1970 ) )
const startedProgramming = new Date("2018-10-30")

export default function About() {
    return (
        <div className="about-page">
            <h1 className="display"><Lang sv="Hej!" en="Hello!" /></h1>
            <Lang
                sv={
                    <p>
                        Mitt namn är Jonathan och jag är { age() } år. Jag började programmera { <RelativeTime time={startedProgramming} /> }
                        och har sedan dess lärt mig göra lite allt möjligt.
                        <br/><br/>
                          
                    </p>
                }
                en={
                    <p>
                        My name is Jonathan and I am { age() } years old. I started programming { <RelativeTime time={startedProgramming} /> }
                        and has since then learned to make many different things.
                        <br/><br/>

                    </p>
                }
            />
        </div>
    )
}