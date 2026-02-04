import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

const CartSidebar = () => {
    const {
        isCartOpen,
        toggleCart,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                onClick={toggleCart}
            />

            {/* Sidebar Panel */}
            <div className="relative w-full max-w-md bg-white shadow-2xl h-full flex flex-col animate-slideInRight">
                {/* Header */}
                <div className="p-5 border-b border-pink-100 flex justify-between items-center bg-pink-50/50">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        Your Cart <span className="text-sm font-normal text-gray-500">({cartItems.length} items)</span>
                    </h2>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-pink-100 text-gray-500 hover:text-pink-600 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">🛒</span>
                            </div>
                            <p className="text-lg font-medium">Your cart is empty</p>
                            <p className="text-sm">Looks like you haven't added any pink goodies yet!</p>
                            <button
                                onClick={toggleCart}
                                className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-white border border-pink-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-medium text-gray-900 truncate pr-2">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <p className="text-sm text-gray-500 mb-3">
                                        {item.options.color.name} / {item.options.size}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                                className="p-1 px-2 hover:bg-gray-50 text-gray-600"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                                className="p-1 px-2 hover:bg-gray-50 text-gray-600"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <span className="font-bold text-pink-600">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer with Total */}
                {cartItems.length > 0 && (
                    <div className="p-5 border-t border-pink-100 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-2xl font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
                        <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-bold shadow-lg shadow-pink-200 hover:shadow-pink-300 transform hover:-translate-y-0.5 transition-all">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
