"use client"

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Star, Minus, Plus } from 'lucide-react'
import Rating from '../components/Rating'
import RelatedProducts from '../components/RelatedProducts'
import Title from '../components/Text'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [image, setImage] = useState('')
  const [productData, setProductData] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const fetchProductDetails = () => {
      const product = products.find(p => p._id === productId)
      if (product) {
        setProductData(product)
        setImage(product.image[0])
      }
    }
    fetchProductDetails()
  }, [productId, products])

  const handleWishlistClick = () => {
    setIsWishlisted(prev => !prev)
  }

  const handleAddToCart = () => {
    if (selectedSize && productData.sizeQuantities[selectedSize] < quantity) {
      setError(`The amount of quantity is not available for size ${selectedSize}.`)
    } else {
      setError('')
      addToCart(productData, selectedSize, quantity)
    }
  }

  if (!productData) return null

  const discount = productData.discount ? true : false
  const discountedPrice = discount ? productData.price - (productData.price * productData.discount / 100) : productData.price

  return (
    <div className='border-t-2 p-4 sm:p-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-6 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((img, index) => (
              <motion.img
                key={index}
                onClick={() => setImage(img)}
                src={img}
                alt={`${productData.name} ${index + 1}`}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <motion.img
              src={image}
              alt={productData.name}
              className='w-full h-auto rounded-lg shadow-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='w-full sm:w-1/2'>
          <motion.h1
            className="font-bold text-2xl sm:text-3xl mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {productData.name}
          </motion.h1>
          <div className='flex items-center gap-2 mt-3'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className='text-gray-500'>(122)</span>

          </div>

          <motion.div
            className='flex items-center gap-3 mt-5'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {discount ? (
              <>
                <span className='line-through text-2xl text-gray-500'>{currency}{productData.price}</span>
                <span className='font-semibold text-2xl text-red-500'>{currency}{discountedPrice.toFixed(2)}</span>
                <Badge variant="destructive">-{productData.discount}%</Badge>
              </>
            ) : (
              <span className='font-semibold text-2xl'>{currency}{productData.price}</span>
            )}
          </motion.div>

          <motion.p
            className='mt-5 text-gray-600 mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {productData.description}
          </motion.p>

          <Tabs defaultValue="size" className="w-full mb-6">
            <TabsList>
              <TabsTrigger value="size">Size</TabsTrigger>
              <TabsTrigger value="quantity">Quantity</TabsTrigger>
            </TabsList>
            <TabsContent value="size" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((size, index) => {
                  const isOutOfStock = productData.sizeQuantities[size] === 0
                  return (
                    <Button
                      key={index}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        if (!isOutOfStock) {
                          setSelectedSize(size)
                          setQuantity(1)
                        }
                      }}
                      disabled={isOutOfStock}
                    >
                      {size}
                    </Button>
                  )
                })}
              </div>
              {productData.sizes.every(size => productData.sizeQuantities[size] === 0) && (
                <p className="text-red-500 font-semibold">Out of Stock</p>
              )}
            </TabsContent>
            <TabsContent value="quantity" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value >= 1 && value <= (productData.sizeQuantities[selectedSize] || 0)) {
                      setQuantity(value)
                    }
                  }}
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(prev => Math.min(prev + 1, productData.sizeQuantities[selectedSize]))}
                  disabled={quantity >= (productData.sizeQuantities[selectedSize] || 0)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-4 sm:space-y-0">
            <Button
              size="lg"
              className="w-full sm:min-w-[150px]" // Full width on small screens
              onClick={handleAddToCart}
              disabled={!selectedSize || quantity <= 0 || productData.sizeQuantities[selectedSize] === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:min-w-[150px]" // Full width on small screens
              onClick={handleWishlistClick}
            >
              <Heart className={`mr-2 h-4 w-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </Button>
          </div>

          {(!selectedSize || quantity <= 0 || productData.sizeQuantities[selectedSize] === 0) && (
            <p className="text-red-500 text-sm mt-1">
              {productData.sizeQuantities[selectedSize] === 0 ? 'This size is out of stock.' : 'Please select a size and quantity.'}
            </p>
          )}

          <hr className='my-5' />
          <div className='mt-5 text-gray-500 space-y-2'>
            <p>✓ 100% Original product</p>
            <p>✓ Cash on delivery available</p>
            <p>✓ Easy 7-day return and exchange policy</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className='w-full mt-12'>
        <Rating />
      </div>

      {/* Related Products */}
      <div className='w-full mt-20 sm:mt-32 mb-5'>
        <div className='text-center mb-8'>
          <Title text1={'Related'} text2={'Products'} />
        </div>
        <div className='-mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[5vw]'>
          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
      </div>
    </div>
  )
}

export default Product

