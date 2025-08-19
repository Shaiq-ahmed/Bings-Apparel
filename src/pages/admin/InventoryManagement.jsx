import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Progress } from '../../components/ui/progress';
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  Package, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  RefreshCw,
  Edit,
  Plus,
  Minus,
  Archive,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const InventoryManagement = () => {
  const { products } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showRestockModal, setShowRestockModal] = useState(false);
  const [restockQuantity, setRestockQuantity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  // Calculate inventory statistics
  const inventoryStats = {
    totalProducts: products.length,
    lowStockItems: products.filter(p => 
      Object.values(p.sizeQuantities).some(qty => qty < 5)
    ).length,
    outOfStockItems: products.filter(p => 
      Object.values(p.sizeQuantities).every(qty => qty === 0)
    ).length,
    totalValue: products.reduce((sum, p) => {
      const totalQty = Object.values(p.sizeQuantities).reduce((s, q) => s + q, 0);
      return sum + (p.price * totalQty);
    }, 0)
  };

  const stockLevels = {
    outOfStock: { label: 'Out of Stock', color: 'bg-red-100 text-red-800', threshold: 0 },
    critical: { label: 'Critical', color: 'bg-orange-100 text-orange-800', threshold: 1 },
    low: { label: 'Low Stock', color: 'bg-yellow-100 text-yellow-800', threshold: 5 },
    normal: { label: 'Normal', color: 'bg-green-100 text-green-800', threshold: 10 }
  };

  const getStockStatus = (product) => {
    const totalStock = Object.values(product.sizeQuantities).reduce((sum, qty) => sum + qty, 0);
    const minStock = Math.min(...Object.values(product.sizeQuantities));
    
    if (totalStock === 0) return stockLevels.outOfStock;
    if (minStock <= 1) return stockLevels.critical;
    if (minStock <= 5) return stockLevels.low;
    return stockLevels.normal;
  };

  const getStockPercentage = (product) => {
    const totalStock = Object.values(product.sizeQuantities).reduce((sum, qty) => sum + qty, 0);
    const maxCapacity = 100; // Assume 100 is full capacity
    return Math.min((totalStock / maxCapacity) * 100, 100);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    let matchesStock = true;
    if (stockFilter !== 'all') {
      const status = getStockStatus(product);
      matchesStock = status.label.toLowerCase().includes(stockFilter.toLowerCase());
    }
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleRestock = () => {
    if (!selectedProduct || !selectedSize || !restockQuantity) {
      toast.error('Please fill in all fields');
      return;
    }

    const quantity = parseInt(restockQuantity);
    if (quantity <= 0) {
      toast.error('Please enter a valid quantity');
      return;
    }

    // This would normally update the backend
    toast.success(`Added ${quantity} units of ${selectedProduct.name} (Size: ${selectedSize})`);
    setShowRestockModal(false);
    setRestockQuantity('');
    setSelectedSize('');
    setSelectedProduct(null);
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = "text-blue-600" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {trend && (
                <p className="text-sm text-gray-500 mt-1">{trend}</p>
              )}
            </div>
            <div className={`p-3 rounded-full bg-gray-100 ${color}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const RestockModal = () => (
    <Dialog open={showRestockModal} onOpenChange={setShowRestockModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Restock Product</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product
            </label>
            <p className="text-gray-900 font-semibold">{selectedProduct?.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {selectedProduct?.sizes?.map(size => (
                  <SelectItem key={size} value={size}>
                    {size} (Current: {selectedProduct.sizeQuantities[size] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity to Add
            </label>
            <Input
              type="number"
              value={restockQuantity}
              onChange={(e) => setRestockQuantity(e.target.value)}
              placeholder="Enter quantity"
              min="1"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setShowRestockModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleRestock}>
              <Plus className="w-4 h-4 mr-2" />
              Add Stock
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage your product inventory</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            <BarChart3 className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={inventoryStats.totalProducts}
          icon={Package}
          color="text-blue-600"
          trend="Active inventory items"
        />
        <StatCard
          title="Low Stock Alerts"
          value={inventoryStats.lowStockItems}
          icon={AlertTriangle}
          color="text-orange-600"
          trend="Require attention"
        />
        <StatCard
          title="Out of Stock"
          value={inventoryStats.outOfStockItems}
          icon={TrendingDown}
          color="text-red-600"
          trend="Unavailable items"
        />
        <StatCard
          title="Inventory Value"
          value={`$${inventoryStats.totalValue.toLocaleString()}`}
          icon={TrendingUp}
          color="text-green-600"
          trend="Total stock value"
        />
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectContent>
            </Select>
            <Select value={stockFilter} onValueChange={setStockFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Stock Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stock Levels</SelectItem>
                <SelectItem value="out of stock">Out of Stock</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">SKU</th>
                  <th className="text-left py-3 px-4">Stock Level</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Value</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => {
                  const stockStatus = getStockStatus(product);
                  const totalStock = Object.values(product.sizeQuantities).reduce((sum, qty) => sum + qty, 0);
                  const stockPercentage = getStockPercentage(product);
                  
                  return (
                    <motion.tr
                      key={product._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">${product.price}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-mono text-sm">{product._id}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{totalStock} units</span>
                          </div>
                          <Progress value={stockPercentage} className="h-2 w-24" />
                          <div className="text-xs text-gray-500">
                            {Object.entries(product.sizeQuantities).map(([size, qty]) => (
                              <span key={size} className="mr-2">
                                {size}: {qty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={stockStatus.color}>
                          {stockStatus.label}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-semibold">
                          ${(product.price * totalStock).toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedProduct(product);
                              setShowRestockModal(true);
                            }}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Restock Modal */}
      <RestockModal />
    </div>
  );
};

export default InventoryManagement;
