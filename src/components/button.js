import "./button.css"

const Button = props => {

    const handleClick = (ev) => {
        if(props.href) window.location.replace(props.href)
    }

    return (
        <button onClick={handleClick} className="button"> { props.children } </button>
    )
}


export default Button