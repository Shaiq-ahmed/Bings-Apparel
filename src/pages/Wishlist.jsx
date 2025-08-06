"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingCart, Trash2, Filter, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Title from "../components/Text"
import assets  from "../assets/assets/frontend_assets/p_img16.png"

// Mock data for wishlist items
const initialWishlistItems = [
    { id: 1, name: "Wireless Earbuds", price: 79.99, image: `${assets}` },
    { id: 2, name: "Smart Watch", price: 199.99, image: `${assets}` },
    { id: 3, name: "Laptop Backpack", price: 49.99, image: `${assets}` },
    { id: 4, name: "Portable Charger", price: 29.99, image: `${assets}` },
    { id: 5, name: "Bluetooth Speaker", price: 89.99, image: `${assets}` },
]

export default function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)
    const [sortOrder, setSortOrder] = useState("name-asc")
    const [showInStock, setShowInStock] = useState(false)

    const handleRemoveItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id))
    }

    const handleAddToCart = (item) => {
        console.log(`Added ${item.name} to cart`)
        // Implement add to cart logic here
    }

    const sortItems = (items) => {
        return items.sort((a, b) => {
            if (sortOrder === "name-asc") return a.name.localeCompare(b.name)
            if (sortOrder === "name-desc") return b.name.localeCompare(a.name)
            if (sortOrder === "price-asc") return a.price - b.price
            if (sortOrder === "price-desc") return b.price - a.price
            return 0
        })
    }

    const filteredAndSortedItems = sortItems(wishlistItems).filter(item => !showInStock || item.inStock)

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
                <Title text1={'Your'} text2={'Wishlist'} />
            </motion.h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <Select value={sortOrder} onValueChange={setSortOrder}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="show-in-stock"
                            checked={showInStock}
                            onCheckedChange={setShowInStock}
                        />
                        <Label htmlFor="show-in-stock">Show In Stock Only</Label>
                    </div>
                </div>
                <p className="text-sm text-gray-500">{filteredAndSortedItems.length} items in wishlist</p>
            </div>

            <AnimatePresence>
                {filteredAndSortedItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center flex-wrap  justify-between bg-white p-4 rounded-lg shadow-md mb-4"
                    >
                        {/* Image and Item Details */}
                        <div className="flex items-center space-x-4 max-w-full">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded sm:w-12 sm:h-12"
                            />
                            <div className="min-w-0">
                                <h2 className="text-lg font-semibold text-gray-900 truncate sm:text-base">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-xs">${item.price.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center  space-x-2 mt-2 sm:mt-4 sm:space-x-1">
                            {/* <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleAddToCart(item)}
                                className="text-xs sm:text-[10px] px-2 sm:px-1"
                            >
                                <ShoppingCart className="w-4 h-4 mr-2 sm:w-3 sm:h-3 sm:mr-1" />
                                Add to Cart
                            </Button> */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-xs sm:text-[10px] px-2 sm:px-1"
                            >
                                <Trash2 className="w-4 h-4 text-red-500 sm:w-3 sm:h-3" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {filteredAndSortedItems.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                >
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-xl text-gray-600">Your wishlist is empty</p>
                    <p className="text-gray-500 mt-2">Start adding items you love!</p>
                </motion.div>
            )}
        </div>
    )
}

