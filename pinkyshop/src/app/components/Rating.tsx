import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviews: number;
}

export function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4"
            fill={star <= rating ? '#FF69B4' : 'none'}
            style={{ color: star <= rating ? '#FF69B4' : '#D1D5DB' }}
          />
        ))}
      </div>
      <span className="text-sm" style={{ color: '#A65A7A' }}>
        ({reviews} reviews)
      </span>
    </div>
  );
}
