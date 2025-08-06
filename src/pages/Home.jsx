import React, { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import FeaturedProductsCarousel from '@/components/FeaturedProductCarousel'
import VideoSection from '../components/VideoSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { ShopContext } from '@/context/ShopContext'

const Home = ({ searchVisible }) => {
  const {products} = useContext(ShopContext)
  const productList = products.slice(61, 70)
  
  return (
    <div className='w-full'>
      {/* Full-screen hero section */}
      <Hero/>
      
      {/* Featured Products with padding */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <FeaturedProductsCarousel products={productList} />
      </div>
      
      {/* Latest Collection - Full width */}
      <LatestCollection/>
      
      {/* Best Seller with padding */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <BestSeller/>
      </div>
      
      {/* Video Section - Full width */}
      <VideoSection />
      
      {/* Our Policy with padding */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <OurPolicy/>
      </div>
      
      {/* Testimonials Section - Full width */}
      <TestimonialsSection />
      
      {/* Newsletter Section with padding */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <NewsLetter/>
      </div>
    </div>
  )
}

export default Home