export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'brew' | 'bakery' | 'savory';
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  span?: boolean;
}