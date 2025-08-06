import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { CheckCircle } from "lucide-react";

const OrderDetails = () => {
    const { orderId } = useParams();
    const { products } = useContext(ShopContext);
    const order = products.find((p) => p._id === orderId);
    const navigate = useNavigate();

    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    if (!order) return <div>Order not found</div>;

    const handleRating = (value) => setRating(value);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setReviewSubmitted(true);
        console.log("Review Submitted:", { reviewText, rating });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Order Completed Box */}
            <div className="bg-yellow-100 p-6 rounded-lg mb-8 flex items-center gap-4">
                <CheckCircle className="text-yellow-500 w-8 h-8" />
                <div>
                    <h3 className="text-lg font-semibold text-yellow-600">
                        Completed
                    </h3>
                    <p className="text-gray-600">
                        Paid by <strong>Cash on Delivery</strong>. Your order has been
                        completed. We look forward to seeing you again!
                    </p>
                </div>
            </div>

            {/* Order Details Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center gap-6 mb-6">
                        <img
                            src={order.image[0]}
                            alt="Product"
                            className="w-24 h-24 object-cover rounded-md"
                        />
                        <div>
                            <Link className="text-xl font-semibold">{order.name}</Link>
                            <p className="text-gray-600">Color: Original</p>
                        </div>
                    </div>

                    <dl className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <dt className="font-semibold text-gray-700">Subtotal</dt>
                            <dd>Rs. {order.price}</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-700">Shipping Fee</dt>
                            <dd>Rs. 125</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-700">Total</dt>
                            <dd className="font-bold text-lg">Rs. 523</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-700">Status</dt>
                            <dd>Delivered</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-700">Payment Method</dt>
                            <dd>Cash on Delivery</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-700">Delivery Address</dt>
                            <dd>
                                Block 7, R-29 (Row 41), Gulshan-e-Maymar, Karachi,
                                Pakistan
                            </dd>
                        </div>
                    </dl>

                    {/* Write a Review Section */}
                    {"delivered" === "delivered" && !reviewSubmitted && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                            <form className="space-y-4" onSubmit={handleSubmitReview}>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Write your review..."
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                />
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">Rating:</span>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <span
                                            key={value}
                                            onClick={() => handleRating(value)}
                                            className={`cursor-pointer text-2xl ${value <= rating
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                >
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Thank You Message */}
                    {reviewSubmitted && (
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-green-600">
                                Thank you for your review!
                            </h3>
                            <p>Rating: {rating} ★</p>
                            <p>Review: {reviewText}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Buy Again Button */}
            <div className="mt-6">
                <button onClick={() => navigate(`/product/${order._id}`)} className="bg-black text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                    Buy Again
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;
