# Admin Panel Access Instructions

## How to Access the Admin Panel

### Admin Login Credentials
- **Email**: `admin@bingsdrip.com`
- **Password**: `admin123`

### Steps to Access:
1. Go to the login page (`/login`)
2. Enter the admin credentials above
3. Click "Login"
4. You will be automatically redirected to the admin panel (`/admin`)

### Alternative Access:
- Once logged in as admin, you can access the admin panel via the user dropdown menu in the navbar
- Look for the "Admin Panel" option with a settings icon

## Admin Panel Features

### 🏠 Dashboard
- Comprehensive analytics overview
- Revenue, orders, and customer metrics
- Sales charts and category distribution
- Recent orders and top products
- Low stock alerts

### 📦 Product Management
- Complete CRUD operations for products
- Add/edit/delete products
- Manage product images, pricing, categories
- Size and quantity management
- Bulk operations and filtering

### 🛒 Order Management  
- View and manage all customer orders
- Update order status (Processing → Shipped → Delivered)
- Detailed order information and customer details
- Order history and tracking information
- Communication tools

### 👥 Customer Management
- Complete customer database
- View customer profiles and statistics
- Membership levels and spending analytics
- Customer preferences and communication settings
- Account status management (Active/Inactive/Suspended)

### 📊 Inventory Management
- Real-time stock level monitoring
- Low stock and out-of-stock alerts
- Restock functionality with size selection
- Inventory value tracking
- Stock level analytics and reporting

### 🎨 Modern UI Features
- Responsive design for all screen sizes
- Real-time data updates
- Smooth animations and transitions
- Professional admin interface
- Dark mode support via Tailwind CSS

## Navigation Structure
```
/admin - Dashboard
/admin/products - Product Management
/admin/orders - Order Management  
/admin/customers - Customer Management
/admin/inventory - Inventory Management
```

## Security Features
- Admin authentication required
- Route protection for admin pages
- Separate admin layout (no public navbar/footer)
- Session management with localStorage

## Technical Stack
- React 18 with TypeScript support
- Tailwind CSS for styling
- Shadcn/UI components
- Framer Motion animations
- Recharts for analytics
- React Router for navigation
- Context API for state management

---

**Note**: This is a demo implementation. In a production environment, you would want to implement proper authentication with JWT tokens, role-based permissions, and secure API endpoints.
