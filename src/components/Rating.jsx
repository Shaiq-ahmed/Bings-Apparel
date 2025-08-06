import React, { useState, useEffect, useCallback } from 'react';
import { faker } from '@faker-js/faker';
import { Star, MessageCircle, AlertCircle } from 'lucide-react'; // Import specific icons

const generateFakeRatings = (num) => {
    const ratings = [];
    for (let i = 0; i < num; i++) {
        const rating = {
            productId: faker.string.uuid(),
            userId: faker.person.firstName(),
            rating: faker.number.int({ min: 1, max: 5 }),
            review: faker.lorem.sentence(),
            createdAt: faker.date.past(),
        };
        ratings.push(rating);
    }
    return ratings;
};

// Generate 50 fake ratings for demonstration
const fakeRatings = generateFakeRatings(50);

const Rating = () => {
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const ratingsPerPage = 5; // Number of ratings to load per scroll

    const loadMoreRatings = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);
        // Simulate an API call
        setTimeout(() => {
            const newRatings = fakeRatings.slice(offset, offset + ratingsPerPage);
            setRatings((prevRatings) => [...prevRatings, ...newRatings]);
            setOffset((prevOffset) => prevOffset + ratingsPerPage);
            setLoading(false);
            if (newRatings.length < ratingsPerPage) {
                setHasMore(false); // No more ratings to load
            }
        }, 1000); // Simulate network delay
    }, [loading, hasMore, offset]);

    useEffect(() => {
        loadMoreRatings(); // Load initial ratings
    }, [loadMoreRatings]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
            loadMoreRatings();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreRatings, loading]);

    return (
        <div className="rating-container h-auto ">
            <h2 className="text-xl font-bold mb-4 flex items-center pl-2 pt-2">
                <MessageCircle className="mr-2 text-black" /> {/* Icon for Ratings & Reviews */}
                Product Reviews
            </h2>
            <div className="h-96 overflow-y-auto bg-gray-100">
                {ratings.length > 0 ? (
                    ratings.map((rating, index) => (
                        <div key={index} className="rating-item border p-4 mb-2 rounded shadow">
                            <div className="flex items-center">
                                <span className="font-semibold">{rating.userId}</span>
                                <span className="ml-2 text-yellow-500">{'★'.repeat(rating.rating)}</span>
                            </div>
                            <p className="text-gray-700">{rating.review}</p>
                            <p className="text-gray-500 text-sm">{new Date(rating.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
                        <AlertCircle className="text-gray-400 mr-2" /> {/* Icon for No Reviews */}
                        <p className="text-gray-500">No reviews yet.</p>
                    </div>
                )}
            </div>
            {/* {loading && <p className="text-center">Loading more reviews...</p>} */}
        </div>
    );
};

export default Rating;