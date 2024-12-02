import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'building-with-react',
    title: 'Building Modern Web Apps with React',
    createdAt: new Date('2024-03-15'),
    content: 'React has revolutionized the way we build web applications...'
  },
  {
    id: 'typescript-tips',
    title: 'TypeScript Best Practices',
    createdAt: new Date('2024-03-10'),
    content: 'TypeScript adds static typing to JavaScript...'
  },
  {
    id: 'state-management',
    title: 'Modern State Management',
    createdAt: new Date('2024-03-05'),
    content: 'Exploring different state management solutions...'
  }
];