interface ColorOption {
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export function ColorSelector({ colors, selectedColor, onColorChange }: ColorSelectorProps) {
  return (
    <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center gap-2">
        <span style={{ color: '#2D2D2D' }}>Color:</span>
        <span style={{ color: '#A65A7A' }}>{selectedColor}</span>
      </div>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color.name)}
            className="relative w-8 h-8 rounded-full transition-all hover:scale-110"
            style={{
              backgroundColor: color.hex,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {selectedColor === color.name && (
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid #E83E8C',
                  transform: 'scale(1.25)',
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
