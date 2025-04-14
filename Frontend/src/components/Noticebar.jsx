import { Typewriter } from 'react-simple-typewriter'

const Noticebar = () => {
  return (
    <div className= "flex items-center justify-center bg-[#d1d5db] text-[#1f2937] text-[18px] font-semibold h-[45px]"> 
        
   
         <Typewriter
            words={['Hello Beautiful! Welcome to LuminSkin ✨', 'Enjoy 30% off – Shop now and glow!', 'Free shipping on orders over $50!', 'Glow up starts with good skin care.']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={800}
            
          />
    </div>
  )
}

export default Noticebar