import Lang from "../../components/lang";
import RelativeTime from "../../components/relativeTime";

const age = () => Math.abs( (new Date( Date.now() - (new Date("2003-05-01")) ).getUTCFullYear() - 1970 ) )

export default function About() {
    return (
        <div className="about-page">
            <h1 className="display"><Lang sv="Hej!" en="Hello!" /></h1>
            <Lang
                sv={
                    <p>
                        Mitt namn är Jonathan och jag är { age() } år.
                    </p>
                }
                en={
                    <p>
                        My name is Jonathan and I am { age() } years old.
                    </p>
                }
            />
        </div>
    )
}