import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const VideoSection = () => {
    const containerRef = useRef(null);
    
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
            className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,255,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-2">
                            <Sparkles className="w-6 h-6 text-red-500" />
                            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                                Behind the Scenes
                            </span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Discover Our
                            <span className="block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                Creative Process
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            Take a journey behind the scenes and see how we craft each piece with passion, 
                            precision, and an unwavering commitment to quality that defines our brand.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                            >
                                Watch Video
                                <Play className="ml-2 h-5 w-5" />
                            </Button>
                            
                            <Button 
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">500+</div>
                                <div className="text-gray-400 text-sm">Products Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-gray-400 text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">5+</div>
                                <div className="text-gray-400 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Container */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Video Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                </div>
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
                            </div>
                            
                            {/* Video info overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                                    <h3 className="text-white font-semibold">Behind the Scenes: Collection 2024</h3>
                                    <p className="text-gray-300 text-sm">See how we bring your favorite styles to life</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoSection; 