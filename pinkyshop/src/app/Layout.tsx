import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { CartDrawer } from './components/CartDrawer';

export function Layout() {
  return (
    <div className="min-h-screen" style={{ background: '#FFF0F5', fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <CategoryNav />
      <Outlet />
      <CartDrawer />
    </div>
  );
}