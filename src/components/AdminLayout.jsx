import React, { useState, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  Store,
  Tags,
  Truck,
  AlertTriangle,
  FileText,
  Image as ImageIcon,
  CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userProfile, logout } = useContext(ShopContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      badge: null
    },
    {
      name: 'Products',
      href: '/admin/products',
      icon: Package,
      badge: null
    },
    {
      name: 'Categories',
      href: '/admin/categories',
      icon: Tags,
      badge: null
    },
    {
      name: 'Orders',
      href: '/admin/orders',
      icon: ShoppingCart,
      badge: { count: 12, color: 'bg-orange-500' }
    },
    {
      name: 'Customers',
      href: '/admin/customers',
      icon: Users,
      badge: null
    },
    {
      name: 'Inventory',
      href: '/admin/inventory',
      icon: Store,
      badge: { count: 3, color: 'bg-red-500' }
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: BarChart3,
      badge: null
    },
    {
      name: 'Media',
      href: '/admin/media',
      icon: ImageIcon,
      badge: null
    },
    {
      name: 'Reports',
      href: '/admin/reports',
      icon: FileText,
      badge: null
    },
    {
      name: 'Shipping',
      href: '/admin/shipping',
      icon: Truck,
      badge: null
    },
    {
      name: 'Payments',
      href: '/admin/payments',
      icon: CreditCard,
      badge: null
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      badge: null
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActiveRoute = (href) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-200">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <Store className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Bings Drip</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = isActiveRoute(item.href);
          return (
            <motion.button
              key={item.name}
              onClick={() => {
                navigate(item.href);
                setSidebarOpen(false);
              }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-black text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{item.name}</span>
              {item.badge && (
                <Badge 
                  className={`ml-auto ${item.badge.color} text-white text-xs`}
                >
                  {item.badge.count}
                </Badge>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <Avatar className="w-10 h-10">
            <AvatarImage src={userProfile?.avatar} />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {userProfile?.name || 'Admin User'}
            </p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-500 hover:text-red-600"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-white shadow-lg">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
            </Sheet>

            {/* Search */}
            <div className="flex-1 flex items-center gap-4">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, orders, customers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </Button>

              <div className="w-px h-6 bg-gray-300"></div>

              <Avatar className="w-8 h-8">
                <AvatarImage src={userProfile?.avatar} />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
