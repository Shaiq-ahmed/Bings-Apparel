# 🛍️ Bings-Apparel Fashion Store

A modern, premium e-commerce platform built with React and Vite, featuring stunning animations, parallax effects, and a professional user experience inspired by top-tier fashion brands like Nike and Adidas.

![StreetWear Fashion Store](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.0-black?style=for-the-badge)

## ✨ Features

### 🎨 **Modern Design & UX**
- **Premium UI/UX** inspired by Nike and Adidas
- **Glass morphism effects** with backdrop blur
- **Smooth parallax scrolling** in both directions
- **Responsive design** for all devices
- **Professional animations** and transitions

### 🛍️ **E-commerce Features**
- **Product catalog** with advanced filtering
- **Search functionality** with real-time results
- **Shopping cart** with persistent state
- **Wishlist** and favorites
- **Product reviews** and ratings
- **Size selection** and inventory management

### 🎭 **Advanced Animations**
- **Framer Motion** for smooth animations
- **Parallax effects** on scroll
- **Staggered animations** for product grids
- **Hover effects** and micro-interactions
- **Loading states** and skeletons

### 📱 **Performance & UX**
- **Lazy loading** for images
- **Optimized performance** with Vite
- **Progressive loading** states
- **Smooth scrolling** experience
- **Mobile-first** responsive design

### 🎯 **Key Sections**
- **Hero Section** with full-screen carousel
- **Featured Collections** with spotlight products
- **Latest Collections** with category tabs
- **Best Sellers** with featured products
- **Video Section** for brand content
- **Testimonials** with customer reviews
- **Newsletter** subscription
- **About & Contact** pages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Modern component library
- **Lucide React** - Beautiful icons
- **Custom CSS** - Custom animations and effects

### **Animations & Interactions**
- **Framer Motion** - Production-ready motion library
- **Parallax effects** - Smooth scroll animations
- **Micro-interactions** - Hover and click effects

### **State Management**
- **React Context** - Global state management
- **Local Storage** - Persistent data
- **Session Storage** - Temporary data

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vite** - Fast development and building

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Footer.jsx     # Footer component
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Collection.jsx # Collection page
│   │   ├── Aboutus.jsx    # About page
│   │   └── Contactus.jsx  # Contact page
│   ├── context/           # React Context
│   │   ├── ShopContext.jsx
│   │   └── LoadingContext.jsx
│   ├── utils/             # Utility functions
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .env.example          # Environment template
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Red (#EF4444) - Brand color
- **Secondary**: Blue (#3B82F6) - Accent color
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green (#10B981) - Positive actions
- **Warning**: Yellow (#F59E0B) - Cautions
- **Error**: Red (#EF4444) - Errors

### **Typography**
- **Headings**: Inter font family
- **Body**: System font stack
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### **Spacing**
- **Consistent spacing** using Tailwind's spacing scale
- **Responsive padding** and margins
- **Grid gaps** for product layouts

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Testing (if configured)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# App Configuration
VITE_APP_TITLE=StreetWear Fashion Store
VITE_APP_DESCRIPTION=Premium streetwear and fashion essentials
VITE_APP_VERSION=1.0.0

# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG_MODE=false

# External Services
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here

# Development Settings
VITE_DEV_MODE=true
VITE_ENABLE_HOT_RELOAD=true
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎯 Key Features

### **Home Page**
- Full-screen hero carousel with parallax
- Featured collections with spotlight products
- Latest collections with category filtering
- Best sellers with featured products
- Video section for brand content
- Customer testimonials
- Newsletter subscription

### **Collection Page**
- Advanced filtering system
- Real-time search functionality
- Grid/List view toggle
- Sorting options (price, relevance)
- Pagination with animations
- Responsive product grid

### **Product Pages**
- High-quality product images
- Size selection with inventory
- Add to cart functionality
- Wishlist integration
- Related products
- Product reviews

### **User Experience**
- Smooth animations and transitions
- Loading states and skeletons
- Error handling and feedback
- Accessibility features
- Mobile-optimized interactions

## 🔧 Customization

### **Adding New Components**
1. Create component in `src/components/`
2. Import and use in pages
3. Add to routing if needed

### **Styling**
- Use Tailwind CSS classes
- Custom CSS in `src/index.css`
- Component-specific styles in component files

### **Animations**
- Use Framer Motion for animations
- Follow existing patterns for consistency
- Test on different devices

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy Options**
- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop `dist` folder
- **Firebase**: Use Firebase Hosting
- **AWS S3**: Upload to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Nike & Adidas** - Design inspiration
- **Unsplash** - High-quality images
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **Shadcn UI** - Component library

---

**Built with ❤️ using React, Vite, and modern web technologies**

For support, email: support@bingsapparel-store.com
