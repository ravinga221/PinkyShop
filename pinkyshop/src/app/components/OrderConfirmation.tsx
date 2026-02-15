import { X, CheckCircle, Package } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';

interface OrderConfirmationProps {
  total: number;
  onClose: () => void;
}

export function OrderConfirmation({ total, onClose }: OrderConfirmationProps) {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleClose = () => {
    clearCart();
    onClose();
    navigate('/');
  };

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black z-50 transition-opacity"
        style={{ opacity: 0.5 }}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md rounded-2xl shadow-2xl animate-scale-in"
          style={{ background: '#FFFAFC' }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10"
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

          {/* Content */}
          <div className="p-8 text-center">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)' }}
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-3xl mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#2D2D2D',
              }}
            >
              Order Confirmed!
            </h2>

            {/* Message */}
            <p
              className="text-lg mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#A65A7A',
              }}
            >
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            {/* Order Details */}
            <div
              className="p-6 rounded-xl mb-6"
              style={{
                background: '#FFF0F5',
                border: '1px solid #FFD9E6',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Package className="w-5 h-5" style={{ color: '#E83E8C' }} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#A65A7A',
                  }}
                >
                  Order Number
                </span>
              </div>
              <p
                className="text-2xl mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#E83E8C',
                  fontWeight: '700',
                }}
              >
                #{orderNumber}
              </p>
              <div
                className="pt-4 border-t"
                style={{ borderColor: '#FFD9E6' }}
              >
                <div className="flex justify-between mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span style={{ color: '#A65A7A' }}>Total Amount:</span>
                  <span style={{ color: '#2D2D2D', fontWeight: '600' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span style={{ color: '#A65A7A' }}>Estimated Delivery:</span>
                  <span style={{ color: '#2D2D2D', fontWeight: '600' }}>3-5 days</span>
                </div>
              </div>
            </div>

            {/* Confirmation Message */}
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#A65A7A',
              }}
            >
              A confirmation email has been sent to your email address with all the details.
            </p>

            {/* Continue Shopping Button */}
            <button
              onClick={handleClose}
              className="w-full py-4 rounded-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)',
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}