const Button = (props) => {
    const {color, text} = props
    return  (
        <button className={`px-4 py-2 ${color} text-white border border-gray-600 hover:bg-red-600 transition-colors rounded-full shadow-md`}>
            {text}
      </button>
    )
}

export default Button

