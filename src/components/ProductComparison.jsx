import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { X, Plus, Minus, Star, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const ProductComparison = () => {
  const { products, addToCart, currency } = useContext(ShopContext);
  const [compareItems, setCompareItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load comparison items from localStorage on component mount
  React.useEffect(() => {
    const stored = localStorage.getItem('compareItems');
    if (stored) {
      const itemIds = JSON.parse(stored);
      const items = itemIds.map(id => products.find(p => p._id === id)).filter(Boolean);
      setCompareItems(items);
      setIsVisible(items.length > 0);
    }
  }, [products]);

  // Save to localStorage whenever compareItems changes
  React.useEffect(() => {
    localStorage.setItem('compareItems', JSON.stringify(compareItems.map(item => item._id)));
  }, [compareItems]);

  const addToCompare = (product) => {
    if (compareItems.length >= 4) {
      toast.error('You can only compare up to 4 products');
      return;
    }
    
    if (compareItems.find(item => item._id === product._id)) {
      toast.error('Product already in comparison');
      return;
    }

    setCompareItems(prev => [...prev, product]);
    setIsVisible(true);
    toast.success(`${product.name} added to comparison`);
  };

  const removeFromCompare = (productId) => {
    setCompareItems(prev => prev.filter(item => item._id !== productId));
    toast.success('Product removed from comparison');
  };

  const clearComparison = () => {
    setCompareItems([]);
    setIsVisible(false);
    localStorage.removeItem('compareItems');
    toast.success('Comparison cleared');
  };

  const getAverageRating = (product) => {
    // Mock rating calculation
    return (Math.random() * 2 + 3).toFixed(1);
  };

  const getAvailableSizes = (product) => {
    return Object.entries(product.sizeQuantities)
      .filter(([, qty]) => qty > 0)
      .map(([size]) => size);
  };

  const features = [
    { key: 'price', label: 'Price', format: (value) => `${currency}${value}` },
    { key: 'category', label: 'Category' },
    { key: 'subCategory', label: 'Type' },
    { key: 'rating', label: 'Rating', format: (value, product) => (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span>{getAverageRating(product)}</span>
      </div>
    )},
    { key: 'sizes', label: 'Available Sizes', format: (_, product) => (
      <div className="flex flex-wrap gap-1">
        {getAvailableSizes(product).map(size => (
          <Badge key={size} variant="outline" className="text-xs">
            {size}
          </Badge>
        ))}
      </div>
    )},
    { key: 'discount', label: 'Discount', format: (value) => value ? `${value}% OFF` : 'No discount' }
  ];

  // Floating compare button
  const CompareButton = () => (
    <AnimatePresence>
      {compareItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            onClick={() => setIsVisible(true)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg px-6 py-3"
          >
            Compare ({compareItems.length})
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Main comparison modal
  const ComparisonModal = () => (
    <AnimatePresence>
      {isVisible && compareItems.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Product Comparison</h2>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={clearComparison}>
                    Clear All
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="overflow-auto max-h-[calc(90vh-100px)]">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {compareItems.map((product) => (
                    <Card key={product._id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => removeFromCompare(product._id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      
                      <CardHeader className="pb-4">
                        <div className="aspect-square overflow-hidden rounded-lg mb-4">
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {product.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {features.map((feature) => (
                          <div key={feature.key} className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-600">
                              {feature.label}
                            </span>
                            <div className="text-sm">
                              {feature.format 
                                ? feature.format(product[feature.key], product)
                                : product[feature.key] || 'N/A'
                              }
                            </div>
                          </div>
                        ))}

                        <Button
                          className="w-full mt-4"
                          onClick={() => {
                            // For demo, just add first available size
                            const availableSizes = getAvailableSizes(product);
                            if (availableSizes.length > 0) {
                              addToCart(product, availableSizes[0], 1);
                            } else {
                              toast.error('Product is out of stock');
                            }
                          }}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <CompareButton />
      <ComparisonModal />
    </>
  );
};

// Export the addToCompare function to be used by ProductItem components
export const useProductComparison = () => {
  const { products } = useContext(ShopContext);
  const [compareItems, setCompareItems] = useState([]);

  React.useEffect(() => {
    const stored = localStorage.getItem('compareItems');
    if (stored) {
      const itemIds = JSON.parse(stored);
      const items = itemIds.map(id => products.find(p => p._id === id)).filter(Boolean);
      setCompareItems(items);
    }
  }, [products]);

  const addToCompare = (product) => {
    const stored = localStorage.getItem('compareItems');
    const currentItems = stored ? JSON.parse(stored) : [];
    
    if (currentItems.length >= 4) {
      toast.error('You can only compare up to 4 products');
      return;
    }
    
    if (currentItems.includes(product._id)) {
      toast.error('Product already in comparison');
      return;
    }

    const updatedItems = [...currentItems, product._id];
    localStorage.setItem('compareItems', JSON.stringify(updatedItems));
    toast.success(`${product.name} added to comparison`);
    
    // Trigger a custom event to update the main component
    window.dispatchEvent(new CustomEvent('compareItemsUpdated'));
  };

  const isInComparison = (productId) => {
    return compareItems.some(item => item._id === productId);
  };

  return { addToCompare, isInComparison, compareCount: compareItems.length };
};

export default ProductComparison;
