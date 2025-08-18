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

const Navbar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const { setSearchTerm, getCartCount, isLoggedIn, logout } = useContext(ShopContext) // Assume we have isLoggedIn and logout in ShopContext
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
                        <AvatarImage src="/path-to-avatar.jpg" />
                        <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => navigate('/profile')}>
                    My Profile
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate('/orders')}>
                    Orders
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate('/wishlist')}>
                    Wishlist
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
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
                        <Link to='/' className="text-xl md:text-2xl font-bold">Shop of SA</Link>
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
                        <Button variant="ghost" size="icon" onClick={() => setIsSearchVisible(!isSearchVisible)}>
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

                {/* Search Bar */}
                {isSearchVisible && (
                    <form onSubmit={handleSearch} className="mt-4">
                        <div className="flex">
                            <Input
                                type="search"
                                name="search"
                                placeholder="Search products..."
                                className="flex-grow"
                            />
                            <Button type="submit" className="ml-2">Search</Button>
                        </div>
                    </form>
                )}
            </div>
        </nav>
    )
}

export default Navbar
