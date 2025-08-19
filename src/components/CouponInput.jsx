import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { X, Tag, Check } from 'lucide-react';
import { toast } from 'react-toastify';

const CouponInput = ({ onCouponApply, appliedCoupon, onCouponRemove }) => {
  const [couponCode, setCouponCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  // Demo coupon codes
  const validCoupons = {
    'WELCOME10': { discount: 10, type: 'percentage', description: '10% off your order' },
    'SAVE20': { discount: 20, type: 'fixed', description: '$20 off orders over $100' },
    'FREESHIP': { discount: 0, type: 'shipping', description: 'Free shipping' },
    'STUDENT15': { discount: 15, type: 'percentage', description: '15% student discount' },
    'FIRSTBUY': { discount: 25, type: 'percentage', description: '25% off first purchase' }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      const upperCaseCode = couponCode.toUpperCase();
      const coupon = validCoupons[upperCaseCode];
      
      if (coupon) {
        onCouponApply({
          code: upperCaseCode,
          ...coupon
        });
        toast.success(`Coupon applied! ${coupon.description}`);
        setCouponCode('');
      } else {
        toast.error('Invalid coupon code');
      }
      setIsApplying(false);
    }, 1000);
  };

  const handleRemoveCoupon = () => {
    onCouponRemove();
    toast.success('Coupon removed');
  };

  return (
    <div className="space-y-3">
      {!appliedCoupon ? (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="pl-10"
              onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
            />
          </div>
          <Button 
            onClick={handleApplyCoupon}
            disabled={isApplying || !couponCode.trim()}
            className="whitespace-nowrap"
          >
            {isApplying ? 'Applying...' : 'Apply'}
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {appliedCoupon.code}
              </Badge>
              <p className="text-sm text-green-700 mt-1">{appliedCoupon.description}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemoveCoupon}
            className="text-green-600 hover:text-green-800"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
      
      {/* Demo coupon hints */}
      <div className="text-xs text-gray-500">
        <p>Try these demo codes: WELCOME10, SAVE20, FREESHIP, STUDENT15, FIRSTBUY</p>
      </div>
    </div>
  );
};

export default CouponInput;
