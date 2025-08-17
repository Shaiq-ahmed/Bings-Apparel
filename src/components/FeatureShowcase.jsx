import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Recycle, Award, Clock, Heart } from 'lucide-react';

const features = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "Free worldwide shipping on orders over $100",
        color: "bg-blue-50 text-blue-600",
        bgColor: "bg-blue-600"
    },
    {
        icon: Shield,
        title: "Secure Payment",
        description: "Your payment information is safe and secure",
        color: "bg-green-50 text-green-600",
        bgColor: "bg-green-600"
    },
    {
        icon: Recycle,
        title: "Sustainable",
        description: "Made with eco-friendly materials",
        color: "bg-emerald-50 text-emerald-600",
        bgColor: "bg-emerald-600"
    },
    {
        icon: Award,
        title: "Premium Quality",
        description: "Crafted with attention to every detail",
        color: "bg-purple-50 text-purple-600",
        bgColor: "bg-purple-600"
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer assistance",
        color: "bg-orange-50 text-orange-600",
        bgColor: "bg-orange-600"
    },
    {
        icon: Heart,
        title: "Love Guarantee",
        description: "30-day return policy if you're not satisfied",
        color: "bg-red-50 text-red-600",
        bgColor: "bg-red-600"
    }
];

const FeatureShowcase = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Why choose us
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Experience the difference with our commitment to quality, sustainability, and customer satisfaction.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className="group"
                            >
                                <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:border-gray-200">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
