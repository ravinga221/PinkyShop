import { Link, useLocation } from 'react-router';

const categories = [
  { name: 'All Products', path: '/' },
  { name: 'Lehengas', path: '/lehenga' },
  { name: 'Frocks', path: '/frocks' },
  { name: 'Skirts', path: '/skirts' },
  { name: 'Blouses', path: '/blouses' },
  { name: 'Sarees', path: '/sarees' },
];

export function CategoryNav() {
  const location = useLocation();

  return (
    <nav className="border-b" style={{ borderColor: '#FFD9E6', background: '#FFFAFC' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-8 overflow-x-auto">
          {categories.map((category) => {
            const isActive = location.pathname === category.path;
            return (
              <Link
                key={category.path}
                to={category.path}
                className="py-4 whitespace-nowrap transition-colors relative"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#E83E8C' : '#A65A7A',
                  fontWeight: isActive ? '600' : '400',
                }}
              >
                {category.name}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: '#E83E8C' }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
