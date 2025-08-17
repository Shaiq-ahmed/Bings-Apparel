"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'

const FeaturedProductsShowcase = ({ products }) => {
    const containerRef = useRef(null);
    const navigate = useNavigate();
    
    // Apple-style subtle parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

    return (
        <motion.section 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-20 bg-gray-50"
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
                        Featured Collections
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover our most popular and trending pieces that define the latest fashion movements
                    </p>
                </motion.div>

                {/* Featured Product Spotlight - Apple style */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Image Section */}
                            <div className="relative h-96 lg:h-full bg-gray-50">
                                <img
                                    src={products[0]?.image[0] || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80"}
                                    alt="Featured Product"
                                    className="w-full h-full object-cover object-center"
                                />
                                
                                {/* Simple badge */}
                                <div className="absolute top-6 left-6">
                                    <div className="bg-black text-white px-4 py-2 text-sm font-medium rounded-full">
                                        Featured
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight tracking-tight">
                                            {products[0]?.name || "Premium Collection"}
                                        </h3>
                                        
                                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                                            {products[0]?.description || "Experience the perfect blend of comfort and style with our featured collection that's taking the fashion world by storm."}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">4.9 (2.1k reviews)</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4">
                                        <div className="space-y-1">
                                            <span className="text-3xl font-semibold text-gray-900">
                                                ${products[0]?.price?.toFixed(2) || "89.99"}
                                            </span>
                                            {products[0]?.discount && (
                                                <div className="text-lg line-through text-gray-400">
                                                    ${(products[0].price * (1 + products[0].discount / 100)).toFixed(2)}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <Button 
                                            onClick={() => navigate(`/product/${products[0]?._id}`)}
                                            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-none hover:shadow-lg border-0"
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

                {/* Featured Products Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {products.slice(1, 5).map((product, index) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
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
                    </div>
                </motion.div>

                {/* Apple-style CTA Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-center mt-16"
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

export default FeaturedProductsShowcase
