import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../Components/Button"
import Shoecard from "../Components/Shoecard"
import { statistics , shoes } from "../constants"


const Hero = () => {

  let [bigShoeImg , setBSI] = useState(bigShoe1);

  return (
    <section id="home"  className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
    
      <p className="text-xl font-montserrat text-coral-red">
      Our summer collection 
      </p>
      <h1 className="font-palanquin mt-10 text-8xl max-sm:text-[72px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br/>
        <span className="text-coral-red inline-block mt-3">Nike</span> shoes 
      </h1>
      <p className="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8  sm:max-w-sm">Discover stylish nike arrivals , 
      quality comfort and innovation for your active life.</p>
      <Button label="Shop now" iconURL={arrowRight}/>

      <div className="mt-20 flex item-start justify-start flex-wrap w-full gap-10">
      {statistics.map((e,index)=>(
        <div key={index}>
          <p className=" font-palanquin font-bold text-4xl ">{e.value}</p>
          <p className=" leading-7 font-montserrat text-slate-gray">{e.label}</p>
        </div>
      ))}
      </div>
    </div>

    <div className="flex relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImg}
        alt="shoe1"
        width={610}
        height={500}
        className="object-contain  relative z-10"
      />
      <div>
        
      </div>

      <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm">
        {shoes.map(shoe => (
          <div key={shoe}>
          <Shoecard 
          imgURL={shoe}
          changeBigShoeImage={(shoe)=>{setBSI(shoe)}}
          bigShoeImg={bigShoeImg}
          />
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Hero
