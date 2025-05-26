import React from 'react'
import Hero from './_components/Hero'
import Fleet from './_components/Fleet'
import WhyChoose from './_components/WhyChoose'
import BabySeatServices from './_components/BabySeatServices'
import HowItWorks from './_components/HowItWorks'
import ReadyToGo from './_components/ReadyToGo'
import Footer from './_components/Footer'
import FAQ from './_components/FAQ'
import TestimonialSlider from './_components/Testimonial'
import Features from './_components/Features'

const page = () => {
  return (
    <div className='text-white bg-[#E9E9E9] overflow-x-hidden'>
      <Hero/>
      <Fleet/>
      <BabySeatServices/>
      <WhyChoose/>
      <HowItWorks/>
      <ReadyToGo/>
     
      <Features/>
      <TestimonialSlider/>
      <FAQ/>
      <Footer/>

    </div>
  )
}

export default page
