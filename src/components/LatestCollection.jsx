"use client"

import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Clock } from 'lucide-react'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestCollection, setLatestCollection] = useState([])
    const [activeCategory, setActiveCategory] = useState('All')
    const navigate = useNavigate()
    const containerRef = useRef(null)
    
    // Improved parallax effect that works in both directions
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

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
            className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Clock className="w-6 h-6 text-red-500" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Latest Collections
                        </h2>
                        <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover our curated selection of the season's most coveted pieces, 
                        blending timeless elegance with contemporary flair.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1">
                            {categories.map((category) => (
                                <TabsTrigger 
                                    key={category} 
                                    value={category}
                                    onClick={() => setActiveCategory(category)}
                                    className="capitalize text-white data-[state=active]:bg-white data-[state=active]:text-black rounded-full transition-all duration-300"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        
                        {categories.map((category) => (
                            <TabsContent key={category} value={category}>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10"
                                >
                                    {filteredProducts.map((product, index) => (
                                        <motion.div 
                                            key={product._id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: index * 0.1,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{ 
                                                y: -5,
                                                transition: { duration: 0.2 }
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

                {/* View All Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Button 
                        onClick={() => navigate('/collection')} 
                        className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    >
                        View All Collections 
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
        </motion.section>
    )
}

export default LatestCollection

