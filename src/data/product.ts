import type { Product } from '../types';

export const initialProducts: Product[] = [
  {
    id: 1,
    image: 'classic.avif',
    name: 'Classic Beef Burger',
    category: 'Burgers',
    description: 'Juicy beef patty with fresh lettuce, tomato, and special sauce.',
    specification: 'Beef patty, sesame bun, lettuce, tomato, cheese, sauce',
    price: 85.00,
    rating: 4.5,
    quantity: 15
  },
  {
    id: 2,
    image: 'doublecheese.jpg',
    name: 'Double Cheese Burger',
    category: 'Burgers',
    description: 'Two beef patties loaded with melted cheddar cheese.',
    specification: 'Double beef patty, cheddar cheese, bun, pickles',
    price: 95.00,
    rating: 4.7,
    quantity: 8
  },
  {
    id: 3,
    image: 'crispychicken.webp',
    name: 'Crispy Chicken Sandwich',
    category: 'Sandwiches',
    description: 'Golden fried chicken fillet with mayo and fresh coleslaw.',
    specification: 'Chicken fillet, bun, mayo, coleslaw',
    price: 75.00,
    rating: 4.3,
    quantity: 3
  }
];


