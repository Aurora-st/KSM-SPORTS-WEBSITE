import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQty, setEditQty] = useState(1);

  if (isOpen === false) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="text-violet-400" size={24} />
            <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
            <span className="bg-violet-600 text-white text-sm px-2 py-1 rounded-full">
              {state.items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto text-gray-500 mb-4" size={48} />
              <p className="text-gray-400 text-lg">Your cart is empty</p>
              <p className="text-gray-500 text-sm mt-2">Add some awesome KSM gear!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                >
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-700/20"></div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs capitalize">
                        {item.category}
                      </p>
                      
                      {/* Size & Color */}
                      <div className="flex items-center space-x-3 mt-1">
                        {item.size && (
                          <span className="text-xs text-violet-400">
                            Size: {item.size}
                          </span>
                        )}
                        {item.color && (
                          <div className="flex items-center space-x-1">
                            <div 
                              className="w-3 h-3 rounded-full border border-white/20"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Price & Quantity */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-400 font-bold text-sm">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-500 text-xs line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {editingId === item.id ? (
                            <>
                              <input
                                type="number"
                                min={1}
                                value={editQty}
                                onChange={e => setEditQty(Number(e.target.value))}
                                className="w-12 px-2 py-1 rounded bg-slate-900 text-white border border-slate-700 text-center"
                              />
                              <button
                                className="text-green-500 font-bold ml-2"
                                onClick={() => { updateQuantity(item.id, editQty); setEditingId(null); }}
                              >
                                Save
                              </button>
                              <button
                                className="text-gray-400 ml-2"
                                onClick={() => setEditingId(null)}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="text-white font-semibold text-sm w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                className="text-blue-400 ml-2 underline text-xs"
                                onClick={() => { setEditingId(item.id); setEditQty(item.quantity); }}
                              >
                                Edit
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-slate-700 p-6 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-yellow-400">
                ${state.total.toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/payment')}
              >
                Pay for Accessories Only
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="w-full px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300"
              >
                Add a Program
              </button>
              <button
                onClick={clearCart}
                className="w-full px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;