import React from 'react';

export const ColorSelector = ({ colors, selectedColor, onSelect }) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Select Color</h3>
            <div className="flex gap-3">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => onSelect(color)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-pink-500 transform scale-110' : 'hover:scale-105'
                            }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                    >
                        {selectedColor.name === color.name && (
                            <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </button>
                ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">{selectedColor.name}</p>
        </div>
    );
};

export const SizeSelector = ({ sizes, selectedSize, onSelect }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                <button className="text-sm text-pink-500 hover:text-pink-600 underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSelect(size)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${selectedSize === size
                                ? 'border-pink-500 bg-pink-50 text-pink-700'
                                : 'border-gray-200 text-gray-600 hover:border-pink-200 hover:bg-pink-50/50'
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="flex items-center border border-gray-200 rounded-lg bg-white w-fit">
            <button
                onClick={onDecrease}
                className="px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-pink-600 transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
            >
                -
            </button>
            <span className="w-10 text-center font-medium text-gray-900">{quantity}</span>
            <button
                onClick={onIncrease}
                className="px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-pink-600 transition-colors"
            >
                +
            </button>
        </div>
    );
};
