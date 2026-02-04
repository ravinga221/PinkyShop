import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-pink-500 ring-2 ring-pink-200' : 'border-transparent hover:border-pink-200'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Product View ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden aspect-square relative group">
                <img
                    src={activeImage}
                    alt="Product Main View"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                    <button className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm hover:bg-pink-50 transition-colors text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
