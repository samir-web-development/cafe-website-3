import { MenuItem, GalleryItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Velvet Latte',
    description: 'House espresso with steamed oat milk and a hint of vanilla bean.',
    price: '₹250',
    category: 'brew',
    image: 'https://picsum.photos/id/42/400/400'
  },
  {
    id: '2',
    name: 'Cold Brew Mist',
    description: 'Slow-steeped for 24 hours, served over ice with orange peel.',
    price: '₹220',
    category: 'brew',
    image: 'https://picsum.photos/id/1060/400/400'
  },
  {
    id: '3',
    name: 'Matcha Zen',
    description: 'Ceremonial grade matcha whisked with almond milk and honey.',
    price: '₹280',
    category: 'brew',
    image: 'https://picsum.photos/id/225/400/400'
  },
  {
    id: '4',
    name: 'Almond Croissant',
    description: 'Flaky pastry filled with sweet almond cream and topped with toasted almonds.',
    price: '₹180',
    category: 'bakery',
    image: 'https://picsum.photos/id/488/400/400'
  },
  {
    id: '5',
    name: 'Lavender Scone',
    description: 'Buttery scone infused with dried lavender, served with clotted cream.',
    price: '₹150',
    category: 'bakery',
    image: 'https://picsum.photos/id/493/400/400'
  },
  {
    id: '6',
    name: 'Avocado Toast',
    description: 'Sourdough topped with smashed avocado, radish, and chili flakes.',
    price: '₹350',
    category: 'savory',
    image: 'https://picsum.photos/id/490/400/400'
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://picsum.photos/id/425/600/800', alt: 'Coffee beans roasting' },
  { id: '2', src: 'https://picsum.photos/id/365/600/600', alt: 'Flower on table', span: true },
  { id: '3', src: 'https://picsum.photos/id/292/600/800', alt: 'Cafe supplies' },
  { id: '4', src: 'https://picsum.photos/id/431/800/600', alt: 'Pour over coffee' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "The silence here is golden. I wrote my entire thesis in the corner booth.",
    author: "Priya R.",
    role: "Writer"
  },
  {
    id: '2',
    text: "Finally, a place that understands coffee is an art, not a race.",
    author: "Arjun T.",
    role: "Designer"
  },
  {
    id: '3',
    text: "The ambiance is unmatched. It feels like a warm hug on a rainy day.",
    author: "Ananya L.",
    role: "Regular"
  }
];