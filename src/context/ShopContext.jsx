import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()


const ShopContextProvider = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const currency = "$";
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState({});
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    // Generate random user data for demo
    const generateRandomUser = (name, email) => {
        const avatars = [
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        ];

        return {
            id: Math.random().toString(36).substr(2, 9),
            name: name,
            email: email,
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
            joinDate: new Date().toISOString(),
            totalOrders: Math.floor(Math.random() * 20) + 1,
            membershipLevel: ['Silver', 'Gold', 'Platinum'][Math.floor(Math.random() * 3)],
            isAdmin: false
        };
    };

    const login = (userData) => {
        const user = userData.isAdmin ?
            { ...generateRandomUser(userData.name, userData.email), isAdmin: true } :
            generateRandomUser(userData.name, userData.email);
        setUserProfile(user);
        setIsLoggedIn(true);
        localStorage.setItem('userProfile', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        toast.success(`Welcome ${user.name}!`);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserProfile(null);
        localStorage.removeItem('userProfile');
        localStorage.removeItem('isLoggedIn');
        toast.success('Logged out successfully!');
    };

    // Check login status on component mount
    useEffect(() => {
        const checkLoginStatus = () => {
            const isLoggedInStored = localStorage.getItem('isLoggedIn');
            const userProfileStored = localStorage.getItem('userProfile');

            if (isLoggedInStored === 'true' && userProfileStored) {
                setIsLoggedIn(true);
                setUserProfile(JSON.parse(userProfileStored));
            }
        };
        checkLoginStatus();
    }, []);

    const addToCart = (productData, size, quantity) => {

        const availableStock = productData.sizeQuantities[size];
        const currentQuantityInCart = cartItems[productData._id]?.[size] || 0;

        if (currentQuantityInCart + quantity > availableStock) {
            toast.error(`You cannot add more than ${availableStock} items of size ${size}. You already have ${currentQuantityInCart} in your cart.`);
            return;
        }

        const cartData = structuredClone(cartItems);

        if (cartData[productData._id]) {
            if (cartData[productData._id][size]) {
                cartData[productData._id][size] += quantity;
            } else {
                cartData[productData._id][size] = quantity;
            }
        } else {
            cartData[productData._id] = {};
            cartData[productData._id][size] = quantity;
        }

        setCartItems(cartData);
    };

    const getCartCount = () => {
        let count = 0;
        for (const productId in cartItems) {
            for (const size in cartItems[productId]) {
                count += cartItems[productId][size] ? 1 : count;
            }
        }
        return count;
    };

    const updateCartItems = (productId, size, quantity) => {
        const cartData = structuredClone(cartItems);
        if (cartData[productId]) {
            if (cartData[productId][size]) {
                cartData[productId][size] += quantity;
            } else {
                cartData[productId][size] = quantity;
            }
        } else {
            cartData[productId] = {};
            cartData[productId][size] = quantity;
        }
        setCartItems(cartData);
    };

    const calculateCartTotals = () => {
        let total = 0;
        for (const productId in cartItems) {
            for (const size in cartItems[productId]) {
                const product = products.find(product => product._id === productId);
                const quantity = cartItems[productId][size];
                total += quantity * product.price;
            }
        }
        const subtotal = total;
        let shippingFee = 10;
        let discount = 0;

        // Apply coupon discount
        if (appliedCoupon) {
            if (appliedCoupon.type === 'percentage') {
                discount = (subtotal * appliedCoupon.discount) / 100;
            } else if (appliedCoupon.type === 'fixed') {
                discount = Math.min(appliedCoupon.discount, subtotal);
            } else if (appliedCoupon.type === 'shipping') {
                shippingFee = 0;
            }
        }

        const totalAmount = subtotal - discount + shippingFee;
        return { subtotal, shippingFee, discount, totalAmount, appliedCoupon };
    };

    const applyCoupon = (coupon) => {
        setAppliedCoupon(coupon);
        toast.success(`Coupon ${coupon.code} applied successfully!`);
    };

    const removeCoupon = () => {
        setAppliedCoupon(null);
        toast.success('Coupon removed');
    };

    // Wishlist functions
    const addToWishlist = (productId) => {
        if (!isLoggedIn) {
            toast.error("Please log in to add items to your wishlist!");
            return;
        }

        if (!wishlistItems.includes(productId)) {
            setWishlistItems(prev => [...prev, productId]);
            toast.success("Added to wishlist!");
        } else {
            setWishlistItems(prev => prev.filter(id => id !== productId));
            toast.success("Removed from wishlist!");
        }
    };

    const isInWishlist = (productId) => {
        return wishlistItems.includes(productId);
    };

    useEffect(() => {
        console.log("cartItems", cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        searchTerm,
        setSearchTerm,
        addToCart,
        getCartCount,
        updateCartItems,
        calculateCartTotals,
        cartItems,
        wishlistItems,
        addToWishlist,
        isInWishlist,
        setIsLoggedIn,
        isLoggedIn,
        userProfile,
        login,
        logout,
        appliedCoupon,
        applyCoupon,
        removeCoupon
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider
