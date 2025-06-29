import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const location = useLocation();
  const sport = location.state?.sport;
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment processing with backend
    console.log('Payment processing:', formData);
    // Show success message/redirect
  };

  if (!sport) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No program selected</h2>
          <p className="text-gray-600">Please select a program to proceed with payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Payment</h1>
          <p className="text-gray-600">Secure checkout for your sports program enrollment</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Payment Method Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-xl text-center transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 border-2 rounded-xl text-center transition-colors ${
                      paymentMethod === 'upi'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-6 h-6 mx-auto mb-2 text-2xl">📱</div>
                    <span className="text-sm font-medium">UPI</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('wallet')}
                    className={`p-4 border-2 rounded-xl text-center transition-colors ${
                      paymentMethod === 'wallet'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-6 h-6 mx-auto mb-2 text-2xl">💳</div>
                    <span className="text-sm font-medium">Wallet</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 1234 1234 1234"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === 'upi' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="yourname@paytm"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                )}

                {paymentMethod === 'wallet' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Select your preferred wallet</p>
                    <div className="grid grid-cols-3 gap-4">
                      <button type="button" className="p-4 border border-gray-200 rounded-xl hover:border-primary-500">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="text-sm">Paytm</div>
                      </button>
                      <button type="button" className="p-4 border border-gray-200 rounded-xl hover:border-primary-500">
                        <div className="text-2xl mb-2">💰</div>
                        <div className="text-sm">PhonePe</div>
                      </button>
                      <button type="button" className="p-4 border border-gray-200 rounded-xl hover:border-primary-500">
                        <div className="text-2xl mb-2">🪙</div>
                        <div className="text-sm">GPay</div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Billing Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div className="text-sm text-gray-600">
                    Your payment information is secured with 256-bit SSL encryption
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Pay {sport.price}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{sport.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{sport.name} Training</h4>
                    <p className="text-sm text-gray-600">{sport.duration} program</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Program Fee</span>
                    <span className="text-gray-900">{sport.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="text-gray-900">₹99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="text-gray-900">₹1,458</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹9,557</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Instant enrollment confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Access to all training materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Professional coaching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Equipment included</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <div className="text-sm text-green-800">
                  <strong>Special Offer!</strong> Get 15% off on your next program enrollment.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};