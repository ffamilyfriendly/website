import Lang from "../../lang"

const Website = (props) => {
    return (
        <div>
            <Lang
                sv={
                <p>
                    Jag anklagade syrran för att sno alkoholen jag hade i mitt garage men kunde inte bevisa detta.
                    Därför gjorde jag ett skript som mäter det genomsnittliga RGB-värdet på en vald yta i bilden och sparar bilden om värdet ändras för mycket.
                    <br/><br/>
                    Lyckades jag fånga bilder på när syrran snor alkohol? Nej. Men det var ett roligt projekt och gav mig möjligheten att lära mig grundläggande Python
                </p>
                }

                en={
                <p>
                    I was accusing my sister for stealing alcohol I had stored in my garage but could not prove this.
                    To prove my accusation I created a script that measures the average RGB-value in a certain area in picture and saves the image of that value deviates too much.
                    <br/><br/>
                    Did I prove my sister stealing my alcohol? No. But it was a fun project and gave me the opportunity to learn basic Python             
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
                en={ <span> Script to save camera images when colour changes </span> }
                sv={ <span> Skript till kamera </span> }
            />
        </p>
    )
}

const project = {
    name: "RPI-camera",
    language: "py",
    github: "https://github.com/ffamilyfriendly/RPI-camera",
    about: <Website />,
    description: <ShortDescription />,
    tags: [ "py", "python", "camera", "python camera" ]
}

export default project