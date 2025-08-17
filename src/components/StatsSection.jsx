import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingBag, Globe } from 'lucide-react';

const stats = [
    {
        icon: Users,
        number: "50K+",
        label: "Happy Customers",
        description: "Trusted worldwide"
    },
    {
        icon: ShoppingBag,
        number: "100K+",
        label: "Orders Delivered",
        description: "And counting"
    },
    {
        icon: Globe,
        number: "25+",
        label: "Countries",
        description: "Global reach"
    },
    {
        icon: TrendingUp,
        number: "98%",
        label: "Satisfaction Rate",
        description: "Customer approved"
    }
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                        Trusted by thousands
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Join our growing community of fashion enthusiasts who choose quality and style.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                                className="text-center group"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                
                                {/* Number */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.15 + 0.2,
                                        ease: "easeOut"
                                    }}
                                    className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                >
                                    {stat.number}
                                </motion.div>
                                
                                {/* Label */}
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {stat.label}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-400 font-light">
                                    {stat.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
