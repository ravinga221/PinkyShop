import { useState } from 'react';
import { Check } from 'lucide-react';

interface AddToCartButtonProps {
  quantity: number;
  onAddToCart: () => void;
}

export function AddToCartButton({ quantity, onAddToCart }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    onAddToCart();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-4 rounded-lg transition-all flex items-center justify-center gap-2"
      style={{
        background: isAdded ? '#10B981' : 'linear-gradient(135deg, #E83E8C 0%, #FF69B4 100%)',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)',
      }}
    >
      {isAdded ? (
        <>
          <Check className="w-5 h-5" />
          Added to Cart!
        </>
      ) : (
        `Add ${quantity} to Cart`
      )}
    </button>
  );
}