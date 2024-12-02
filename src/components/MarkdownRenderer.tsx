import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            return (
              <code
                className={`${className} bg-gray-700 rounded px-1 py-0.5`}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre({ node, children, ...props }) {
            return (
              <pre
                className="bg-gray-700 rounded p-4 overflow-x-auto"
                {...props}
              >
                {children}
              </pre>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}