// Copy this entire code into src/App.js
import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center">
                <span className="text-white font-cursive text-2xl">P</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                PinkyShop
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="relative p-2 hover:bg-pink-50 rounded-full transition-colors">
                <Heart size={24} className="stroke-gray-600" />
              </button>
              
              <button className="relative p-2 hover:bg-pink-50 rounded-full transition-colors">
                <ShoppingBag size={24} className="stroke-gray-600" />
                <span className="absolute -top-1 -right-1 bg-pink-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-pink-600">PinkyShop</span> 🎀
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Your pink-themed e-commerce project is ready to build!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Pink Design</h3>
              <p className="text-gray-600">Beautiful pink theme with gradients</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="font-bold text-lg mb-2">E-commerce Ready</h3>
              <p className="text-gray-600">Product page, cart, and checkout</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Fast & Responsive</h3>
              <p className="text-gray-600">Mobile-friendly Tailwind CSS</p>
            </div>
          </div>
          
          <button className="btn-pink text-lg px-8">
            Start Building Your Store
          </button>
          
          <div className="mt-12 p-6 bg-white rounded-2xl border border-pink-200">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Next Steps:</h3>
            <ol className="text-left list-decimal list-inside space-y-2 text-gray-600">
              <li>Create product data file</li>
              <li>Build image gallery component</li>
              <li>Add color/size selectors</li>
              <li>Implement shopping cart</li>
              <li>Deploy to Vercel/Netlify</li>
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="text-center py-8 text-gray-500 border-t border-pink-100">
        <p>Made with ❤️ using React + Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;