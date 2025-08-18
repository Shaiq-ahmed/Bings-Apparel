"use client"

import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { isProductInStock } from '../utils/checkStock'
import { LazyImage } from './ui/loading'

const truncateName = (name, maxLength = 25) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name
}

const ProductItem = ({ id, image, name, price, sizeQuantities, discount, description, rating = 4.5 }) => {
    const { currency, addToCart, addToWishlist, isInWishlist } = useContext(ShopContext)
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price
    const isInStock = isProductInStock(sizeQuantities)

    const handleAddToCart = () => {
        navigate(`/product/${id}`)
    }

    const handleAddToWishlist = () => {
        addToWishlist(id)
    }

    const handleImageError = () => {
        if (image && image.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % image.length)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-xs sm:max-w-sm mx-auto group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="h-full flex flex-col overflow-hidden bg-white border-0 shadow-none hover:shadow-lg transition-all duration-700 ease-out rounded-2xl sm:rounded-3xl">
                <CardContent className="p-0 relative flex-grow">
                    {/* Apple-style image container with subtle rounded corners */}
                    <div className="relative h-0 pb-[110%] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50">
                        <Link to={`/product/${id}`} className="block absolute inset-0">
                            <LazyImage
                                src={image && image[currentImageIndex] ? image[currentImageIndex] : '/placeholder-image.jpg'}
                                alt={name}
                                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                                onError={handleImageError}
                            />
                        </Link>
                        
                        {/* Minimal overlay on hover - Apple style */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-black/10 flex items-center justify-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="flex space-x-4"
                                    >
                                        <Button
                                            size="icon"
                                            className="w-11 h-11 rounded-full bg-white/95 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300"
                                            onClick={() => navigate(`/product/${id}`)}
                                        >
                                            <Eye className="w-4 h-4 text-gray-800" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            className="w-11 h-11 rounded-full bg-white/95 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-all duration-300"
                                            onClick={handleAddToCart}
                                        >
                                            <ShoppingCart className="w-4 h-4 text-gray-800" />
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Minimal badges - Apple style */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col space-y-1 sm:space-y-2">
                            {discount && (
                                <Badge className="bg-red-500/90 text-white px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-full backdrop-blur-sm border-0">
                                    -{discount}%
                                </Badge>
                            )}
                            {!isInStock && (
                                <Badge variant="secondary" className="bg-gray-800/90 text-white px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-full backdrop-blur-sm border-0">
                                    <span className="hidden sm:inline">Out of Stock</span>
                                    <span className="sm:hidden">Out</span>
                                </Badge>
                            )}
                        </div>

                        {/* Minimal wishlist button */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 border-0 shadow-lg"
                                        onClick={handleAddToWishlist}
                                    >
                                        <Heart className={`h-3 sm:h-4 w-3 sm:w-4 ${isInWishlist(id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{isInWishlist(id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        {/* Subtle rating indicator */}
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center space-x-1 sm:space-x-1.5 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
                            <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium text-gray-800">{rating}</span>
                        </div>
                    </div>
                </CardContent>

                {/* Apple-style minimal footer */}
                <CardFooter className="flex flex-col items-start p-3 sm:p-6 space-y-2 sm:space-y-4 bg-white">
                    {/* Product name with Apple typography */}
                    <Link to={`/product/${id}`} className="block w-full">
                        <h3 className="font-medium text-gray-900 text-xs sm:text-base leading-snug hover:text-blue-600 transition-colors duration-300 tracking-[-0.01em] h-8 sm:h-12 flex items-center">
                            {truncateName(name, window.innerWidth < 640 ? 15 : 25)}
                        </h3>
                    </Link>

                    {/* Price with Apple styling */}
                    <div className="flex items-baseline space-x-1 sm:space-x-2 w-full h-6 sm:h-8">
                        <span className="text-sm sm:text-xl font-semibold text-gray-900 tracking-[-0.02em]">
                            {currency}{discountedPrice}
                        </span>
                        {discount && (
                            <span className="text-xs sm:text-sm line-through text-gray-500 font-normal">
                                {currency}{price}
                            </span>
                        )}
                    </div>

                    {/* Minimal action button - Apple style */}
                    <Button
                        variant="default"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 border-0 shadow-sm"
                        onClick={handleAddToCart}
                    >
                        <Eye className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                        <span className="hidden sm:inline">View Details</span>
                        <span className="sm:hidden">View</span>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default ProductItem
