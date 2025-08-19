import React, { useState, useEffect, useContext, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SearchAutocomplete = ({ onClose }) => {
  const { products } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [trendingSearches] = useState(['Men T-Shirts', 'Women Dresses', 'Winter Jackets', 'Sneakers']);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
    
    // Focus input when component mounts
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = products
        .filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.subCategory.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query, products]);

  const addToRecentSearches = (searchTerm) => {
    const updated = [searchTerm, ...recentSearches.filter(term => term !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleSearch = (searchTerm) => {
    addToRecentSearches(searchTerm);
    navigate(`/collection?search=${encodeURIComponent(searchTerm)}`);
    onClose && onClose();
  };

  const handleProductClick = (product) => {
    addToRecentSearches(product.name);
    navigate(`/product/${product._id}`);
    onClose && onClose();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
      >
        {/* Search Input */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products, categories, brands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && query && handleSearch(query)}
              className="w-full pl-10 pr-10 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          <AnimatePresence>
            {isOpen && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4"
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-3">PRODUCTS</h3>
                <div className="space-y-2">
                  {suggestions.map((product) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <img 
                        src={product.image[0]} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category} • ${product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Recent Searches */}
          {!isOpen && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  RECENT SEARCHES
                </h3>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Clear all
                </button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((term, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => handleSearch(term)}
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          {!isOpen && (
            <div className="p-4 border-t">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                TRENDING
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {isOpen && suggestions.length === 0 && query && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try searching for something else</p>
              <button
                onClick={() => handleSearch(query)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Search anyway
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchAutocomplete;
