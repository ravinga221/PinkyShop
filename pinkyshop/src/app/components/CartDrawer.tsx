import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';

export function CartDrawer() {
  const { cartItems, isDrawerOpen, closeDrawer } = useCart();

  if (!isDrawerOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black transition-opacity z-40"
        style={{ opacity: 0.4 }}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md z-50 shadow-2xl flex flex-col animate-slide-in"
        style={{ background: '#FFFAFC' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: '#FFD9E6' }}
        >
          <h2
            className="text-2xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2D2D2D',
            }}
          >
            CART ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-full transition-colors"
            style={{ color: '#E83E8C' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFF0F5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#A65A7A',
                }}
              >
                Your cart is empty
              </p>
              <button
                onClick={closeDrawer}
                className="px-6 py-2 rounded-lg"
                style={{
                  background: '#FFD9E6',
                  color: '#E83E8C',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.color}-${item.size}-${index}`}
                className="flex gap-4 p-4 rounded-lg"
                style={{ background: '#FFF0F5' }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
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
                  <p
                    className="text-sm mb-1"
                    style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}
                  >
                    Size: {item.size}
                  </p>
                  <p
                    className="text-sm mb-2 flex items-center gap-2"
                    style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}
                  >
                    Color:{' '}
                    <span className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full inline-block"
                        style={{
                          background: item.product.colors.find((c) => c.name === item.color)?.hex,
                        }}
                      />
                      {item.color}
                    </span>
                  </p>
                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm"
                      style={{ color: '#A65A7A', fontFamily: 'Inter, sans-serif' }}
                    >
                      Qty: {item.quantity}
                    </p>
                    <p
                      className="font-semibold"
                      style={{
                        color: '#E83E8C',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t space-y-4" style={{ borderColor: '#FFD9E6' }}>
            <div className="space-y-2">
              <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#A65A7A' }}>Subtotal:</span>
                <span style={{ color: '#2D2D2D' }}>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: '#A65A7A' }}>Shipping:</span>
                <span style={{ color: '#10B981' }}>Free</span>
              </div>
              <div
                className="flex justify-between pt-2 border-t text-lg"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  borderColor: '#FFD9E6',
                }}
              >
                <span style={{ color: '#2D2D2D', fontWeight: '600' }}>Total:</span>
                <span style={{ color: '#E83E8C', fontWeight: '700' }}>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/cart"
              onClick={closeDrawer}
              className="block w-full py-3 rounded-lg text-center transition-all"
              style={{
                background: '#FFFAFC',
                border: '2px solid #E83E8C',
                color: '#E83E8C',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
              }}
            >
              VIEW CART ({totalItems})
            </Link>

            <button
              className="w-full py-3 rounded-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)',
              }}
            >
              CHECKOUT NOW
            </button>

            <button
              onClick={closeDrawer}
              className="w-full text-center py-2"
              style={{
                color: '#E83E8C',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Continue Shopping →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
