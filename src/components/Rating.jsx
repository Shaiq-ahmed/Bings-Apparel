import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { Star, MessageCircle, ThumbsUp, Filter, ChevronDown, User, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const generateFakeRatings = (num) => {
    const ratings = [];
    const reviewTemplates = [
        "Absolutely love this product! The quality is outstanding and it fits perfectly.",
        "Great value for money. Would definitely recommend to friends and family.",
        "The material feels premium and the design is exactly what I was looking for.",
        "Exceeded my expectations in every way. Fast shipping and excellent customer service.",
        "Perfect fit and amazing quality. This has become my go-to piece.",
        "The attention to detail is incredible. You can tell this is made with care.",
        "Stylish and comfortable. Gets compliments everywhere I go.",
        "Worth every penny. The craftsmanship is top-notch.",
        "Beautiful piece that goes with everything in my wardrobe.",
        "Impressed with the quality and fast delivery. Will shop here again!"
    ];
    
    for (let i = 0; i < num; i++) {
        const rating = {
            id: faker.string.uuid(),
            userId: faker.person.firstName() + " " + faker.person.lastName().charAt(0) + ".",
            rating: faker.number.int({ min: 3, max: 5 }) > 3 ? 5 : faker.number.int({ min: 1, max: 5 }),
            review: faker.helpers.arrayElement(reviewTemplates),
            createdAt: faker.date.past(),
            verified: Math.random() > 0.3,
            helpful: faker.number.int({ min: 0, max: 15 }),
            size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL']),
            color: faker.helpers.arrayElement(['Black', 'White', 'Navy', 'Gray', 'Beige'])
        };
        ratings.push(rating);
    }
    return ratings.sort((a, b) => b.createdAt - a.createdAt);
};

const fakeRatings = generateFakeRatings(25);

const Rating = () => {
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [filterRating, setFilterRating] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const ratingsPerPage = 6;

    // Calculate rating statistics
    const ratingStats = {
        5: fakeRatings.filter(r => r.rating === 5).length,
        4: fakeRatings.filter(r => r.rating === 4).length,
        3: fakeRatings.filter(r => r.rating === 3).length,
        2: fakeRatings.filter(r => r.rating === 2).length,
        1: fakeRatings.filter(r => r.rating === 1).length,
    };

    const totalRatings = fakeRatings.length;
    const averageRating = (fakeRatings.reduce((sum, r) => sum + r.rating, 0) / totalRatings).toFixed(1);

    const loadMoreRatings = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);
        setTimeout(() => {
            const filteredRatings = filterRating === 'all' 
                ? fakeRatings 
                : fakeRatings.filter(r => r.rating === parseInt(filterRating));
            
            const newRatings = filteredRatings.slice(offset, offset + ratingsPerPage);
            setRatings((prevRatings) => [...prevRatings, ...newRatings]);
            setOffset((prevOffset) => prevOffset + ratingsPerPage);
            setLoading(false);
            
            if (newRatings.length < ratingsPerPage) {
                setHasMore(false);
            }
        }, 800);
    }, [loading, hasMore, offset, filterRating]);

    useEffect(() => {
        setRatings([]);
        setOffset(0);
        setHasMore(true);
        loadMoreRatings();
    }, [filterRating]);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    const getRatingPercentage = (ratingValue) => {
        return totalRatings > 0 ? Math.round((ratingStats[ratingValue] / totalRatings) * 100) : 0;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white"
        >
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Customer Reviews
                </h2>
                <p className="text-lg text-gray-600 font-light">
                    See what our customers are saying about this product
                </p>
            </div>

            {/* Rating Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 bg-gray-50 rounded-3xl">
                {/* Average Rating */}
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
                        <div className="flex space-x-1">
                            {renderStars(Math.round(parseFloat(averageRating)))}
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Based on {totalRatings} reviews
                    </p>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700 w-8">
                                {rating}★
                            </span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${getRatingPercentage(rating)}%` }}
                                />
                            </div>
                            <span className="text-sm text-gray-600 w-10">
                                {getRatingPercentage(rating)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Filter by rating:</span>
                    <div className="relative">
                        <Button
                            variant="outline"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center space-x-2 rounded-full border-gray-300"
                        >
                            <Filter className="w-4 h-4" />
                            <span>
                                {filterRating === 'all' ? 'All ratings' : `${filterRating} stars`}
                            </span>
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                        
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-2xl shadow-lg z-10"
                                >
                                    {['all', '5', '4', '3', '2', '1'].map((rating) => (
                                        <button
                                            key={rating}
                                            onClick={() => {
                                                setFilterRating(rating);
                                                setShowFilters(false);
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                                        >
                                            {rating === 'all' ? 'All ratings' : `${rating} stars`}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                
                <span className="text-gray-600">
                    {ratings.length} of {totalRatings} reviews
                </span>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                <AnimatePresence>
                    {ratings.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border border-gray-200 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Review Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-medium text-gray-900">
                                                {review.userId}
                                            </span>
                                            {review.verified && (
                                                <Badge variant="secondary" className="text-xs px-2 py-1 bg-green-100 text-green-800">
                                                    Verified Purchase
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className="flex space-x-1">
                                                {renderStars(review.rating)}
                                            </div>
                                            <span className="text-sm text-gray-500">
                                                {new Date(review.createdAt).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'long', 
                                                    day: 'numeric' 
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Review Content */}
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {review.review}
                            </p>

                            {/* Purchase Details */}
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                                <span>Size: {review.size}</span>
                                <span>•</span>
                                <span>Color: {review.color}</span>
                            </div>

                            {/* Review Actions */}
                            <div className="flex items-center space-x-4">
                                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    Helpful ({review.helpful})
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="text-center mt-8">
                    <Button 
                        onClick={loadMoreRatings}
                        disabled={loading}
                        className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
                    >
                        {loading ? 'Loading...' : 'Load More Reviews'}
                    </Button>
                </div>
            )}

            {!hasMore && ratings.length > 0 && (
                <div className="text-center mt-8 text-gray-600">
                    <p>You've seen all the reviews</p>
                </div>
            )}
        </motion.div>
    );
};

export default Rating;
