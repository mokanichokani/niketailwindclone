import { star } from "../assets/icons"

function PopularProductCard({imgURL , name , price}) {
  return (
    <div>
           <div className="flex flex-1 flex-col w-full max-sm:w-full" >
      <img 
      src={imgURL}
          alt="shoe collection"
          className="w-[280px]  h-[280px] "
      />
    </div>
    <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star"
            width={20}  height={20}
        />
        <p className="leading-normal text-xl text-slate-gray font-montserrat">(4.5)</p>

    </div>
    <h3 className=" leading-normal font-montserrat font-semibold ">{name}</h3>
    <p className="text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard
