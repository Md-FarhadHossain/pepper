import React from 'react'
import features1 from '../../assets/features-1.png'
import features2 from '../../assets/features-2.png'
import features3 from '../../assets/features-3.png'
import violetIcon from '../../assets/violet-icon.png'
import greenIcon from '../../assets/green-icon.png'

const Features = () => {
    const features = [
        {
            id: 1,
            align: false,
            image: features1,
            title: 'Manage and Track Your Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            list: <>
            <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Create posts, reels and stories.</span></li>
            <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Publish your Facebook posts dynamically.</span></li>
            <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Schedule any Twitter posts.</span></li>
        </>
        },
        {
            id: 2,
            align: true,
            image: features2,
            title: "Easily manage your team's tasks",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            list: <>
            <li className='flex'> <img className='mr-3 mb-4' src={greenIcon} alt="/" /> <span>Create posts, reels and stories.</span></li>
            <li className='flex'> <img className='mr-3 mb-4' src={greenIcon} alt="/" /> <span>Publish your Facebook posts dynamically.</span></li>
            <li className='flex'> <img className='mr-3 mb-4' src={greenIcon} alt="/" /> <span>Schedule any Twitter posts.</span></li>
        </>
        },
        {
            id: 3,
            align: false,
            image: features3,
            title: <>Simple financial overview for you</>,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            list: <>
                <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Create posts, reels and stories.</span></li>
                <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Publish your Facebook posts dynamically.</span></li>
                <li className='flex'> <img className='mr-3 mb-4' src={violetIcon} alt="/" /> <span>Schedule any Twitter posts.</span></li>
            </>
        },
    ]
  return (
    <section className='container mx-auto px-4 mt-[8.75rem] lg:px-10'>
       <div className='grid gap-[6.25rem]'>
       {
            features.map(feature => <div className='flex items-center lg:justify-between md:justify-center gap-10 justify-center flex-wrap' key={feature.id}>
                
                <div className='lg:block md:hidden hidden'>
                {
                    feature.align ? '' : <><div>
                    <img src={feature.image} alt={feature.title} />
                </div></>
                }
                </div>

                <div className='lg:hidden md:block block'>
                    <img src={feature.image} alt={feature.title} />
                </div>

               
                <div className='w-[26.25rem]'>
                    <h1 className='text-5xl font-bold leading-tight'>{feature.title}</h1>
                    <p className='mb-10 mt-[0.774rem]'>{feature.description}</p>
                    <ul>
                       {feature.list}
                    </ul>
                </div>

                <div className='lg:block md:hidden hidden'>
                {
                    feature.align ? <><div>
                    <img src={feature.image} alt={feature.title} />
                </div></> : ''
                }
                </div>
            </div>)
        }
       </div>
    </section>
  )
}

export default Features