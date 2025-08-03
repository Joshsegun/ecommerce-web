import { Product, Review } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 324,
    description: 'Experience premium sound quality with our latest wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Wireless Charging', 'Premium Materials'],
    inStock: true,
    discount: 25,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 189,
    description: 'Track your fitness goals with advanced health monitoring, GPS, and smart notifications.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Minimalist Desk Lamp',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Home & Garden',
    brand: 'ModernLight',
    rating: 4.4,
    reviewCount: 76,
    description: 'Sleek and modern desk lamp with adjustable brightness and USB charging port.',
    features: ['LED Technology', 'USB Charging Port', 'Adjustable Brightness', 'Modern Design'],
    inStock: true
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Fashion',
    brand: 'EcoWear',
    rating: 4.7,
    reviewCount: 142,
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    features: ['100% Organic Cotton', 'Sustainable Production', 'Comfortable Fit', 'Multiple Colors'],
    inStock: true
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    brand: 'PhotoPro',
    rating: 4.9,
    reviewCount: 267,
    description: 'Professional-grade camera with advanced features for photography enthusiasts.',
    features: ['24MP Sensor', '4K Video', 'Weather Sealed', 'Dual Card Slots'],
    inStock: true,
    discount: 13,
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    image: 'https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Furniture',
    brand: 'ComfortSeating',
    rating: 4.5,
    reviewCount: 98,
    description: 'Ergonomic office chair designed for all-day comfort and productivity.',
    features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '5-year Warranty'],
    inStock: true
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    brand: 'ChargeTech',
    rating: 4.3,
    reviewCount: 156,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    features: ['Fast Charging', 'Universal Compatibility', 'LED Indicator', 'Non-slip Base'],
    inStock: true,
    isNew: true
  },
  {
    id: '8',
    name: 'Artisan Coffee Beans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Food & Beverage',
    brand: 'RoastMaster',
    rating: 4.8,
    reviewCount: 203,
    description: 'Premium single-origin coffee beans roasted to perfection.',
    features: ['Single Origin', 'Freshly Roasted', 'Fair Trade', 'Rich Flavor Profile'],
    inStock: true
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing sound quality! The noise cancellation works perfectly.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    userName: 'Mike Chen',
    rating: 4,
    comment: 'Great headphones, battery life is excellent. Slightly heavy for long use.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    productId: '2',
    userName: 'Emily Davis',
    rating: 5,
    comment: 'Perfect fitness companion! Tracks everything I need.',
    date: '2024-01-12',
    verified: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Furniture',
  'Food & Beverage'
];

export const brands = [
  'All',
  'AudioTech',
  'FitTech',
  'ModernLight',
  'EcoWear',
  'PhotoPro',
  'ComfortSeating',
  'ChargeTech',
  'RoastMaster'
];