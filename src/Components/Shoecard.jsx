function Shoecard({imgURL , changeBigShoeImage , bigShoeImg}){
    
    const handleclick = () =>{
        if(bigShoeImg!=imgURL){
            changeBigShoeImage(imgURL.bigShoe);
        }
    }
    
  return (
    <div className={
        `border-2 rounded-xl ${bigShoeImg===imgURL.bigShoe? `border-coral-red ` : `border-transparent` } cursor-pointer max-sm:flex-1` 
    }  onClick={handleclick}>

      <div className="bg-card flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4" >
      
        <img 
        src={imgURL.thumbnail}
            alt="shoe collection"
            width={127}
            height={103}
            className="object-contain "
        />
      </div>
    </div>
  )
}

export default Shoecard
