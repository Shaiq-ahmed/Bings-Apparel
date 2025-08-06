import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, ArrowRight, Gift, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NewsLetter = () => {
    const containerRef = useRef(null)
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    
    // Improved parallax effect that works in both directions
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail('')
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <motion.section 
            ref={containerRef}
            style={{ y, opacity }}
            className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:50px_50px]"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Gift className="w-6 h-6 text-red-500" />
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Subscribe Now
                            </h2>
                            <Gift className="w-6 h-6 text-red-500" />
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our community and get <span className="font-bold text-red-500">20% off</span> your first purchase, 
                            plus exclusive access to new collections and style tips.
                        </p>
                    </motion.div>

                    {/* Newsletter Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md mx-auto mb-12"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input 
                                    type="email" 
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-12 pr-4 py-3 text-lg border-2 border-gray-300 focus:border-red-500 focus:ring-red-500/20 rounded-full"
                                    required
                                />
                            </div>
                            <Button 
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                {isSubscribed ? (
                                    <>
                                        <Sparkles className="w-5 h-5 mr-2" />
                                        Subscribed!
                                    </>
                                ) : (
                                    <>
                                        Subscribe 
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
                            <p className="text-gray-600">Get early access to sales and special discounts</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">New Collections</h3>
                            <p className="text-gray-600">Be the first to know about our latest arrivals</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Style Tips</h3>
                            <p className="text-gray-600">Receive expert styling advice and fashion trends</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default NewsLetter