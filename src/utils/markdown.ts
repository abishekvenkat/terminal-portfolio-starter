import { BlogPost } from '../types';

interface PostMetadata {
  title: string;
  date: string;
}

export function parseMarkdownMetadata(content: string): PostMetadata {
  const metadataRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(metadataRegex);

  if (!match) {
    return { title: '', date: '' };
  }

  const metadata: Record<string, string> = {};
  const metadataContent = match[1];
  
  metadataContent.split('\n').forEach(line => {
    const [key, value] = line.split(': ');
    if (key && value) {
      metadata[key.trim()] = value.trim();
    }
  });

  return {
    title: metadata.title || '',
    date: metadata.date || ''
  };
}

const posts = {
  'building-with-react.md': `---
title: Building Modern Web Apps with React
date: 2024-03-15
---

# Building Modern Web Apps with React

React has revolutionized the way we build web applications. In this post, we'll explore some of the best practices and modern approaches to React development.

## Why React?

React's component-based architecture makes it easy to build and maintain large applications. Here are some key benefits:

- **Reusable Components**: Write once, use everywhere
- **Virtual DOM**: Efficient updates and rendering
- **Rich Ecosystem**: Vast library of tools and packages

## Getting Started

\`\`\`jsx
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}
\`\`\`

Stay tuned for more React tips and tricks!`,

  'typescript-tips.md': `---
title: TypeScript Best Practices
date: 2024-03-10
---

# TypeScript Best Practices

TypeScript adds static typing to JavaScript, making your code more robust and maintainable.

## Key Benefits

1. **Type Safety**: Catch errors before runtime
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Improved Documentation**: Types serve as documentation

## Example

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}
\`\`\`

## Best Practices

- Use interfaces for object types
- Enable strict mode
- Avoid using \`any\`
- Leverage generics when possible`
};

export function getPostContent(filename: string): string {
  return posts[filename] || 'Post not found';
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(posts).map(([filename, content]) => {
    const metadata = parseMarkdownMetadata(content);
    return {
      id: filename.replace('.md', ''),
      title: metadata.title,
      createdAt: new Date(metadata.date),
      content,
      filename
    };
  }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}