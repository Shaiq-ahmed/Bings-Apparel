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
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    // Other state and functions...

    const logout = () => {
        // Implement logout logic here
        // This might include clearing tokens, resetting state, etc.
        setIsLoggedIn(false)
    }

    // Check login status on component mount
    useEffect(() => {
        // Implement logic to check if user is logged in
        // This might involve checking for a token in localStorage, etc.
        const checkLoginStatus = () => {
            // Your login check logic here
            // setIsLoggedIn(true or false based on check)
        }
        checkLoginStatus()
    }, [])

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
        const shippingFee = 10;
        const totalAmount = subtotal + shippingFee;
        return { subtotal, shippingFee, totalAmount };
    };

    // Wishlist functions
    const addToWishlist = (productId) => {
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
        logout
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider
