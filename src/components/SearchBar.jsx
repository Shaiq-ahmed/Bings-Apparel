// frontend/src/components/SearchBar.jsx
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import icons

const SearchBar = ({ onClose }) => {
    const { products } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(term.toLowerCase())
            ).slice(0, 15); // Limit to top 15 results
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (productId) => {
        // Redirect to the product detail page
        navigate(`/product/${productId}`);
        onClose(); // Close the search bar
    };

    const handleClickSearch = () => {
        // Redirect to the latest collection page with search results
        navigate(`/collection?search=${searchTerm}`);
        onClose(); // Close the search bar
    };

    return (
        
        <div className={`fixed md:absolute inset-0 md:inset-x-0 md:top-16 bg-white z-50 flex flex-col p-5 md:p-16 md:border md:border-gray-300 md:h-1/2 `}>
            <div className="flex justify-between items-center md:-mt-6">
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search for products..."
                        className="border-none outline-none ml-2 w-full"
                    />
                    <FaSearch className="text-gray-500 hover:text-gray-800 cursor-pointer" onClick={handleClickSearch} />
                    <FaTimes onClick={onClose} className="text-gray-500 cursor-pointer ml-2" />
                </div>
            </div>
            {filteredProducts.length > 0 && (
                <div className="mt-4 overflow-y-auto max-h-120"> {/* Set max height for scrolling */}
                    <h2 className="font-bold">Search Results:</h2>
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id} className="py-2 border-b flex items-center cursor-pointer" onClick={() => handleProductClick(product.id)}>
                                <img src={product.image} alt={product.name} className="w-20 h-15 object-cover rounded-md pr-3" />
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;