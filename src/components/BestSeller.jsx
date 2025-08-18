import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestseller] = useState([])
    const navigate = useNavigate();
    const containerRef = useRef(null);
    
    // Apple-style subtle parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

    useEffect(() => {
        const bestProducts = products.filter(product => product.bestseller);
        setBestseller(bestProducts.slice(0, 10));
    }, [products]);

    return (
        <motion.section 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-20 bg-white"
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
                        Best Sellers
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover our most popular pieces that customers love. 
                        These bestsellers represent the perfect blend of style, comfort, and quality.
                    </p>
                </motion.div>

                {/* Featured Best Seller - Apple-style showcase */}
                {bestseller.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-20"
                    >
                        <div className="bg-gray-50 rounded-3xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                                {/* Image Section */}
                                <div className="relative h-96 lg:h-full bg-white">
                                    <img
                                        src={bestseller[0]?.image[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop&q=80"}
                                        alt="Best Seller"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    
                                    {/* Simple badge */}
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-black text-white px-4 py-2 text-sm font-medium rounded-full">
                                            #1 Best Seller
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight tracking-tight">
                                                {bestseller[0]?.name || "Premium Collection"}
                                            </h3>
                                            
                                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                                {bestseller[0]?.description || "Our most loved piece that combines exceptional quality with timeless design. Loved by thousands of customers worldwide."}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <span className="text-gray-600 text-sm font-medium">4.9 (5.2k reviews)</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-4">
                                            <div className="space-y-1">
                                                <span className="text-3xl font-semibold text-gray-900">
                                                    ${bestseller[0]?.price?.toFixed(2) || "129.99"}
                                                </span>
                                                {bestseller[0]?.discount && (
                                                    <div className="text-lg line-through text-gray-400">
                                                        ${(bestseller[0].price * (1 + bestseller[0].discount / 100)).toFixed(2)}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <Button 
                                                onClick={() => navigate(`/product/${bestseller[0]?._id}`)}
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
                )}

                {/* Best Sellers Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 lg:gap-10">
                        {bestseller.slice(1).map((product, index) => (
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
                        View All Best Sellers
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default BestSeller
