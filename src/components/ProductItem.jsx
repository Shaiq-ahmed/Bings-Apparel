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

const truncateName = (name, maxLength = 20) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name
}

const ProductItem = ({ id, image, name, price, sizeQuantities, discount, description, rating = 4.5 }) => {
    const { currency, addToCart, addToWishlist, isInWishlist=true } = useContext(ShopContext)
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price
    const isInStock = isProductInStock(sizeQuantities)

    const handleAddToCart = () => {
        if (isInStock) {
            addToCart(id)
            // You might want to show a notification here
        } else {
            navigate(`/product/${id}`)
        }
    }

    const handleAddToWishlist = () => {
        addToWishlist(id)
        // You might want to show a notification here
    }

    const handleImageError = () => {
        // Fallback to next image if available
        if (image && image.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % image.length)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="h-full flex flex-col overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0 rounded-xl">
                <CardContent className="p-0 relative flex-grow">
                    {/* Image Container */}
                    <div className="relative h-0 pb-[120%] overflow-hidden">
                        <Link to={`/product/${id}`} className="block absolute inset-0">
                            <LazyImage
                                src={image && image[currentImageIndex] ? image[currentImageIndex] : '/placeholder-image.jpg'}
                                alt={name}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                onError={handleImageError}
                            />
                        </Link>
                        
                        {/* Image overlay on hover */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        className="flex space-x-2"
                                    >
                                        <Button
                                            size="icon"
                                            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white transition-all duration-300"
                                            onClick={() => navigate(`/product/${id}`)}
                                        >
                                            <Eye className="w-4 h-4 text-gray-700" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white transition-all duration-300"
                                            onClick={handleAddToCart}
                                        >
                                            <ShoppingCart className="w-4 h-4 text-gray-700" />
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                            {discount && (
                                <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                                    -{discount}%
                                </Badge>
                            )}
                            {!isInStock && (
                                <Badge variant="secondary" className="bg-gray-500 text-white px-2 py-1 text-xs">
                                    Out of Stock
                                </Badge>
                            )}
                        </div>

                        {/* Wishlist Button */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 border-0 shadow-lg"
                                        onClick={handleAddToWishlist}
                                    >
                                        <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        {/* Rating */}
                        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium text-gray-700">{rating}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col items-start p-4 space-y-3 bg-gradient-to-br from-gray-50 to-white">
                    {/* Product Name */}
                    <Link to={`/product/${id}`} className="block w-full">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight hover:text-red-500 transition-colors duration-300">
                            {truncateName(name, 25)}
                        </h3>
                    </Link>

                    {/* Price */}
                    <div className="flex items-center space-x-2 w-full">
                        <span className="text-lg font-bold text-gray-900">
                            {currency} {discountedPrice}
                        </span>
                        {discount && (
                            <span className="text-sm line-through text-gray-500">
                                {currency} {price}
                            </span>
                        )}
                    </div>

                    {/* Action Button */}
                    <Button
                        variant={isInStock ? "default" : "secondary"}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-2 text-sm font-medium transition-all duration-300"
                        onClick={handleAddToCart}
                    >
                        {isInStock ? (
                            <>
                                <ShoppingCart className="mr-2 h-4 w-4" /> 
                                Add to Cart
                            </>
                        ) : (
                            'View Details'
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default ProductItem

