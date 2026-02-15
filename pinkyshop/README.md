# 🌸 Blush & Byte - Girls' Clothing E-Commerce

A modern, elegant e-commerce single product page featuring a pink color palette with a clean, feminine-yet-tech layout. Built with React, TypeScript, Tailwind CSS v4, and React Router.

## ✨ Features

### 🛍️ Product Catalog

- **10 Different Products** across 5 categories:
  - Lehengas (Traditional Indian wear)
  - Frocks (Long and short styles)
  - Skirts
  - Blouses
  - Sarees

### 🎨 Product Features

- **Image Gallery** with thumbnail navigation
- **Color Selector** with visual color swatches
- **Size Selector** (S, M, L, XL, XXL, XXXL)
- **Quantity Controls** with +/- buttons
- **Star Ratings** and review counts
- **Product Details** accordion (Details, Shipping, Care)

### 🛒 Shopping Cart System

- **Add to Cart** with success feedback animation
- **Cart Drawer** (slide-in from right) showing:
  - Mini cart preview
  - Item summaries with thumbnails
  - Subtotal and total
  - Quick checkout buttons
- **Full Cart Page** (`/cart`) with:
  - Complete item management
  - Quantity adjustment per item
  - Remove items
  - Save for later functionality
  - Promo code input
  - Order summary with tax calculation
  - Empty cart state

### ✅ Checkout Flow

- **Order Confirmation Modal** with:
  - Success animation
  - Random order number generation
  - Order summary
  - Estimated delivery time
  - Auto-redirect to home after confirmation

### 🎯 Navigation

- **Category Navigation Bar** with links to:
  - All Products
  - Lehengas
  - Frocks
  - Skirts
  - Blouses
  - Sarees
- **Header** with:
  - Brand logo ("blush & byte")
  - Wishlist icon
  - Shopping cart icon with badge count

## 🎨 Design System

### Color Palette

- **Primary Background**: `#FFF0F5` (Soft pink)
- **Secondary Surfaces**: `#FFFAFC` (White with pink tint)
- **Deep Pink Accent**: `#E83E8C`
- **Medium Pink**: `#FF69B4`
- **Pale Pink**: `#FFD9E6`
- **Text Dark**: `#2D2D2D`
- **Text Muted**: `#A65A7A`

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, clean)

### Layout

- **Product View**: 60% image gallery / 40% product details
- **Responsive Design**: Mobile-friendly breakpoints
- **Grid Layouts**: Product thumbnails in responsive grids

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/pnpm installed

### Installation

1. **Install Dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

## 📁 Project Structure

```
blush-and-byte-ecommerce/
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Main app with CartProvider
│   │   ├── Layout.tsx                   # Layout wrapper
│   │   ├── routes.tsx                   # React Router configuration
│   │   ├── context/
│   │   │   └── CartContext.tsx          # Cart state management
│   │   ├── data/
│   │   │   └── products.ts              # Product data (10 products)
│   │   ├── pages/
│   │   │   ├── HomePage.tsx             # All products page
│   │   │   ├── CartPage.tsx             # Full cart page
│   │   │   ├── LehengaPage.tsx          # Lehenga category
│   │   │   ├── FrockPage.tsx            # Frock category
│   │   │   ├── SkirtPage.tsx            # Skirt category
│   │   │   ├── BlousePage.tsx           # Blouse category
│   │   │   └── SareePage.tsx            # Saree category
│   │   └── components/
│   │       ├── Header.tsx               # Site header with cart
│   │       ├── CategoryNav.tsx          # Category navigation
│   │       ├── ProductView.tsx          # Main product display
│   │       ├── ProductThumbnail.tsx     # Product thumbnails
│   │       ├── AddToCartButton.tsx      # Add to cart with animation
│   │       ├── CartDrawer.tsx           # Slide-in cart drawer
│   │       ├── OrderConfirmation.tsx    # Order success modal
│   │       ├── ColorSelector.tsx        # Color picker
│   │       ├── SizeSelector.tsx         # Size selector
│   │       ├── QuantitySelector.tsx     # Quantity controls
│   │       ├── Rating.tsx               # Star rating display
│   │       └── ProductDetails.tsx       # Accordion details
│   └── styles/
│       ├── index.css                    # Main styles
│       ├── tailwind.css                 # Tailwind imports
│       ├── theme.css                    # Theme variables
│       └── fonts.css                    # Font imports
├── package.json
├── vite.config.ts
└── README.md
```

## 🔧 Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Router 7** - Navigation
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Key Dependencies

```json
{
  "react": "18.3.1",
  "react-router": "7.13.0",
  "lucide-react": "0.487.0",
  "tailwindcss": "4.1.12",
  "@tailwindcss/vite": "4.1.12"
}
```

## 🎯 Routes

- `/` - Home page (All Products)
- `/lehenga` - Lehenga category
- `/frocks` - Frocks category
- `/skirts` - Skirts category
- `/blouses` - Blouses category
- `/sarees` - Sarees category
- `/cart` - Shopping cart page

## 🛠️ Features in Detail

### Cart Context

Global state management for:

- Cart items with product, color, size, and quantity
- Saved for later items
- Add to cart, remove, update quantity
- Clear cart
- Cart drawer visibility

### Product Data Structure

```typescript
{
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors: Array<{ name: string; hex: string }>;
  sizes: string[]; // S, M, L, XL, XXL, XXXL
}
```

### Responsive Design

- Mobile: Single column layout
- Tablet: 2-column product grid
- Desktop: 60/40 split for product view, 3-column grid for catalog

## 🎨 Customization

### Adding New Products

Edit `/src/app/data/products.ts` and add new product objects.

### Changing Colors

Update the color values in:

- `/src/styles/theme.css` - For CSS custom properties
- Component inline styles - For dynamic colors

### Adding Categories

1. Create new page in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Add navigation link in `/src/app/components/CategoryNav.tsx`

## 📄 License

This project is created for educational purposes.

## 🌟 Acknowledgments

Built with Figma Make - A modern web application builder powered by React and Tailwind CSS.