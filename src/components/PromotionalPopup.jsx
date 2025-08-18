import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Percent, Zap, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const promotionalOffers = [
    {
        id: 1,
        title: "Flash Sale!",
        subtitle: "Limited Time Offer",
        discount: "30% OFF",
        description: "On all premium clothing items",
        bgGradient: "from-red-500 to-pink-600",
        icon: Zap,
        buttonText: "Shop Now",
        code: "FLASH30"
    },
    {
        id: 2,
        title: "Welcome Bonus",
        subtitle: "New Customer Special",
        discount: "25% OFF",
        description: "Your first order + Free shipping",
        bgGradient: "from-blue-500 to-purple-600",
        icon: Gift,
        buttonText: "Claim Offer",
        code: "WELCOME25"
    },
    {
        id: 3,
        title: "Weekend Deal",
        subtitle: "Saturday & Sunday Only",
        discount: "40% OFF",
        description: "On selected designer pieces",
        bgGradient: "from-green-500 to-teal-600",
        icon: Percent,
        buttonText: "Browse Collection",
        code: "WEEKEND40"
    },
    {
        id: 4,
        title: "Mega Sale",
        subtitle: "Don't Miss Out!",
        discount: "50% OFF",
        description: "Everything must go!",
        bgGradient: "from-orange-500 to-red-600",
        icon: ShoppingBag,
        buttonText: "Shop Sale",
        code: "MEGA50"
    },
    {
        id: 5,
        title: "Free Shipping",
        subtitle: "No Minimum Order",
        discount: "FREE",
        description: "Fast delivery on all orders",
        bgGradient: "from-purple-500 to-indigo-600",
        icon: Gift,
        buttonText: "Order Now",
        code: "FREESHIP"
    }
];

const PromotionalPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentOffer, setCurrentOffer] = useState(null);
    const [hasShown, setHasShown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if popup has been shown in this browser session (persist across page reloads)
        const popupShown = localStorage.getItem('promotionalPopupShown');
        const popupDate = localStorage.getItem('promotionalPopupDate');
        const today = new Date().toDateString();

        // Show popup only once per day
        if ((!popupShown || popupDate !== today) && !hasShown) {
            // Show popup after 2 seconds
            const timer = setTimeout(() => {
                const randomOffer = promotionalOffers[Math.floor(Math.random() * promotionalOffers.length)];
                setCurrentOffer(randomOffer);
                setIsVisible(true);
                setHasShown(true);
                localStorage.setItem('promotionalPopupShown', 'true');
                localStorage.setItem('promotionalPopupDate', today);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [hasShown]);

    // No need to remove on page unload - we want it to persist across the session

    const closePopup = () => {
        setIsVisible(false);
    };

    const handleOfferAction = () => {
        // Navigate to collection or apply discount code
        setIsVisible(false);
        // Use React Router navigation instead of window.location
        navigate('/collection');
    };

    if (!currentOffer) return null;

    const IconComponent = currentOffer.icon;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={closePopup}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Main Popup Card */}
                        <div className={`relative bg-gradient-to-br ${currentOffer.bgGradient} rounded-3xl p-8 text-white shadow-2xl overflow-hidden`}>
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:30px_30px]"></div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closePopup}
                                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                                >
                                    <IconComponent className="w-8 h-8" />
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl font-bold mb-2"
                                >
                                    {currentOffer.title}
                                </motion.h2>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-white/80 text-sm mb-4"
                                >
                                    {currentOffer.subtitle}
                                </motion.p>

                                {/* Discount */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="text-4xl font-black mb-2"
                                >
                                    {currentOffer.discount}
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-white/90 mb-6"
                                >
                                    {currentOffer.description}
                                </motion.p>

                                {/* Promo Code */}
                                {currentOffer.code && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-6"
                                    >
                                        <p className="text-xs text-white/80 mb-1">Use code:</p>
                                        <p className="font-mono font-bold text-lg tracking-wider">{currentOffer.code}</p>
                                    </motion.div>
                                )}

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex gap-3 justify-center"
                                >
                                    <Button
                                        onClick={handleOfferAction}
                                        className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {currentOffer.buttonText}
                                    </Button>
                                    <Button
                                        onClick={closePopup}
                                        variant="outline"
                                        className="border-white/30 text-black hover:bg-white/10 px-6 py-3 font-semibold rounded-full transition-all duration-300"
                                    >
                                        Maybe Later
                                    </Button>
                                </motion.div>

                                {/* Timer/Urgency */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="text-xs text-white/70 mt-4"
                                >
                                    ⏰ Limited time offer - Don't miss out!
                                </motion.p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full opacity-50"></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full opacity-30"></div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromotionalPopup;
