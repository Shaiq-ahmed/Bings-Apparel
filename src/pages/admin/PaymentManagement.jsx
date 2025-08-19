import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Switch } from '../../components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Plus, 
  Search, 
  CreditCard, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Download,
  Eye,
  Check,
  X,
  Clock,
  AlertCircle,
  Settings,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const PaymentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedMethod, setSelectedMethod] = useState('all');
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Sample payment data
  const [payments, setPayments] = useState([
    {
      id: 'PAY-001',
      orderId: 'ORD-2024-001',
      amount: 129.99,
      currency: 'USD',
      status: 'completed',
      method: 'stripe',
      customerName: 'Alice Johnson',
      customerEmail: 'alice@example.com',
      gateway: 'Stripe',
      transactionId: 'txn_1234567890',
      createdAt: '2024-01-15T10:30:00Z',
      completedAt: '2024-01-15T10:31:00Z',
      fees: 4.07,
      netAmount: 125.92
    },
    {
      id: 'PAY-002',
      orderId: 'ORD-2024-002',
      amount: 89.50,
      currency: 'USD',
      status: 'pending',
      method: 'paypal',
      customerName: 'Bob Smith',
      customerEmail: 'bob@example.com',
      gateway: 'PayPal',
      transactionId: 'pp_9876543210',
      createdAt: '2024-01-15T11:15:00Z',
      completedAt: null,
      fees: 2.87,
      netAmount: 86.63
    },
    {
      id: 'PAY-003',
      orderId: 'ORD-2024-003',
      amount: 199.99,
      currency: 'USD',
      status: 'failed',
      method: 'stripe',
      customerName: 'Carol Davis',
      customerEmail: 'carol@example.com',
      gateway: 'Stripe',
      transactionId: 'txn_failed_001',
      createdAt: '2024-01-15T12:00:00Z',
      completedAt: null,
      fees: 0,
      netAmount: 0,
      failureReason: 'Insufficient funds'
    },
    {
      id: 'PAY-004',
      orderId: 'ORD-2024-004',
      amount: 75.00,
      currency: 'USD',
      status: 'refunded',
      method: 'stripe',
      customerName: 'David Wilson',
      customerEmail: 'david@example.com',
      gateway: 'Stripe',
      transactionId: 'txn_refunded_001',
      createdAt: '2024-01-14T14:30:00Z',
      completedAt: '2024-01-14T14:31:00Z',
      refundedAt: '2024-01-15T09:00:00Z',
      fees: 2.42,
      netAmount: 0,
      refundAmount: 75.00
    }
  ]);

  // Payment gateway settings
  const [gatewaySettings, setGatewaySettings] = useState({
    stripe: {
      enabled: true,
      publicKey: 'pk_test_...',
      webhookSecret: 'whsec_...',
      currency: 'USD'
    },
    paypal: {
      enabled: true,
      clientId: 'client_id_...',
      environment: 'sandbox'
    },
    razorpay: {
      enabled: false,
      keyId: 'rzp_test_...',
      currency: 'INR'
    }
  });

  // Calculate summary statistics
  const paymentStats = {
    totalRevenue: payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0),
    totalTransactions: payments.length,
    successfulTransactions: payments.filter(p => p.status === 'completed').length,
    pendingTransactions: payments.filter(p => p.status === 'pending').length,
    failedTransactions: payments.filter(p => p.status === 'failed').length,
    refundedAmount: payments.filter(p => p.status === 'refunded').reduce((sum, p) => sum + (p.refundAmount || 0), 0),
    totalFees: payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.fees, 0)
  };

  // Filter payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || payment.status === selectedStatus;
    const matchesMethod = selectedMethod === 'all' || payment.method === selectedMethod;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { color: 'bg-green-100 text-green-800', icon: Check },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      failed: { color: 'bg-red-100 text-red-800', icon: X },
      refunded: { color: 'bg-gray-100 text-gray-800', icon: RefreshCw }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getMethodIcon = (method) => {
    const icons = {
      stripe: '💳',
      paypal: '🅿️',
      razorpay: '💰',
      cod: '💵'
    };
    return icons[method] || '💳';
  };

  const handleRefund = (payment) => {
    setSelectedPayment(payment);
    setShowRefundModal(true);
  };

  const processRefund = () => {
    // Simulate refund processing
    const updatedPayments = payments.map(p => 
      p.id === selectedPayment.id 
        ? { ...p, status: 'refunded', refundedAt: new Date().toISOString(), refundAmount: p.amount, netAmount: 0 }
        : p
    );
    setPayments(updatedPayments);
    setShowRefundModal(false);
    setSelectedPayment(null);
    toast.success('Refund processed successfully!');
  };

  const exportPayments = () => {
    // Simulate CSV export
    const csvData = filteredPayments.map(p => ({
      'Payment ID': p.id,
      'Order ID': p.orderId,
      'Customer': p.customerName,
      'Amount': p.amount,
      'Status': p.status,
      'Method': p.method,
      'Date': new Date(p.createdAt).toLocaleDateString()
    }));
    
    toast.success('Payment data exported successfully!');
  };

  const retryPayment = (paymentId) => {
    const updatedPayments = payments.map(p => 
      p.id === paymentId 
        ? { ...p, status: 'pending' }
        : p
    );
    setPayments(updatedPayments);
    toast.success('Payment retry initiated!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage payment transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportPayments}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            <Settings className="w-4 h-4 mr-2" />
            Gateway Settings
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${paymentStats.totalRevenue.toFixed(2)}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+12.5%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Successful</p>
                <p className="text-2xl font-bold text-gray-900">
                  {paymentStats.successfulTransactions}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-gray-600">
                {((paymentStats.successfulTransactions / paymentStats.totalTransactions) * 100).toFixed(1)}% success rate
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {paymentStats.pendingTransactions}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-gray-600">Awaiting confirmation</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Fees</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${paymentStats.totalFees.toFixed(2)}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-gray-600">Gateway fees</span>
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
                placeholder="Search payments, customers, or order IDs..."
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
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedMethod} onValueChange={setSelectedMethod}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="stripe">Stripe</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="razorpay">Razorpay</SelectItem>
                <SelectItem value="cod">Cash on Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Payment</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Method</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <motion.tr
                    key={payment.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{payment.id}</p>
                        <p className="text-sm text-gray-500">Order: {payment.orderId}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{payment.customerName}</p>
                        <p className="text-sm text-gray-500">{payment.customerEmail}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">${payment.amount.toFixed(2)}</p>
                        {payment.fees > 0 && (
                          <p className="text-sm text-gray-500">Fee: ${payment.fees.toFixed(2)}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(payment.status)}
                      {payment.failureReason && (
                        <p className="text-xs text-red-600 mt-1">{payment.failureReason}</p>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getMethodIcon(payment.method)}</span>
                        <span className="capitalize">{payment.gateway}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900">
                          {new Date(payment.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(payment.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {payment.status === 'completed' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleRefund(payment)}
                          >
                            <RefreshCw className="w-4 h-4" />
                          </Button>
                        )}
                        {payment.status === 'failed' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => retryPayment(payment.id)}
                          >
                            <RefreshCw className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Refund Modal */}
      {selectedPayment && (
        <Dialog open={showRefundModal} onOpenChange={setShowRefundModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Process Refund</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Payment Details</h4>
                <p className="text-sm text-gray-600 mt-1">ID: {selectedPayment.id}</p>
                <p className="text-sm text-gray-600">Customer: {selectedPayment.customerName}</p>
                <p className="text-sm text-gray-600">Amount: ${selectedPayment.amount.toFixed(2)}</p>
              </div>
              
              <div>
                <Label htmlFor="refund-amount">Refund Amount</Label>
                <Input
                  id="refund-amount"
                  type="number"
                  defaultValue={selectedPayment.amount}
                  max={selectedPayment.amount}
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <Label htmlFor="refund-reason">Reason for Refund</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-request">Customer Request</SelectItem>
                    <SelectItem value="defective-product">Defective Product</SelectItem>
                    <SelectItem value="wrong-item">Wrong Item Sent</SelectItem>
                    <SelectItem value="duplicate-order">Duplicate Order</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setShowRefundModal(false)}>
                  Cancel
                </Button>
                <Button onClick={processRefund} className="bg-red-600 hover:bg-red-700">
                  Process Refund
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {filteredPayments.length === 0 && (
        <div className="text-center py-12">
          <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No payments found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default PaymentManagement;
