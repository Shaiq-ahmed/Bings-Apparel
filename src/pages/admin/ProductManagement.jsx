import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Upload,
  Save,
  X,
  Package,
  DollarSign,
  Star,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const ProductManagement = () => {
  const { products } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productList, setProductList] = useState(products);

  // New product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subCategory: '',
    sizes: [],
    sizeQuantities: {},
    bestseller: false,
    discount: 0,
    image: ['', '', '']
  });

  const categories = ['Women', 'Men', 'Kids'];
  const subCategories = ['TopWear', 'BottomWear', 'WinterWear'];
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // Filter products
  const filteredProducts = productList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const product = {
      _id: `NEW_${Date.now()}`,
      ...newProduct,
      price: parseFloat(newProduct.price),
      discount: parseInt(newProduct.discount) || 0
    };

    setProductList([...productList, product]);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      subCategory: '',
      sizes: [],
      sizeQuantities: {},
      bestseller: false,
      discount: 0,
      image: ['', '', '']
    });
    setShowAddModal(false);
    toast.success('Product added successfully!');
  };

  const handleEditProduct = (product) => {
    setEditingProduct({ ...product });
  };

  const handleUpdateProduct = () => {
    setProductList(productList.map(p => 
      p._id === editingProduct._id ? editingProduct : p
    ));
    setEditingProduct(null);
    toast.success('Product updated successfully!');
  };

  const handleDeleteProduct = (productId) => {
    setProductList(productList.filter(p => p._id !== productId));
    toast.success('Product deleted successfully!');
  };

  const handleSizeQuantityChange = (size, quantity, isEditing = false) => {
    const target = isEditing ? editingProduct : newProduct;
    const setter = isEditing ? setEditingProduct : setNewProduct;
    
    setter({
      ...target,
      sizeQuantities: {
        ...target.sizeQuantities,
        [size]: parseInt(quantity) || 0
      }
    });
  };

  const getStockStatus = (product) => {
    const totalStock = Object.values(product.sizeQuantities).reduce((sum, qty) => sum + qty, 0);
    if (totalStock === 0) return { status: 'Out of Stock', color: 'bg-red-100 text-red-800' };
    if (totalStock < 10) return { status: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { status: 'In Stock', color: 'bg-green-100 text-green-800' };
  };

  const ProductForm = ({ product, setProduct, onSave, onCancel, isEditing = false }) => (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                placeholder="Enter product name"
              />
            </div>
            <div>
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              placeholder="Enter product description"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Category *</Label>
              <Select value={product.category} onValueChange={(value) => setProduct({ ...product, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sub Category</Label>
              <Select value={product.subCategory} onValueChange={(value) => setProduct({ ...product, subCategory: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sub category" />
                </SelectTrigger>
                <SelectContent>
                  {subCategories.map(subCat => (
                    <SelectItem key={subCat} value={subCat}>{subCat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="discount">Discount (%)</Label>
              <Input
                id="discount"
                type="number"
                value={product.discount}
                onChange={(e) => setProduct({ ...product, discount: e.target.value })}
                placeholder="0"
                min="0"
                max="100"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="bestseller"
              checked={product.bestseller}
              onCheckedChange={(checked) => setProduct({ ...product, bestseller: checked })}
            />
            <Label htmlFor="bestseller">Mark as bestseller</Label>
          </div>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <div className="space-y-4">
            {product.image.map((img, index) => (
              <div key={index}>
                <Label htmlFor={`image-${index}`}>Image {index + 1} URL</Label>
                <Input
                  id={`image-${index}`}
                  value={img}
                  onChange={(e) => {
                    const newImages = [...product.image];
                    newImages[index] = e.target.value;
                    setProduct({ ...product, image: newImages });
                  }}
                  placeholder="Enter image URL"
                />
                {img && (
                  <img src={img} alt={`Preview ${index + 1}`} className="w-24 h-24 object-cover rounded-lg mt-2" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <div>
            <Label>Available Sizes & Quantities</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {availableSizes.map(size => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={product.sizes?.includes(size)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setProduct({
                          ...product,
                          sizes: [...(product.sizes || []), size]
                        });
                      } else {
                        setProduct({
                          ...product,
                          sizes: (product.sizes || []).filter(s => s !== size)
                        });
                      }
                    }}
                  />
                  <Label htmlFor={`size-${size}`} className="w-8">{size}</Label>
                  <Input
                    type="number"
                    value={product.sizeQuantities?.[size] || ''}
                    onChange={(e) => handleSizeQuantityChange(size, e.target.value, isEditing)}
                    placeholder="Qty"
                    min="0"
                    disabled={!product.sizes?.includes(size)}
                    className="w-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          {isEditing ? 'Update Product' : 'Add Product'}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogTrigger asChild>
            <Button className="bg-black text-white hover:bg-gray-800">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <ProductForm
              product={newProduct}
              setProduct={setNewProduct}
              onSave={handleAddProduct}
              onCancel={() => setShowAddModal(false)}
            />
          </DialogContent>
        </Dialog>
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
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => {
          const stockStatus = getStockStatus(product);
          return (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={product.image[0] || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop'}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 space-y-1">
                    <Badge className={stockStatus.color}>
                      {stockStatus.status}
                    </Badge>
                    {product.bestseller && (
                      <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Bestseller
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.discount > 0 && (
                          <span className="text-sm text-green-600 ml-2">-{product.discount}%</span>
                        )}
                      </div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>

                    <div className="text-xs text-gray-500">
                      Total Stock: {Object.values(product.sizeQuantities).reduce((sum, qty) => sum + qty, 0)}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditProduct(product)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>
            <ProductForm
              product={editingProduct}
              setProduct={setEditingProduct}
              onSave={handleUpdateProduct}
              onCancel={() => setEditingProduct(null)}
              isEditing={true}
            />
          </DialogContent>
        </Dialog>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
