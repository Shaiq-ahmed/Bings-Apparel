import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Switch } from '../../components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Plus, 
  Search, 
  Bell, 
  Mail,
  MessageSquare,
  Send,
  Users,
  Filter,
  Eye,
  Edit,
  Trash2,
  Check,
  X,
  Clock,
  AlertCircle,
  Settings,
  Target,
  Calendar,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const NotificationForm = ({ notification, setNotification, onSave, onCancel, isEditing = false }) => {
  const handleFieldChange = useCallback((field, value) => {
    setNotification(prev => ({ ...prev, [field]: value }));
  }, [setNotification]);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="targeting">Targeting</TabsTrigger>
          <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={notification.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              placeholder="Notification title"
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={notification.message || ''}
              onChange={(e) => handleFieldChange('message', e.target.value)}
              placeholder="Notification message"
              rows={4}
            />
          </div>

          <div>
            <Label>Type</Label>
            <Select value={notification.type || 'info'} onValueChange={(value) => handleFieldChange('type', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Information</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="promotion">Promotion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Channels</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="push"
                  checked={notification.channels?.includes('push') || false}
                  onChange={(e) => {
                    const channels = notification.channels || [];
                    const newChannels = e.target.checked
                      ? [...channels, 'push']
                      : channels.filter(c => c !== 'push');
                    handleFieldChange('channels', newChannels);
                  }}
                />
                <Label htmlFor="push">Push Notification</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="email"
                  checked={notification.channels?.includes('email') || false}
                  onChange={(e) => {
                    const channels = notification.channels || [];
                    const newChannels = e.target.checked
                      ? [...channels, 'email']
                      : channels.filter(c => c !== 'email');
                    handleFieldChange('channels', newChannels);
                  }}
                />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="inapp"
                  checked={notification.channels?.includes('inapp') || false}
                  onChange={(e) => {
                    const channels = notification.channels || [];
                    const newChannels = e.target.checked
                      ? [...channels, 'inapp']
                      : channels.filter(c => c !== 'inapp');
                    handleFieldChange('channels', newChannels);
                  }}
                />
                <Label htmlFor="inapp">In-App</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sms"
                  checked={notification.channels?.includes('sms') || false}
                  onChange={(e) => {
                    const channels = notification.channels || [];
                    const newChannels = e.target.checked
                      ? [...channels, 'sms']
                      : channels.filter(c => c !== 'sms');
                    handleFieldChange('channels', newChannels);
                  }}
                />
                <Label htmlFor="sms">SMS</Label>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="targeting" className="space-y-4">
          <div>
            <Label>Target Audience</Label>
            <Select value={notification.audience || 'all'} onValueChange={(value) => handleFieldChange('audience', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="customers">Customers Only</SelectItem>
                <SelectItem value="admins">Admins Only</SelectItem>
                <SelectItem value="new-users">New Users</SelectItem>
                <SelectItem value="active-users">Active Users</SelectItem>
                <SelectItem value="inactive-users">Inactive Users</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="segment">Custom Segment</Label>
            <Input
              id="segment"
              value={notification.segment || ''}
              onChange={(e) => handleFieldChange('segment', e.target.value)}
              placeholder="e.g., premium customers, recent buyers"
            />
          </div>
        </TabsContent>

        <TabsContent value="scheduling" className="space-y-4">
          <div>
            <Label>Delivery</Label>
            <Select value={notification.delivery || 'immediate'} onValueChange={(value) => handleFieldChange('delivery', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Send Immediately</SelectItem>
                <SelectItem value="scheduled">Schedule for Later</SelectItem>
                <SelectItem value="recurring">Recurring</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {notification.delivery === 'scheduled' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="scheduleDate">Date</Label>
                <Input
                  id="scheduleDate"
                  type="date"
                  value={notification.scheduleDate || ''}
                  onChange={(e) => handleFieldChange('scheduleDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="scheduleTime">Time</Label>
                <Input
                  id="scheduleTime"
                  type="time"
                  value={notification.scheduleTime || ''}
                  onChange={(e) => handleFieldChange('scheduleTime', e.target.value)}
                />
              </div>
            </div>
          )}

          {notification.delivery === 'recurring' && (
            <div>
              <Label>Frequency</Label>
              <Select value={notification.frequency || 'daily'} onValueChange={(value) => handleFieldChange('frequency', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>
          <Send className="w-4 h-4 mr-2" />
          {isEditing ? 'Update Notification' : 'Send Notification'}
        </Button>
      </div>
    </div>
  );
};

const NotificationManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);

  // Sample notification data
  const [notifications, setNotifications] = useState([
    {
      id: 'NOT-001',
      title: 'Welcome to Bings Drip!',
      message: 'Thank you for joining us. Enjoy 20% off your first order with code WELCOME20.',
      type: 'promotion',
      status: 'sent',
      audience: 'new-users',
      channels: ['email', 'push'],
      sentAt: '2024-01-15T10:00:00Z',
      delivered: 1250,
      opened: 890,
      clicked: 234,
      createdBy: 'Admin User'
    },
    {
      id: 'NOT-002',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and is on its way!',
      type: 'info',
      status: 'sent',
      audience: 'customers',
      channels: ['email', 'sms', 'push'],
      sentAt: '2024-01-15T14:30:00Z',
      delivered: 532,
      opened: 498,
      clicked: 156,
      createdBy: 'System'
    },
    {
      id: 'NOT-003',
      title: 'Flash Sale Alert',
      message: 'Don\'t miss out! 50% off all winter wear. Limited time only!',
      type: 'promotion',
      status: 'scheduled',
      audience: 'active-users',
      channels: ['email', 'push', 'inapp'],
      scheduledFor: '2024-01-16T09:00:00Z',
      estimatedReach: 2500,
      createdBy: 'Marketing Team'
    },
    {
      id: 'NOT-004',
      title: 'System Maintenance',
      message: 'Our website will be under maintenance tonight from 2 AM to 4 AM EST.',
      type: 'warning',
      status: 'draft',
      audience: 'all',
      channels: ['email', 'inapp'],
      createdBy: 'Admin User'
    }
  ]);

  // New notification form state
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info',
    audience: 'all',
    channels: ['email'],
    delivery: 'immediate'
  });

  // Notification stats
  const notificationStats = {
    totalSent: notifications.filter(n => n.status === 'sent').length,
    totalDelivered: notifications.filter(n => n.status === 'sent').reduce((sum, n) => sum + (n.delivered || 0), 0),
    totalOpened: notifications.filter(n => n.status === 'sent').reduce((sum, n) => sum + (n.opened || 0), 0),
    totalClicked: notifications.filter(n => n.status === 'sent').reduce((sum, n) => sum + (n.clicked || 0), 0),
    scheduled: notifications.filter(n => n.status === 'scheduled').length,
    drafts: notifications.filter(n => n.status === 'draft').length
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || notification.status === selectedStatus;
    const matchesType = selectedType === 'all' || notification.type === selectedType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      sent: { color: 'bg-green-100 text-green-800', icon: Check },
      scheduled: { color: 'bg-blue-100 text-blue-800', icon: Clock },
      draft: { color: 'bg-gray-100 text-gray-800', icon: Edit },
      failed: { color: 'bg-red-100 text-red-800', icon: X }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    const Icon = config.icon;
    
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTypeIcon = (type) => {
    const icons = {
      info: '💡',
      success: '✅',
      warning: '⚠️',
      error: '❌',
      promotion: '🎉'
    };
    return icons[type] || '💡';
  };

  const getChannelIcons = (channels) => {
    const iconMap = {
      email: '📧',
      push: '🔔',
      sms: '📱',
      inapp: '💬'
    };
    return channels.map(channel => iconMap[channel] || '').join(' ');
  };

  const handleCreateNotification = () => {
    if (!newNotification.title || !newNotification.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    const notification = {
      id: `NOT-${String(notifications.length + 1).padStart(3, '0')}`,
      ...newNotification,
      status: newNotification.delivery === 'immediate' ? 'sent' : 'scheduled',
      createdAt: new Date().toISOString(),
      createdBy: 'Admin User'
    };

    if (newNotification.delivery === 'immediate') {
      // Simulate sending
      notification.sentAt = new Date().toISOString();
      notification.delivered = Math.floor(Math.random() * 1000) + 500;
      notification.opened = Math.floor(notification.delivered * 0.7);
      notification.clicked = Math.floor(notification.opened * 0.3);
    }

    setNotifications([notification, ...notifications]);
    setNewNotification({
      title: '',
      message: '',
      type: 'info',
      audience: 'all',
      channels: ['email'],
      delivery: 'immediate'
    });
    setShowCreateModal(false);
    toast.success('Notification created successfully!');
  };

  const handleEditNotification = (notification) => {
    setEditingNotification({ ...notification });
  };

  const handleUpdateNotification = () => {
    setNotifications(notifications.map(n => 
      n.id === editingNotification.id ? editingNotification : n
    ));
    setEditingNotification(null);
    toast.success('Notification updated successfully!');
  };

  const handleDeleteNotification = (notificationId) => {
    setNotifications(notifications.filter(n => n.id !== notificationId));
    toast.success('Notification deleted successfully!');
  };

  const handleDuplicateNotification = (notification) => {
    const duplicate = {
      ...notification,
      id: `NOT-${String(notifications.length + 1).padStart(3, '0')}`,
      title: `${notification.title} (Copy)`,
      status: 'draft',
      createdAt: new Date().toISOString()
    };
    setNotifications([duplicate, ...notifications]);
    toast.success('Notification duplicated successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notification Management</h1>
          <p className="text-gray-600 mt-1">Create and manage customer notifications</p>
        </div>
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogTrigger asChild>
            <Button className="bg-black text-white hover:bg-gray-800">
              <Plus className="w-4 h-4 mr-2" />
              Create Notification
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Create New Notification</DialogTitle>
            </DialogHeader>
            <NotificationForm
              notification={newNotification}
              setNotification={setNewNotification}
              onSave={handleCreateNotification}
              onCancel={() => setShowCreateModal(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sent</p>
                <p className="text-2xl font-bold text-gray-900">{notificationStats.totalSent}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Send className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-gray-900">{notificationStats.totalDelivered.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {notificationStats.totalDelivered > 0 
                    ? ((notificationStats.totalOpened / notificationStats.totalDelivered) * 100).toFixed(1)
                    : 0}%
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Scheduled</p>
                <p className="text-2xl font-bold text-gray-900">{notificationStats.scheduled}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="info">Information</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="promotion">Promotion</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">{getTypeIcon(notification.type)}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                      {getStatusBadge(notification.status)}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{notification.message}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Audience</p>
                        <p className="font-medium capitalize">{notification.audience.replace('-', ' ')}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Channels</p>
                        <p className="font-medium">{getChannelIcons(notification.channels)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">
                          {notification.status === 'sent' ? 'Sent' : notification.status === 'scheduled' ? 'Scheduled' : 'Created'}
                        </p>
                        <p className="font-medium">
                          {notification.sentAt 
                            ? new Date(notification.sentAt).toLocaleDateString()
                            : notification.scheduledFor
                            ? new Date(notification.scheduledFor).toLocaleDateString()
                            : new Date(notification.createdAt).toLocaleDateString()
                          }
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Performance</p>
                        {notification.status === 'sent' && (
                          <p className="font-medium">
                            {notification.delivered} delivered, {notification.opened} opened
                          </p>
                        )}
                        {notification.status === 'scheduled' && (
                          <p className="font-medium">Est. {notification.estimatedReach} reach</p>
                        )}
                        {notification.status === 'draft' && (
                          <p className="font-medium text-gray-400">Not sent yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditNotification(notification)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDuplicateNotification(notification)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteNotification(notification.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Edit Notification Modal */}
      {editingNotification && (
        <Dialog open={!!editingNotification} onOpenChange={() => setEditingNotification(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Edit Notification</DialogTitle>
            </DialogHeader>
            <NotificationForm
              notification={editingNotification}
              setNotification={setEditingNotification}
              onSave={handleUpdateNotification}
              onCancel={() => setEditingNotification(null)}
              isEditing={true}
            />
          </DialogContent>
        </Dialog>
      )}

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No notifications found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default NotificationManagement;
