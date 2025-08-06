"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const FeaturedProductsShowcase = ({ products }) => {
    const containerRef = useRef(null);
    const navigate = useNavigate();
    
    // Improved parallax effect that works in both directions
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

    return (
        <motion.section 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
                        <TrendingUp className="w-6 h-6 text-red-500" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Featured Collections
                        </h2>
                        <TrendingUp className="w-6 h-6 text-red-500" />
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our most popular and trending pieces that define the latest fashion movements
                    </p>
                </motion.div>

                {/* Featured Product Spotlight */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-96 lg:h-full">
                                <img
                                    src={products[0]?.image[0] || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80"}
                                    alt="Featured Product"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                
                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-semibold">
                                        Featured
                                    </Badge>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-2">
                                        <Sparkles className="w-5 h-5 text-red-500" />
                                        <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                                            Spotlight Product
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        {products[0]?.name || "Premium Streetwear Collection"}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {products[0]?.description || "Experience the perfect blend of comfort and style with our featured collection that's taking the fashion world by storm."}
                                    </p>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <span className="text-gray-300 text-sm ml-2">4.9 (2.1k reviews)</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <span className="text-3xl font-bold text-white">
                                                ${products[0]?.price?.toFixed(2) || "89.99"}
                                            </span>
                                            {products[0]?.discount && (
                                                <span className="text-lg line-through text-gray-400">
                                                    ${(products[0].price * (1 + products[0].discount / 100)).toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <Button 
                                            onClick={() => navigate(`/product/${products[0]?._id}`)}
                                            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                                        >
                                            Shop Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trending Products Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {products.slice(1, 5).map((product, index) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
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
                    </div>
                </motion.div>

                {/* View All Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Button 
                        onClick={() => navigate('/collection')}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        View All Collections
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default FeaturedProductsShowcase

