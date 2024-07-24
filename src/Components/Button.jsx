
function Button({label, iconURL , color}) {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg ${color ? `${color}` : `bg-coral-red`} text-black rounded-full border-coral-red`}>
        {label}
        {iconURL&&<img
            src={iconURL}
            alt={label}
            className="ml-2 h-5 w-5 "
        />}
    </button>
  )
}

export default Button
