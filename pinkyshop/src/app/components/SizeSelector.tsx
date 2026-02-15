interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between">
        <span style={{ color: '#2D2D2D' }}>Size</span>
      </div>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className="px-5 py-2 rounded-full transition-all hover:opacity-80"
            style={{
              backgroundColor: selectedSize === size ? '#E83E8C' : 'transparent',
              color: selectedSize === size ? '#ffffff' : '#2D2D2D',
              border: selectedSize === size ? 'none' : '1px solid #FFD9E6',
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}