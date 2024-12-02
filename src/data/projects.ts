import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    url: 'https://github.com/johndoe/ecommerce',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    id: 'chat-app',
    name: 'Real-time Chat Application',
    description: 'WebSocket-based chat application with real-time updates',
    url: 'https://github.com/johndoe/chat-app',
    tech: ['React', 'Socket.io', 'Express', 'Redis']
  }
];