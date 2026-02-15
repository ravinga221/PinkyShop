import { ChevronDown, Truck } from 'lucide-react';
import { useState } from 'react';

type Section = 'details' | 'shipping' | 'care' | null;

export function ProductDetails() {
  const [openSection, setOpenSection] = useState<Section>('details');

  const toggleSection = (section: Section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Details Section */}
      <div className="border-b" style={{ borderColor: '#FFD9E6' }}>
        <button
          onClick={() => toggleSection('details')}
          className="w-full py-4 flex items-center justify-between hover:opacity-70 transition-opacity"
          style={{ color: '#2D2D2D' }}
        >
          <span>Details</span>
          <ChevronDown
            className="w-5 h-5 transition-transform"
            style={{
              transform: openSection === 'details' ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#FF69B4',
            }}
          />
        </button>
        {openSection === 'details' && (
          <div className="pb-4 text-sm" style={{ color: '#A65A7A' }}>
            <p>Made from premium soft cotton blend with beautiful embroidered details. Features a twirl-worthy skirt, comfortable elastic waistband, and delicate flutter sleeves. Perfect for parties, special events, or dress-up playtime.</p>
          </div>
        )}
      </div>

      {/* Shipping Section */}
      <div className="border-b" style={{ borderColor: '#FFD9E6' }}>
        <button
          onClick={() => toggleSection('shipping')}
          className="w-full py-4 flex items-center justify-between hover:opacity-70 transition-opacity"
          style={{ color: '#2D2D2D' }}
        >
          <span>Shipping</span>
          <ChevronDown
            className="w-5 h-5 transition-transform"
            style={{
              transform: openSection === 'shipping' ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#FF69B4',
            }}
          />
        </button>
        {openSection === 'shipping' && (
          <div className="pb-4 space-y-2">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#A65A7A' }}>
              <Truck className="w-4 h-4" style={{ color: '#FF69B4' }} />
              <span>Free shipping over $50</span>
            </div>
            <p className="text-sm" style={{ color: '#A65A7A' }}>
              Standard delivery in 3-5 business days. Express shipping available at checkout.
            </p>
          </div>
        )}
      </div>

      {/* Care Section */}
      <div className="border-b" style={{ borderColor: '#FFD9E6' }}>
        <button
          onClick={() => toggleSection('care')}
          className="w-full py-4 flex items-center justify-between hover:opacity-70 transition-opacity"
          style={{ color: '#2D2D2D' }}
        >
          <span>Care</span>
          <ChevronDown
            className="w-5 h-5 transition-transform"
            style={{
              transform: openSection === 'care' ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#FF69B4',
            }}
          />
        </button>
        {openSection === 'care' && (
          <div className="pb-4 text-sm" style={{ color: '#A65A7A' }}>
            <ul className="list-disc list-inside space-y-1">
              <li>Machine wash cold with like colors</li>
              <li>Tumble dry low</li>
              <li>Do not bleach</li>
              <li>Iron on low heat if needed</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}