"use client"

import React, { useContext, useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShopContext } from '../context/ShopContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Pagination } from "@/components/ui/pagination"
import { ChevronDown, Filter, Search, Grid, List, Sparkles } from 'lucide-react'
import ProductItem from '../components/ProductItem'
import { useMediaQuery } from 'react-responsive'; // Add this import

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search')
  const containerRef = useRef(null)

  const [showFilterProducts, setShowFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortBy, setSortBy] = useState('relevant')
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState('grid')
  const [searchInput, setSearchInput] = useState(searchTerm || '')
  const productsPerPage = 15

  // Improved parallax effect that works in both directions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Tailwind's sm breakpoint

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -30]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    isMobile ? [1, 1, 1, 1] : [0, 1, 1, 0.8]
  );

  useEffect(() => {
    let filteredProducts = products
    if (searchInput) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    }
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        category.includes(product.category)
      )
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        subCategory.includes(product.subCategory)
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'lowToHigh':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'highToLow':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      default:
        // 'relevant' - no sorting needed
        break
    }

    setShowFilterProducts(filteredProducts)
    setCurrentPage(1) // Reset to first page when filters change
  }, [products, searchInput, category, subCategory, sortBy])

  const toggleCategory = (value) => {
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const toggleType = (value) => {
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const clearFilters = () => {
    setCategory([])
    setSubCategory([])
    setSearchInput('')
    setSortBy('relevant')
  }

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = showFilterProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(showFilterProducts.length / productsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-red-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                All Collections
              </h1>
              <Sparkles className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete range of premium streetwear and fashion essentials. 
              Find your perfect style from our curated collections.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={containerRef}
        style={{ y, opacity }}
        className="relative py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-80 shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-red-500" />
                    Filters
                  </h2>
                  {(category.length > 0 || subCategory.length > 0 || searchInput) && (
                    <Button 
                      onClick={clearFilters}
                      variant="outline" 
                      size="sm"
                      className="text-red-500 border-red-500 hover:bg-red-50"
                    >
                      Clear All
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      placeholder="Search products..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="pl-10 border-gray-300 focus:border-red-500 focus:ring-red-500/20"
                    />
                  </div>
                </div>

                {/* Categories */}
                <Accordion defaultValue="categories" type="single" collapsible className="space-y-4">
                  <AccordionItem value="categories" className="border-gray-200">
                    <AccordionTrigger className="text-sm font-semibold text-gray-900 hover:text-red-500">
                      Categories
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-3">
                        {['Men', 'Women', 'Kids'].map((item) => (
                          <div key={item} className="flex items-center space-x-3">
                            <Checkbox
                              id={item}
                              checked={category.includes(item)}
                              onCheckedChange={() => toggleCategory(item)}
                              className="border-gray-300 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                            />
                            <label htmlFor={item} className="text-sm font-medium text-gray-700 cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="types" className="border-gray-200">
                    <AccordionTrigger className="text-sm font-semibold text-gray-900 hover:text-red-500">
                      Types
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-3">
                        {['TopWear', 'BottomWear', 'WinterWear'].map((item) => (
                          <div key={item} className="flex items-center space-x-3">
                            <Checkbox
                              id={item}
                              checked={subCategory.includes(item)}
                              onCheckedChange={() => toggleType(item)}
                              className="border-gray-300 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                            />
                            <label htmlFor={item} className="text-sm font-medium text-gray-700 cursor-pointer">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Active Filters */}
                {(category.length > 0 || subCategory.length > 0) && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Active Filters:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.map(item => (
                        <span key={item} className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                      {subCategory.map(item => (
                        <span key={item} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Listing */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchInput ? `Search Results for "${searchInput}"` : 'All Products'}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {showFilterProducts.length} products found
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="h-8 w-8 p-0"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="h-8 w-8 p-0"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] border-gray-300">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevant">Sort by: Relevant</SelectItem>
                      <SelectItem value="lowToHigh">Sort by: Low to High</SelectItem>
                      <SelectItem value="highToLow">Sort by: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <motion.div
                className={`grid gap-4 sm:gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={viewMode === 'list' ? 'col-span-1' : ''}
                  >
                    <ProductItem
                      id={product._id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      discount={product.discount}
                      sizeQuantities={product.sizeQuantities}
                      description={product.description}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* No Results */}
              {currentProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button onClick={clearFilters} className="bg-red-500 hover:bg-red-600">
                    Clear All Filters
                  </Button>
                </motion.div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-12 flex justify-center"
                >
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Collection
