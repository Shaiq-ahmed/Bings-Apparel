import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NewsLetter = () => {
    const containerRef = useRef(null)
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    
    // Apple-style subtle parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

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
            className="w-full py-20 bg-gray-50"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Apple-style minimalist header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Stay in the know
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Get notified about new collections, exclusive offers, and style inspiration.
                    </p>
                </motion.div>

                {/* Clean newsletter form */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-lg mx-auto"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <Input 
                            type="email" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-6 py-4 text-lg border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-full bg-white"
                            required
                        />
                        <Button 
                            type="submit"
                            className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-full shadow-none hover:shadow-lg transition-all duration-300 border-0 whitespace-nowrap"
                        >
                            {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                            {!isSubscribed && <ArrowRight className="ml-2 h-5 w-5" />}
                        </Button>
                    </form>
                    
                    {/* Privacy note */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm text-gray-500 mt-4"
                    >
                        We respect your privacy. Unsubscribe anytime.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default NewsLetter
