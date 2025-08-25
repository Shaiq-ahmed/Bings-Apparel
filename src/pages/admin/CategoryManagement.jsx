import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Save,
  Folder,
  FolderOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const CategoryForm = ({ category, setCategory, onSave, onCancel, isEditing = false }) => {
  const handleFieldChange = useCallback((field, value) => {
    setCategory(prev => ({ ...prev, [field]: value }));
  }, [setCategory]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Category Name *</Label>
        <Input
          id="name"
          value={category.name || ''}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          placeholder="Enter category name"
        />
      </div>
      
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={category.description || ''}
          onChange={(e) => handleFieldChange('description', e.target.value)}
          placeholder="Enter category description"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="slug">URL Slug</Label>
        <Input
          id="slug"
          value={category.slug || ''}
          onChange={(e) => handleFieldChange('slug', e.target.value)}
          placeholder="category-url-slug"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          {isEditing ? 'Update Category' : 'Add Category'}
        </Button>
      </div>
    </div>
  );
};

const SubCategoryForm = ({ subCategory, setSubCategory, onSave, onCancel, categories, isEditing = false }) => {
  const handleFieldChange = useCallback((field, value) => {
    setSubCategory(prev => ({ ...prev, [field]: value }));
  }, [setSubCategory]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="parent">Parent Category *</Label>
        <select
          id="parent"
          value={subCategory.parentId || ''}
          onChange={(e) => handleFieldChange('parentId', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select parent category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="name">Sub-Category Name *</Label>
        <Input
          id="name"
          value={subCategory.name || ''}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          placeholder="Enter sub-category name"
        />
      </div>
      
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={subCategory.description || ''}
          onChange={(e) => handleFieldChange('description', e.target.value)}
          placeholder="Enter sub-category description"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="slug">URL Slug</Label>
        <Input
          id="slug"
          value={subCategory.slug || ''}
          onChange={(e) => handleFieldChange('slug', e.target.value)}
          placeholder="sub-category-url-slug"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          {isEditing ? 'Update Sub-Category' : 'Add Sub-Category'}
        </Button>
      </div>
    </div>
  );
};

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubCategoryModal, setShowAddSubCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSubCategory, setEditingSubCategory] = useState(null);

  // Initial categories and subcategories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Women', description: 'Women\'s clothing and accessories', slug: 'women', createdAt: new Date().toISOString() },
    { id: 2, name: 'Men', description: 'Men\'s clothing and accessories', slug: 'men', createdAt: new Date().toISOString() },
    { id: 3, name: 'Kids', description: 'Children\'s clothing and accessories', slug: 'kids', createdAt: new Date().toISOString() }
  ]);

  const [subCategories, setSubCategories] = useState([
    { id: 1, parentId: 1, name: 'TopWear', description: 'Women\'s tops, shirts, blouses', slug: 'women-topwear', createdAt: new Date().toISOString() },
    { id: 2, parentId: 1, name: 'BottomWear', description: 'Women\'s pants, skirts, shorts', slug: 'women-bottomwear', createdAt: new Date().toISOString() },
    { id: 3, parentId: 1, name: 'WinterWear', description: 'Women\'s winter clothing', slug: 'women-winterwear', createdAt: new Date().toISOString() },
    { id: 4, parentId: 2, name: 'TopWear', description: 'Men\'s shirts, t-shirts, tops', slug: 'men-topwear', createdAt: new Date().toISOString() },
    { id: 5, parentId: 2, name: 'BottomWear', description: 'Men\'s pants, jeans, shorts', slug: 'men-bottomwear', createdAt: new Date().toISOString() },
    { id: 6, parentId: 2, name: 'WinterWear', description: 'Men\'s winter clothing', slug: 'men-winterwear', createdAt: new Date().toISOString() },
    { id: 7, parentId: 3, name: 'TopWear', description: 'Kids\' shirts, tops', slug: 'kids-topwear', createdAt: new Date().toISOString() },
    { id: 8, parentId: 3, name: 'BottomWear', description: 'Kids\' pants, shorts', slug: 'kids-bottomwear', createdAt: new Date().toISOString() }
  ]);

  // New category form state
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    slug: ''
  });

  // New sub-category form state
  const [newSubCategory, setNewSubCategory] = useState({
    parentId: '',
    name: '',
    description: '',
    slug: ''
  });

  // Filter categories and subcategories
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSubCategories = subCategories.filter(subCategory =>
    subCategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subCategory.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter(sub => sub.parentId === categoryId);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  const handleAddCategory = () => {
    if (!newCategory.name) {
      toast.error('Please enter a category name');
      return;
    }

    const category = {
      id: Date.now(),
      ...newCategory,
      createdAt: new Date().toISOString()
    };

    setCategories([...categories, category]);
    setNewCategory({ name: '', description: '', slug: '' });
    setShowAddCategoryModal(false);
    toast.success('Category added successfully!');
  };

  const handleAddSubCategory = () => {
    if (!newSubCategory.name || !newSubCategory.parentId) {
      toast.error('Please fill in all required fields');
      return;
    }

    const subCategory = {
      id: Date.now(),
      ...newSubCategory,
      parentId: parseInt(newSubCategory.parentId),
      createdAt: new Date().toISOString()
    };

    setSubCategories([...subCategories, subCategory]);
    setNewSubCategory({ parentId: '', name: '', description: '', slug: '' });
    setShowAddSubCategoryModal(false);
    toast.success('Sub-category added successfully!');
  };

  const handleEditCategory = (category) => {
    setEditingCategory({ ...category });
  };

  const handleUpdateCategory = () => {
    setCategories(categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    ));
    setEditingCategory(null);
    toast.success('Category updated successfully!');
  };

  const handleEditSubCategory = (subCategory) => {
    setEditingSubCategory({ ...subCategory });
  };

  const handleUpdateSubCategory = () => {
    setSubCategories(subCategories.map(sub => 
      sub.id === editingSubCategory.id ? editingSubCategory : sub
    ));
    setEditingSubCategory(null);
    toast.success('Sub-category updated successfully!');
  };

  const handleDeleteCategory = (categoryId) => {
    // Check if category has subcategories
    const hasSubCategories = subCategories.some(sub => sub.parentId === categoryId);
    if (hasSubCategories) {
      toast.error('Cannot delete category with existing sub-categories');
      return;
    }

    setCategories(categories.filter(cat => cat.id !== categoryId));
    toast.success('Category deleted successfully!');
  };

  const handleDeleteSubCategory = (subCategoryId) => {
    setSubCategories(subCategories.filter(sub => sub.id !== subCategoryId));
    toast.success('Sub-category deleted successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
          <p className="text-gray-600 mt-1">Manage product categories and sub-categories</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showAddCategoryModal} onOpenChange={setShowAddCategoryModal}>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
              </DialogHeader>
              <CategoryForm
                category={newCategory}
                setCategory={setNewCategory}
                onSave={handleAddCategory}
                onCancel={() => setShowAddCategoryModal(false)}
              />
            </DialogContent>
          </Dialog>

          <Dialog open={showAddSubCategoryModal} onOpenChange={setShowAddSubCategoryModal}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Sub-Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Sub-Category</DialogTitle>
              </DialogHeader>
              <SubCategoryForm
                subCategory={newSubCategory}
                setSubCategory={setNewSubCategory}
                onSave={handleAddSubCategory}
                onCancel={() => setShowAddSubCategoryModal(false)}
                categories={categories}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search categories and sub-categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditCategory(category)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sub-categories:</span>
                    <Badge variant="outline">
                      {getSubCategoriesForCategory(category.id).length}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {getSubCategoriesForCategory(category.id).map(sub => (
                      <Badge key={sub.id} variant="secondary" className="text-xs">
                        {sub.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Sub-Categories List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Folder className="w-5 h-5" />
            All Sub-Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredSubCategories.map(subCategory => (
              <div key={subCategory.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{subCategory.name}</h4>
                    <Badge variant="outline">{getCategoryName(subCategory.parentId)}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{subCategory.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditSubCategory(subCategory)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteSubCategory(subCategory.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Category Modal */}
      {editingCategory && (
        <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <CategoryForm
              category={editingCategory}
              setCategory={setEditingCategory}
              onSave={handleUpdateCategory}
              onCancel={() => setEditingCategory(null)}
              isEditing={true}
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Sub-Category Modal */}
      {editingSubCategory && (
        <Dialog open={!!editingSubCategory} onOpenChange={() => setEditingSubCategory(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Sub-Category</DialogTitle>
            </DialogHeader>
            <SubCategoryForm
              subCategory={editingSubCategory}
              setSubCategory={setEditingSubCategory}
              onSave={handleUpdateSubCategory}
              onCancel={() => setEditingSubCategory(null)}
              categories={categories}
              isEditing={true}
            />
          </DialogContent>
        </Dialog>
      )}

      {(filteredCategories.length === 0 && filteredSubCategories.length === 0) && (
        <div className="text-center py-12">
          <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No categories found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
