import React, { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import FeaturedProductsCarousel from '@/components/FeaturedProductCarousel'
import VideoSection from '../components/VideoSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FeatureShowcase from '../components/FeatureShowcase'
import StatsSection from '../components/StatsSection'
import CollectionShowcase from '../components/CollectionShowcase'
import { ShopContext } from '@/context/ShopContext'

const Home = ({ searchVisible }) => {
  const {products} = useContext(ShopContext)
  const productList = products.slice(61, 70)
  
  return (
    <div className='w-full bg-white'>
      {/* Full-screen hero section */}
      <Hero/>
      
      {/* Apple-style spacious sections */}
      <div className='space-y-24 sm:space-y-32 lg:space-y-40'>
        {/* Featured Products with Apple-style padding and spacing */}
        <section className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='py-16 sm:py-20'>
            <FeaturedProductsCarousel products={productList} />
          </div>
        </section>
        
        {/* Latest Collection - Apple-style full width with inner constraints */}
        <section className='bg-gray-50'>
          <div className='py-20 sm:py-24 lg:py-32'>
            <LatestCollection/>
          </div>
        </section>
        
        {/* Collection Showcase - Premium brand-style */}
        <section>
          <CollectionShowcase />
        </section>

        {/* Best Seller with Apple-style generous padding */}
        <section className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='py-16 sm:py-20'>
            <BestSeller/>
          </div>
        </section>

        {/* Feature Showcase - Nike/Adidas inspired */}
        <section className='bg-gray-50'>
          <FeatureShowcase />
        </section>

        {/* Stats Section - Premium brand treatment */}
        <section>
          <StatsSection />
        </section>

        {/* Video Section - Apple-style full width treatment */}
        <section className='bg-black'>
          <VideoSection />
        </section>
        
        {/* Our Policy with Apple-style spacing */}
        <section className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='py-16 sm:py-20'>
            <OurPolicy/>
          </div>
        </section>
        
        {/* Testimonials Section - Apple-style background treatment */}
        <section className='bg-gray-50'>
          <div className='py-20 sm:py-24 lg:py-32'>
            <TestimonialsSection />
          </div>
        </section>
        
        {/* Newsletter Section with Apple-style generous spacing */}
        <section className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='py-20 sm:py-24 lg:py-32'>
            <NewsLetter/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
