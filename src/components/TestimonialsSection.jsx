import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Blogger",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Shop of SA has completely transformed my wardrobe! The quality is exceptional and the designs are so unique. I get compliments every time I wear their pieces."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Tech Entrepreneur",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "The attention to detail in every piece is incredible. From the stitching to the fabric quality, you can tell they really care about their products."
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "I love how Shop of SA combines streetwear with luxury. The pieces are comfortable yet stylish, perfect for both casual and professional settings."
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Fitness Influencer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "As someone who's always on the move, I need clothes that can keep up. Shop of SA delivers both style and functionality perfectly."
    }
];

const TestimonialsSection = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Customers
                        <span className="block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Hear from our community of fashion-forward individuals 
                        who have experienced the Shop of SA difference.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1 
                            }}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                {/* Quote Icon */}
                                <div className="flex justify-between items-start mb-4">
                                    <Quote className="w-8 h-8 text-red-500 opacity-50" />
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                    "{testimonial.text}"
                                </p>

                                {/* Customer Info */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-500 text-xs">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gray-900">98%</div>
                        <div className="text-gray-600 text-sm">Customer Satisfaction</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gray-900">4.9★</div>
                        <div className="text-gray-600 text-sm">Average Rating</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gray-900">50K+</div>
                        <div className="text-gray-600 text-sm">Happy Customers</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-gray-900">24/7</div>
                        <div className="text-gray-600 text-sm">Customer Support</div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <Button 
                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Join Our Community
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
