import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalHeaderProps {
  currentPath: string;
  commands: Record<string, string>;
}

export function TerminalHeader({ currentPath, commands }: TerminalHeaderProps) {
  return (
    <div className="bg-gray-700 p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <TerminalIcon className="w-5 h-5" />
        <span className="font-mono">{currentPath}</span>
      </div>
      <div className="flex gap-2">
        {Object.keys(commands).map(cmd => (
          <span key={cmd} className="text-xs bg-gray-600 px-2 py-1 rounded">
            {cmd}
          </span>
        ))}
      </div>
    </div>
  );
}