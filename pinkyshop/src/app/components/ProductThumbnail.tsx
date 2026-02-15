interface ProductThumbnailProps {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

export function ProductThumbnail({ src, alt, isActive, onClick }: ProductThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 rounded-lg overflow-hidden transition-all hover:opacity-80"
      style={{
        border: isActive ? '2px solid #E83E8C' : '2px solid transparent',
        boxShadow: isActive ? '0 2px 8px rgba(232, 62, 140, 0.3)' : 'none',
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </button>
  );
}
