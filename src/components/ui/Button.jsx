const Button = ({label,icon }) =>{
  return(
  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
    {icon}
    {label}
  </button>
  )
}

export default Button