import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const containerRef = useRef(null);
    
    // Improved parallax effect that works in both directions
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

    useEffect(() => {
        if (category && subCategory) {
            const filteredProducts = products.filter(product => 
                product.category === category && product.subCategory === subCategory
            );
            const shuffledProducts = shuffleArray(filteredProducts);
            setRelatedProducts(shuffledProducts.slice(0, 8)); // Show more products
        }    
    }, [products, category, subCategory]);

    // Function to shuffle an array
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <motion.div 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-16 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:50px_50px]"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Sparkles className="w-5 h-5 text-red-500" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Related Products
                        </h2>
                        <Sparkles className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover more items from the same collection that match your style
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                        {relatedProducts.map((product, index) => (
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
                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        View All Products
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default RelatedProducts