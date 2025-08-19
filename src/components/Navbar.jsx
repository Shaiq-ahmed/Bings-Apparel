"use client"

import React, { useState, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu, ShoppingCart, User, LogOut } from 'lucide-react'
import SearchAutocomplete from './SearchAutocomplete'

const Navbar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const { setSearchTerm, getCartCount, isLoggedIn, userProfile, logout } = useContext(ShopContext)
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        const searchTerm = e.target.search.value
        setSearchTerm(searchTerm)
        navigate('/search-results')
    }

    const handleLogout = () => {
        logout() // Implement this function in your ShopContext
        navigate('/')
    }

    const handleNavClick = (path) => {
        navigate(path);
        setIsSheetOpen(false); // Close the sidebar
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/collection' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const renderAuthButtons = () => (
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/login')} className="w-full">Log in</Button>
            <Button onClick={() => navigate('/signup')} className="w-full">Sign up</Button>
        </div>
    )

    const renderProfileMenu = () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Avatar>
                        <AvatarImage src={userProfile?.avatar} />
                        <AvatarFallback>
                            {userProfile?.name?.charAt(0).toUpperCase() || <User className="h-5 w-5" />}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                {userProfile && (
                    <>
                        <div className="flex items-center gap-3 p-3 border-b">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={userProfile.avatar} />
                                <AvatarFallback className="text-lg">
                                    {userProfile.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="font-semibold text-sm">{userProfile.name}</p>
                                <p className="text-xs text-muted-foreground">{userProfile.email}</p>
                                <p className="text-xs text-blue-600 font-medium">{userProfile.membershipLevel} Member</p>
                            </div>
                        </div>
                        <div className="p-2 text-xs text-muted-foreground border-b">
                            <div className="flex justify-between">
                                <span>Total Orders:</span>
                                <span className="font-medium">{userProfile.totalOrders}</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span>Member Since:</span>
                                <span className="font-medium">{new Date(userProfile.joinDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </>
                )}
                <DropdownMenuItem onSelect={() => navigate('/profile')} className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    My Profile
                </DropdownMenuItem>
                {userProfile?.isAdmin && (
                    <DropdownMenuItem onSelect={() => navigate('/admin')} className="flex items-center gap-2 text-blue-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Admin Panel
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem onSelect={() => navigate('/orders')} className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Orders
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate('/wishlist')} className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 py-2 md:py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="flex flex-col space-y-4 mt-6">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.name}
                                            variant="ghost"
                                            onClick={() => handleNavClick(item.path)}
                                            className="text-left"
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                    <hr className="my-4" />
                                    <Button
                                        variant="outline"
                                        onClick={() => handleNavClick("/profile")}
                                        className="w-full"
                                    >
                                        My Profile
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => handleNavClick("/orders")}
                                        className="w-full"
                                    >
                                        Orders
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => handleNavClick("/wishlist")}
                                        className="w-full"
                                    >
                                        Wishlist
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => {
                                            handleNavClick("/");
                                            logout();
                                        }}
                                        className="w-full"
                                    >
                                        Log out
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link to='/' className="text-xl md:text-2xl font-bold">Bings Drip</Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors hover:text-primary
                                        ${isActive ? 'text-primary' : 'text-muted-foreground'}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <Button variant="ghost" size="icon" onClick={() => setShowSearchModal(true)}>
                            <Search className="h-5 w-5" />
                        </Button>

                        <Link to="/cart" className="relative">
                            <Button variant="ghost" size="icon">
                                <ShoppingCart className="h-5 w-5" />
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Button>
                        </Link>

                        {isLoggedIn ? renderProfileMenu() : (
                            <div className="hidden md:block">
                                {renderAuthButtons()}
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Search Autocomplete Modal */}
            {showSearchModal && (
                <SearchAutocomplete onClose={() => setShowSearchModal(false)} />
            )}
        </nav>
    )
}

export default Navbar
