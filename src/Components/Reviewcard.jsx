import { star } from "../assets/icons"

const Reviewcard = ({imgURL , customerName , rating ,feedback}) => {
  return (
    <div className="mt-8 flex-1 flex flex-col justify-center items-center">
      <div><img src={imgURL} width={100} className="rounded-full"/></div>
      <div className="mt-3 w-60 text-[15px] text-center text-slate-gray"><p>{feedback}</p></div>
      <div className="flex gap-2"><img  src={star} className=" w-4"/>{rating}</div>
      <div className="font-bold font-montserrat"><p>{customerName}</p></div>
    </div>
  )
}

export default Reviewcard
