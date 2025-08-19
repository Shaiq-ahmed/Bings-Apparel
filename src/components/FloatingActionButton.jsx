import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, ShoppingCart, Heart, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const fabItems = [
    {
      icon: ShoppingCart,
      label: 'Cart',
      action: () => window.location.href = '/cart',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Heart,
      label: 'Wishlist',
      action: () => window.location.href = '/wishlist',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: Share,
      label: 'Share',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Check out this amazing store!',
            url: window.location.href
          })
        }
      },
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Expanded FAB items */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-col space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {fabItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="flex items-center space-x-3"
                  >
                    <motion.span
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-gray-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.button
                      onClick={item.action}
                      className={`w-12 h-12 rounded-full ${item.color} text-white shadow-lg flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB button */}
          <motion.button
            onClick={isExpanded ? () => setIsExpanded(false) : scrollToTop}
            onLongPress={() => setIsExpanded(true)}
            className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onContextMenu={(e) => {
              e.preventDefault()
              setIsExpanded(!isExpanded)
            }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full opacity-0"
              whileTap={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2, 1.4] }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingActionButton
