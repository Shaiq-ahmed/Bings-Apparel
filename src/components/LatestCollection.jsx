"use client"

import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestCollection, setLatestCollection] = useState([])
    const [activeCategory, setActiveCategory] = useState('All')
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    
    // Subtle parallax effect inspired by Apple
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

    useEffect(() => {
        let slice = activeCategory === 'All' ? products.slice(0, 15) : products.slice(0, 20)
        setLatestCollection(slice)
    }, [products, activeCategory])

    // Handle scroll navigation
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            })
        }
    }

    // Check scroll position
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener('scroll', handleScroll)
            handleScroll() // Initial check
            return () => container.removeEventListener('scroll', handleScroll)
        }
    }, [latestCollection])

    const categories = ['All', 'Men', 'Women', 'Kids']

    const filteredProducts = activeCategory === 'All' 
        ? latestCollection 
        : latestCollection.filter(product => product.category === activeCategory)

    return (
        <motion.section
            ref={containerRef}
            y={y}
            opacity={opacity}
            className="relative py-10 overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Apple-style Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Explore the lineup.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover our curated selection of the season's most coveted pieces, 
                        blending timeless elegance with contemporary flair.
                    </p>
                </motion.div>

                {/* Apple-style Category Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-16"
                >
                    <Tabs defaultValue="All" className="w-full max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-4 bg-gray-100 backdrop-blur-sm border-0 rounded-full p-2 h-14">
                            {categories.map((category) => (
                                <TabsTrigger 
                                    key={category} 
                                    value={category}
                                    onClick={() => setActiveCategory(category)}
                                    className="capitalize text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-full transition-all duration-300 font-medium text-base h-10"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        
                        {categories.map((category) => (
                            <TabsContent key={category} value={category} className="mt-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative"
                                >
                                    {/* Apple-style horizontal scroll container */}
                                    <div className="relative group">
                                        {/* Left scroll button */}
                                        <motion.button
                                            onClick={scrollLeft}
                                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center transition-all duration-300 ${
                                                canScrollLeft 
                                                    ? 'opacity-100 hover:bg-white hover:shadow-xl' 
                                                    : 'opacity-0 pointer-events-none'
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: canScrollLeft ? 1 : 0 }}
                                        >
                                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                                        </motion.button>

                                        {/* Right scroll button */}
                                        <motion.button
                                            onClick={scrollRight}
                                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center transition-all duration-300 ${
                                                canScrollRight 
                                                    ? 'opacity-100 hover:bg-white hover:shadow-xl' 
                                                    : 'opacity-0 pointer-events-none'
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: canScrollRight ? 1 : 0 }}
                                        >
                                            <ChevronRight className="w-5 h-5 text-gray-700" />
                                        </motion.button>

                                        {/* Horizontal scrolling container */}
                                        <div 
                                            ref={scrollContainerRef}
                                            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-1"
                                            style={{
                                                scrollbarWidth: 'none',
                                                msOverflowStyle: 'none'
                                            }}
                                        >
                                            {filteredProducts.map((product, index) => (
                                                <motion.div
                                                    key={product._id}
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: index * 0.1,
                                                        ease: [0.25, 0.1, 0.25, 1]
                                                    }}
                                                    whileHover={{
                                                        y: -8,
                                                        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                                                    }}
                                                    className="flex-shrink-0 w-80 group"
                                                >
                                                    <ProductItem 
                                                        id={product._id} 
                                                        image={product.image} 
                                                        name={product.name} 
                                                        price={product.price}
                                                        discount={product.discount}
                                                        sizeQuantities={product.sizeQuantities}
                                                        description={product.description}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Scroll indicators */}
                                        <div className="flex justify-center mt-6 space-x-2">
                                            {Array.from({ length: Math.ceil(filteredProducts.length / 4) }).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>

                {/* Apple-style CTA Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-center"
                >
                    <Button 
                        onClick={() => navigate('/collection')} 
                        className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-medium rounded-full shadow-none hover:shadow-lg transition-all duration-300 border-0"
                    >
                        Compare all models 
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </motion.section>
    )
}

export default LatestCollection
