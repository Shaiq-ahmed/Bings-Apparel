import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Ban,
  Users,
  UserPlus,
  Mail,
  Phone,
  Calendar,
  ShoppingBag,
  DollarSign,
  Star,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const CustomerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Mock customers data
  const [customers, setCustomers] = useState([
    {
      id: 'CUST-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      status: 'Active',
      joinDate: '2023-01-15T10:30:00Z',
      lastOrder: '2024-01-15T14:20:00Z',
      totalOrders: 24,
      totalSpent: 1247.50,
      membershipLevel: 'Gold',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      },
      preferences: {
        newsletter: true,
        smsNotifications: false,
        emailNotifications: true
      }
    },
    {
      id: 'CUST-002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 (555) 987-6543',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      status: 'Active',
      joinDate: '2023-03-22T16:45:00Z',
      lastOrder: '2024-01-14T09:15:00Z',
      totalOrders: 18,
      totalSpent: 892.30,
      membershipLevel: 'Silver',
      address: {
        street: '456 Oak Avenue',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        country: 'USA'
      },
      preferences: {
        newsletter: true,
        smsNotifications: true,
        emailNotifications: true
      }
    },
    {
      id: 'CUST-003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 (555) 456-7890',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      status: 'Inactive',
      joinDate: '2022-11-08T12:00:00Z',
      lastOrder: '2023-12-20T18:30:00Z',
      totalOrders: 7,
      totalSpent: 345.80,
      membershipLevel: 'Bronze',
      address: {
        street: '789 Pine Street',
        city: 'Chicago',
        state: 'IL',
        zipCode: '60601',
        country: 'USA'
      },
      preferences: {
        newsletter: false,
        smsNotifications: false,
        emailNotifications: true
      }
    },
    {
      id: 'CUST-004',
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1 (555) 321-0987',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      status: 'Active',
      joinDate: '2023-07-12T14:15:00Z',
      lastOrder: '2024-01-12T11:45:00Z',
      totalOrders: 31,
      totalSpent: 2156.90,
      membershipLevel: 'Platinum',
      address: {
        street: '321 Elm Drive',
        city: 'Miami',
        state: 'FL',
        zipCode: '33101',
        country: 'USA'
      },
      preferences: {
        newsletter: true,
        smsNotifications: true,
        emailNotifications: true
      }
    },
    {
      id: 'CUST-005',
      name: 'Alex Chen',
      email: 'alex@example.com',
      phone: '+1 (555) 654-3210',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      status: 'Suspended',
      joinDate: '2023-05-30T08:20:00Z',
      lastOrder: '2023-12-01T15:10:00Z',
      totalOrders: 3,
      totalSpent: 89.99,
      membershipLevel: 'Bronze',
      address: {
        street: '654 Cedar Lane',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101',
        country: 'USA'
      },
      preferences: {
        newsletter: false,
        smsNotifications: false,
        emailNotifications: false
      }
    }
  ]);

  const statusOptions = [
    { value: 'all', label: 'All Customers' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Suspended', label: 'Suspended' }
  ];

  const membershipLevels = {
    Bronze: { color: 'bg-amber-100 text-amber-800', icon: '🥉' },
    Silver: { color: 'bg-gray-100 text-gray-800', icon: '🥈' },
    Gold: { color: 'bg-yellow-100 text-yellow-800', icon: '🥇' },
    Platinum: { color: 'bg-purple-100 text-purple-800', icon: '💎' }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Suspended': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const updateCustomerStatus = (customerId, newStatus) => {
    setCustomers(customers.map(customer => 
      customer.id === customerId ? { ...customer, status: newStatus } : customer
    ));
    toast.success(`Customer status updated to ${newStatus}`);
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const CustomerDetailsModal = ({ customer, onClose }) => (
    <Dialog open={!!customer} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Users className="w-6 h-6" />
            Customer Details - {customer?.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 mb-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={customer?.avatar} />
                      <AvatarFallback className="text-lg">{customer?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-semibold">{customer?.name}</h3>
                      <p className="text-gray-600">{customer?.email}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={getStatusColor(customer?.status)}>
                          {customer?.status}
                        </Badge>
                        <Badge className={membershipLevels[customer?.membershipLevel]?.color}>
                          {membershipLevels[customer?.membershipLevel]?.icon}
                          {customer?.membershipLevel}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-900">${customer?.totalSpent}</p>
                      <p className="text-sm text-blue-600">Total Spent</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <ShoppingBag className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-900">{customer?.totalOrders}</p>
                      <p className="text-sm text-green-600">Total Orders</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-purple-900">{formatDate(customer?.joinDate)}</p>
                      <p className="text-sm text-purple-600">Member Since</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-orange-900">${(customer?.totalSpent / customer?.totalOrders).toFixed(2)}</p>
                      <p className="text-sm text-orange-600">Avg Order Value</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Contact Information
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {customer?.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {customer?.phone}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Address
                      </h4>
                      <div className="space-y-1 text-gray-600">
                        <p>{customer?.address?.street}</p>
                        <p>{customer?.address?.city}, {customer?.address?.state} {customer?.address?.zipCode}</p>
                        <p>{customer?.address?.country}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mock recent orders */}
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-semibold">#ORD-{String(index + 1).padStart(3, '0')}</p>
                          <p className="text-sm text-gray-600">
                            {formatDate(new Date(Date.now() - index * 86400000).toISOString())}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${(Math.random() * 200 + 50).toFixed(2)}</p>
                          <Badge className="bg-green-100 text-green-800">Delivered</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Newsletter Subscription</p>
                        <p className="text-sm text-gray-600">Receive product updates and promotions</p>
                      </div>
                      <Badge className={customer?.preferences?.newsletter ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {customer?.preferences?.newsletter ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Order updates via text message</p>
                      </div>
                      <Badge className={customer?.preferences?.smsNotifications ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {customer?.preferences?.smsNotifications ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">Order confirmations and updates</p>
                      </div>
                      <Badge className={customer?.preferences?.emailNotifications ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {customer?.preferences?.emailNotifications ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Status Management</h4>
                      <div className="flex gap-2">
                        <Button 
                          variant={customer?.status === 'Active' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => updateCustomerStatus(customer?.id, 'Active')}
                        >
                          Activate
                        </Button>
                        <Button 
                          variant={customer?.status === 'Inactive' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => updateCustomerStatus(customer?.id, 'Inactive')}
                        >
                          Deactivate
                        </Button>
                        <Button 
                          variant={customer?.status === 'Suspended' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => updateCustomerStatus(customer?.id, 'Suspended')}
                          className="text-red-600 hover:text-red-700"
                        >
                          Suspend
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Communication</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Customer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-1">Manage and view customer information</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-blue-600">
            {filteredCustomers.length} customers
          </Badge>
          <Button className="bg-black text-white hover:bg-gray-800">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or customer ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(status => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={customer.avatar} />
                    <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{customer.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{customer.email}</p>
                    <p className="text-xs text-gray-500">{customer.id}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(customer.status)}>
                      {customer.status}
                    </Badge>
                    <Badge className={membershipLevels[customer.membershipLevel]?.color}>
                      {membershipLevels[customer.membershipLevel]?.icon}
                      {customer.membershipLevel}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-gray-900">{customer.totalOrders}</p>
                      <p className="text-xs text-gray-500">Orders</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-600">${customer.totalSpent}</p>
                      <p className="text-xs text-gray-500">Total Spent</p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>Joined: {formatDate(customer.joinDate)}</p>
                    <p>Last Order: {formatDate(customer.lastOrder)}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-4 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No customers found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Customer Details Modal */}
      <CustomerDetailsModal 
        customer={selectedCustomer} 
        onClose={() => setSelectedCustomer(null)} 
      />
    </div>
  );
};

export default CustomerManagement;
