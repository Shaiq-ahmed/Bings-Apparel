"use client"

import { useState, useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingCart, Trash2, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ShopContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"
import { isProductInStock } from '../utils/checkStock'

export default function Wishlist() {
    const { products, wishlistItems, currency } = useContext(ShopContext)
    const navigate = useNavigate()
    const [displayWishlist, setDisplayWishlist] = useState([])
    const [sortOrder, setSortOrder] = useState("name-asc")
    const [showSortDropdown, setShowSortDropdown] = useState(false)
    const [showInStock, setShowInStock] = useState(false)

    // Convert wishlist IDs to actual product data
    useEffect(() => {
        const wishlistProducts = wishlistItems.map(id =>
            products.find(product => product._id === id)
        ).filter(Boolean).map(product => ({
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image[0],
            inStock: isProductInStock(product.sizeQuantities)
        }))
        setDisplayWishlist(wishlistProducts)
    }, [wishlistItems, products])

    const handleRemoveItem = (id) => {
        // This will be handled by the addToWishlist function which toggles
        // For now, let's navigate to prevent errors
    }

    const handleAddToCart = (item) => {
        // Redirect to product page instead of adding directly to cart
        navigate(`/product/${item.id}`)
    }

    const sortItems = (items) => {
        return [...items].sort((a, b) => {
            if (sortOrder === "name-asc") return a.name.localeCompare(b.name)
            if (sortOrder === "name-desc") return b.name.localeCompare(a.name)
            if (sortOrder === "price-asc") return a.price - b.price
            if (sortOrder === "price-desc") return b.price - a.price
            return 0
        })
    }

    const getSortLabel = () => {
        switch (sortOrder) {
            case "name-asc": return "Name (A-Z)"
            case "name-desc": return "Name (Z-A)"
            case "price-asc": return "Price (Low to High)"
            case "price-desc": return "Price (High to Low)"
            default: return "Sort by"
        }
    }

    const filteredAndSortedItems = sortItems(displayWishlist).filter(item => !showInStock || item.inStock)

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Your Wishlist
                    </h1>
                    <p className="text-xl text-gray-600 font-light">
                        Items you love, saved for later
                    </p>
                </motion.div>

                {/* Controls */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0"
                >
                    <div className="flex items-center space-x-6">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors duration-300"
                            >
                                <span className="text-gray-700">{getSortLabel()}</span>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </button>
                            {showSortDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-10"
                                >
                                    {[
                                        { value: "name-asc", label: "Name (A-Z)" },
                                        { value: "name-desc", label: "Name (Z-A)" },
                                        { value: "price-asc", label: "Price (Low to High)" },
                                        { value: "price-desc", label: "Price (High to Low)" }
                                    ].map(option => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setSortOrder(option.value)
                                                setShowSortDropdown(false)
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* In Stock Filter */}
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showInStock}
                                onChange={(e) => setShowInStock(e.target.checked)}
                                className="sr-only"
                            />
                            <div className={`w-5 h-5 border-2 border-gray-300 rounded transition-colors duration-200 flex items-center justify-center ${
                                showInStock ? 'bg-gray-900 border-gray-900' : 'bg-white'
                            }`}>
                                {showInStock && (
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <span className="ml-3 text-gray-700 font-medium">In stock only</span>
                        </label>
                    </div>
                    
                    <p className="text-gray-500 font-light">
                        {filteredAndSortedItems.length} {filteredAndSortedItems.length === 1 ? 'item' : 'items'}
                    </p>
                </motion.div>

                {/* Wishlist Items */}
                <div className="space-y-6">
                    <AnimatePresence>
                        {filteredAndSortedItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                                className="flex items-center justify-between bg-gray-50 p-6 rounded-3xl hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="flex items-center space-x-6">
                                    {/* Image */}
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-2xl"
                                        />
                                        {!item.inStock && (
                                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
                                                <span className="text-white text-xs font-medium">Out of stock</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Details */}
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                                        <p className="text-xl font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center space-x-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleAddToCart(item)}
                                        disabled={!item.inStock}
                                        className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 flex items-center space-x-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>Add to Cart</span>
                                    </motion.button>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-300"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredAndSortedItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                        <p className="text-gray-600 font-light mb-8">Start adding items you love!</p>
                        <Button 
                            onClick={() => window.location.href = '/collection'}
                            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition-colors duration-300"
                        >
                            Continue Shopping
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
