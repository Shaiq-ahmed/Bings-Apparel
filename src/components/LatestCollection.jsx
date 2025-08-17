"use client"

import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestCollection, setLatestCollection] = useState([])
    const [activeCategory, setActiveCategory] = useState('All')
    const navigate = useNavigate()
    const containerRef = useRef(null)
    
    // Subtle parallax effect inspired by Apple
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

    useEffect(() => {
        let slice = activeCategory === 'All' ? products.slice(0, 10) : products.slice(0, 20)
        setLatestCollection(slice)
    }, [products, activeCategory])

    const categories = ['All', 'Men', 'Women', 'Kids']

    const filteredProducts = activeCategory === 'All' 
        ? latestCollection 
        : latestCollection.filter(product => product.category === activeCategory)

    return (
        <motion.section 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-20 overflow-hidden bg-white"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Apple-style Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Latest Collections
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
                    <Tabs defaultValue="All" className="w-full max-w-2xl mx-auto">
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
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10"
                                >
                                    {filteredProducts.map((product, index) => (
                                        <motion.div 
                                            key={product._id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: index * 0.1,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{ 
                                                y: -8,
                                                transition: { duration: 0.3, ease: "easeOut" }
                                            }}
                                            className="group"
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
                        className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-full shadow-none hover:shadow-lg transition-all duration-300 border-0"
                    >
                        View All Collections 
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default LatestCollection
