import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}

interface SavedItem {
  product: Product;
  color: string;
  size: string;
}

interface CartContextType {
  cartItems: CartItem[];
  savedItems: SavedItem[];
  isDrawerOpen: boolean;
  addToCart: (product: Product, color: string, size: string, quantity: number) => void;
  removeFromCart: (productId: number, color: string, size: string) => void;
  updateQuantity: (productId: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  saveForLater: (productId: number, color: string, size: string) => void;
  moveToCart: (productId: number, color: string, size: string) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (product: Product, color: string, size: string, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.product.id === product.id && item.color === color && item.size === size
      );

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, color, size, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (productId: number, color: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.color === color && item.size === size))
    );
  };

  const updateQuantity = (productId: number, color: string, size: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.color === color && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const saveForLater = (productId: number, color: string, size: string) => {
    const item = cartItems.find(
      (item) => item.product.id === productId && item.color === color && item.size === size
    );
    if (item) {
      setSavedItems((prev) => [...prev, { product: item.product, color: item.color, size: item.size }]);
      removeFromCart(productId, color, size);
    }
  };

  const moveToCart = (productId: number, color: string, size: string) => {
    const item = savedItems.find(
      (item) => item.product.id === productId && item.color === color && item.size === size
    );
    if (item) {
      addToCart(item.product, item.color, item.size, 1);
      setSavedItems((prev) =>
        prev.filter((i) => !(i.product.id === productId && i.color === color && i.size === size))
      );
    }
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        isDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        saveForLater,
        moveToCart,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
