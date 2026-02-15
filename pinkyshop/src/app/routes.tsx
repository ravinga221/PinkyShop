import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LehengaPage } from './pages/LehengaPage';
import { FrockPage } from './pages/FrockPage';
import { SkirtPage } from './pages/SkirtPage';
import { BlousePage } from './pages/BlousePage';
import { SareePage } from './pages/SareePage';
import { CartPage } from './pages/CartPage';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'lehenga', Component: LehengaPage },
      { path: 'frocks', Component: FrockPage },
      { path: 'skirts', Component: SkirtPage },
      { path: 'blouses', Component: BlousePage },
      { path: 'sarees', Component: SareePage },
      { path: 'cart', Component: CartPage },
    ],
  },
]);