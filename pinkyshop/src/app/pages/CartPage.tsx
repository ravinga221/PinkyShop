import { Trash2, Heart, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';
import { QuantitySelector } from '../components/QuantitySelector';
import { OrderConfirmation } from '../components/OrderConfirmation';
import { useState } from 'react';

export function CartPage() {
  const { cartItems, savedItems, removeFromCart, updateQuantity, clearCart, saveForLater, moveToCart } =
    useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsOrderConfirmationOpen(true);
  };

  if (cartItems.length === 0 && savedItems.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center py-20">
          <div className="mb-8 flex justify-center">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{ background: '#FFD9E6' }}
            >
              <ShoppingBag className="w-16 h-16" style={{ color: '#E83E8C' }} />
            </div>
          </div>
          <h2
            className="text-3xl mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2D2D2D',
            }}
          >
            Your cart is feeling light
          </h2>
          <p className="text-lg mb-8" style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}>
            Add some lovely items to get started
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)',
            }}
          >
            Discover our pink collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 rounded-full hover:bg-opacity-50" style={{ color: '#E83E8C' }}>
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1
            className="text-4xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2D2D2D',
            }}
          >
            Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </h1>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            style={{
              color: '#E83E8C',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFF0F5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items - 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={`${item.product.id}-${item.color}-${item.size}-${index}`}
              className="p-6 rounded-2xl"
              style={{ background: '#FFFAFC', border: '1px solid #FFD9E6' }}
            >
              <div className="flex gap-6">
                {/* Product Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className="text-xl mb-1"
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          color: '#2D2D2D',
                        }}
                      >
                        {item.product.name}
                      </h3>
                      <p
                        className="text-sm mb-1"
                        style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}
                      >
                        Size: {item.size}
                      </p>
                      <p
                        className="text-sm flex items-center gap-2"
                        style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}
                      >
                        Color:{' '}
                        <span className="flex items-center gap-1">
                          <span
                            className="w-4 h-4 rounded-full inline-block border"
                            style={{
                              background: item.product.colors.find((c) => c.name === item.color)?.hex,
                              borderColor: '#FFD9E6',
                            }}
                          />
                          {item.color}
                        </span>
                      </p>
                    </div>
                    <p
                      className="text-2xl"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#E83E8C',
                        fontWeight: '700',
                      }}
                    >
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="w-32">
                      <QuantitySelector
                        quantity={item.quantity}
                        onQuantityChange={(qty) =>
                          updateQuantity(item.product.id, item.color, item.size, qty)
                        }
                      />
                    </div>
                    <p
                      className="text-xl"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#2D2D2D',
                        fontWeight: '600',
                      }}
                    >
                      Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.color, item.size)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                      style={{
                        color: '#E83E8C',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFF0F5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                    <button
                      onClick={() => saveForLater(item.product.id, item.color, item.size)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                      style={{
                        color: '#E83E8C',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFF0F5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <Heart className="w-4 h-4" />
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary - 1 column */}
        <div className="space-y-6">
          {/* Promo Code */}
          <div className="p-6 rounded-2xl" style={{ background: '#FFFAFC', border: '1px solid #FFD9E6' }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#2D2D2D',
                fontSize: '18px',
              }}
            >
              Have a Code?
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo code"
                className="flex-1 px-4 py-2 rounded-lg"
                style={{
                  border: '1px solid #FFD9E6',
                  background: '#FFF0F5',
                  color: '#2D2D2D',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                }}
              />
              <button
                className="px-4 py-2 rounded-lg transition-all"
                style={{
                  background: '#E83E8C',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600',
                }}
              >
                APPLY
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-6 rounded-2xl" style={{ background: '#FFFAFC', border: '1px solid #FFD9E6' }}>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#2D2D2D',
                fontSize: '18px',
              }}
            >
              Order Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#A65A7A' }}>Subtotal ({totalItems} items)</span>
                <span style={{ color: '#2D2D2D' }}>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#A65A7A' }}>Shipping</span>
                <span style={{ color: '#10B981', fontWeight: '600' }}>Free</span>
              </div>
              <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#A65A7A' }}>Tax (est.)</span>
                <span style={{ color: '#2D2D2D' }}>${tax.toFixed(2)}</span>
              </div>
              <div
                className="border-t pt-3 flex justify-between text-xl"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  borderColor: '#FFD9E6',
                }}
              >
                <span style={{ color: '#2D2D2D', fontWeight: '700' }}>TOTAL</span>
                <span style={{ color: '#E83E8C', fontWeight: '700' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 py-4 rounded-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)',
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {/* Saved for Later */}
      {savedItems.length > 0 && (
        <div className="mt-12">
          <h2
            className="text-2xl mb-6 flex items-center gap-2"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2D2D2D',
            }}
          >
            <Heart className="w-6 h-6" style={{ color: '#E83E8C' }} />
            Saved for later ({savedItems.length} {savedItems.length === 1 ? 'item' : 'items'})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedItems.map((item, index) => (
              <div
                key={`saved-${item.product.id}-${item.color}-${item.size}-${index}`}
                className="p-4 rounded-lg"
                style={{ background: '#FFFAFC', border: '1px solid #FFD9E6' }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#2D2D2D',
                    fontSize: '16px',
                  }}
                >
                  {item.product.name}
                </h3>
                <p className="text-sm mb-1" style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}>
                  Size: {item.size} • Color: {item.color}
                </p>
                <p
                  className="text-lg mb-3"
                  style={{
                    color: '#E83E8C',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  ${item.product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => moveToCart(item.product.id, item.color, item.size)}
                  className="w-full py-2 rounded-lg transition-all"
                  style={{
                    border: '2px solid #E83E8C',
                    color: '#E83E8C',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '600',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E83E8C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#E83E8C';
                  }}
                >
                  Move to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order Confirmation Modal */}
      {isOrderConfirmationOpen && (
        <OrderConfirmation
          total={total}
          onClose={() => setIsOrderConfirmationOpen(false)}
        />
      )}
    </main>
  );
}