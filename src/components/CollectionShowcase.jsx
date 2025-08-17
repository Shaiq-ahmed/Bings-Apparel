import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const collections = [
    {
        title: "Urban Essentials",
        subtitle: "Street-ready basics",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop&q=80",
        description: "Discover our core collection of urban essentials designed for the modern lifestyle.",
        cta: "Explore Urban",
        theme: "dark"
    },
    {
        title: "Premium Athleisure",
        subtitle: "Performance meets style",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1000&fit=crop&q=80",
        description: "Elevate your workout wardrobe with our premium athleisure collection.",
        cta: "Shop Athleisure",
        theme: "light"
    }
];

const CollectionShowcase = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight">
                            Featured Collections
                        </h2>
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Curated collections that define contemporary fashion and lifestyle.
                    </p>
                </motion.div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-gray-100 h-[600px]"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={collection.image} 
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 ${
                                    collection.theme === 'dark' 
                                        ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                                        : 'bg-gradient-to-t from-white/90 via-white/50 to-transparent'
                                }`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                >
                                    <div className="mb-4">
                                        <span className={`text-sm font-medium tracking-wider uppercase ${
                                            collection.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            {collection.subtitle}
                                        </span>
                                    </div>
                                    
                                    <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${
                                        collection.theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {collection.title}
                                    </h3>
                                    
                                    <p className={`text-lg mb-6 max-w-md ${
                                        collection.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                    }`}>
                                        {collection.description}
                                    </p>
                                    
                                    <Button 
                                        className={`${
                                            collection.theme === 'dark' 
                                                ? 'bg-white text-black hover:bg-gray-100' 
                                                : 'bg-black text-white hover:bg-gray-800'
                                        } px-8 py-3 rounded-full font-medium transition-all duration-300 group-hover:scale-105`}
                                    >
                                        {collection.cta}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;
