import Servicecard from "../Components/Servicecard"
import { services } from "../constants"

const Services = () => {
  return (
    <section>
      <div className=" flex justify-center items-center gap-4 ">
        {services.map((e)=>(
          <Servicecard key={e.label} imgURL={e.imgURL} label={e.label} subtext={e.subtext}/>
        ))}
      </div>
    </section>
  )
}

export default Services
