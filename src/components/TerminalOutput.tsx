import React from 'react';
import { Command } from '../types';

interface TerminalOutputProps {
  entry: Command;
}

export function TerminalOutput({ entry }: TerminalOutputProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 text-green-400">
        <span>→</span>
        <span>{entry.command}</span>
      </div>
      <div className="mt-2 pl-6">{entry.output}</div>
    </div>
  );
}