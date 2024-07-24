
const Servicecard = ({imgURL , label , subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className='bg-coral-red flex justify-center w-11 rounded-full h-11 items-center'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
        <p>{subtext}</p>
      
    </div>
  )
}

export default Servicecard
