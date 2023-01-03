import React from 'react'
import heroImage from '../../assets/hero-image.png'

const HeroSection = () => {
  return (
    <section className='py-20'>
        <div className='text-center'>
            <h1 className="text-6xl lg:block md:block hidden text-[#151531] font-bold leading-tight">Save more and get your <br /> finances right</h1>
            <h1 className="text-5xl lg:hidden md:hidden block text-[#151531] font-bold leading-tight">Save more and<br /> get your  finances right</h1>

            <p className='py-6 lg:block md:block hidden '>Orci molestie nam vulputate nunc habitant gravida. Interdum <br /> vitae vivamus ipsum aliquet consectetur aliquam.</p>
            <p className='py-6 lg:hidden md:hidden block'>Orci molestie nam vulputate nunc habitant <br /> gravida. Interdum vitae vivamus ipsum <br /> aliquet consectetur aliquam.</p>

            <button className='btn bg-[#9D0AFF] border-none mt-2 mb-16 capitalize'>Request a demo</button>
        </div>
        <div className='flex justify-center w-full'>
            <img className='w-full lg:px-2 px-0' src={heroImage} alt="heroImage" />
        </div>
    </section>
  )
}

export default HeroSection