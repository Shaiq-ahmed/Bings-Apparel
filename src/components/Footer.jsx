import React from 'react';
import { assets } from '../assets/assets/frontend_assets/assets';
import { Phone, Mail, Instagram, Twitter, Facebook, Youtube, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className='relative z-10'>
                {/* Main Footer Content */}
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
                        {/* Brand Section */}
                        <div className='lg:col-span-1'>
                            <Link to='/' className='inline-block mb-6'>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center'>
                                        <span className='text-white font-bold text-lg'>B</span>
                                    </div>
                                    <span className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                                        Shop of SA
                                    </span>
                                </div>
                            </Link>
                            <p className='text-gray-300 leading-relaxed mb-6 text-sm'>
                                Elevate your style with premium streetwear that speaks to the culture. 
                                From the streets to the runway, we bring you the latest trends with unmatched quality.
                            </p>
                            
                            {/* Social Media */}
                            <div className='flex space-x-4'>
                                <a href="#" className='w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 group'>
                                    <Instagram className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                </a>
                                <a href="#" className='w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group'>
                                    <Twitter className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                </a>
                                <a href="#" className='w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group'>
                                    <Facebook className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                </a>
                                <a href="#" className='w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group'>
                                    <Youtube className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className='text-lg font-bold mb-6 text-white'>Quick Links</h3>
                            <ul className='space-y-3'>
                                <li>
                                    <Link to='/' className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/collection' className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Shop Collection
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className='text-lg font-bold mb-6 text-white'>Support</h3>
                            <ul className='space-y-3'>
                                <li>
                                    <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Shipping Info
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Returns & Exchanges
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Size Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group'>
                                        <span className='w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Newsletter */}
                        <div>
                            <h3 className='text-lg font-bold mb-6 text-white'>Stay Connected</h3>
                            
                            {/* Contact Info */}
                            <div className='space-y-3 mb-6'>
                                <div className='flex items-center text-gray-300 text-sm'>
                                    <MapPin className='w-4 h-4 mr-3 text-red-500' />
                                    <span>123 Fashion St, NYC 10001</span>
                                </div>
                                <div className='flex items-center text-gray-300 text-sm'>
                                    <Phone className='w-4 h-4 mr-3 text-red-500' />
                                    <span>+1-212-456-7890</span>
                                </div>
                                <div className='flex items-center text-gray-300 text-sm'>
                                    <Mail className='w-4 h-4 mr-3 text-red-500' />
                                    <span>contact@shopofsa.com</span>
                                </div>
                                <div className='flex items-center text-gray-300 text-sm'>
                                    <Clock className='w-4 h-4 mr-3 text-red-500' />
                                    <span>Mon-Fri: 9AM-6PM</span>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4 className='text-sm font-semibold mb-3 text-white'>Get the Latest Drops</h4>
                                <div className='flex'>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className='flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-red-500'
                                    />
                                    <button className='px-4 py-2 bg-red-500 hover:bg-red-600 rounded-r-md transition-colors duration-300'>
                                        <ArrowRight className='w-4 h-4 text-white' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='border-t border-gray-800'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <p className='text-gray-400 text-sm'>
                                © 2024 Shop of SA. All Rights Reserved.
                            </p>
                            <div className='flex space-x-6 text-sm'>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Terms</a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Privacy</a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
