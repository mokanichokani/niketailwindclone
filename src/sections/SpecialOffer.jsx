import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'


const SpecialOffer = () => {
  return (
    <section className='flex'>
    <div className='flex-1'>
      <img src={offer} width={773} height={687} />
    </div>
          <div className='flex-1ddddd'> 
      <h2 className="font-palanquin mt-10 text-4xl max-sm:text-[72px] font-bold">
        <span className="text-coral-red inline-block mt-3">Special Offers</span>
      </h2>
      <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-7 flex gap-6'>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="Learn more" color="-white"/>
        </div>

    </div>
    </section>

  )
}

export default SpecialOffer
