import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function QuantitySelector({ quantity, onQuantityChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center rounded-lg overflow-hidden" style={{ border: '1px solid #FFD9E6' }}>
      <button
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        className="px-2 py-1 transition-colors"
        style={{
          color: '#E83E8C',
          background: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FFF0F5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <Minus className="w-3 h-3" />
      </button>
      <div
        className="px-3 py-1 min-w-10 text-center text-sm"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: '#2D2D2D',
          borderLeft: '1px solid #FFD9E6',
          borderRight: '1px solid #FFD9E6',
        }}
      >
        {quantity}
      </div>
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        className="px-2 py-1 transition-colors"
        style={{
          color: '#E83E8C',
          background: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FFF0F5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
}