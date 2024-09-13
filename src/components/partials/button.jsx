const Button = (props) => {
    const {color, text} = props
    return  (
        <div className={`flex px-4 py-2 bg-${color} hover:bg-red-500 transition-colors rounded-full`}>
        {text}
        </div>
    )
}

export default Button

