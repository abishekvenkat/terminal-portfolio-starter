import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import { userProfile } from '../data/profile';
import { TerminalHeader } from './TerminalHeader';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { CommandOutputs } from './CommandOutputs';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Command } from '../types';
import { getPostContent, getAllPosts } from '../utils/markdown';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [currentPath, setCurrentPath] = useState('/');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    'ls': 'List blog posts',
    'cat': 'View blog post content',
    'whoami': 'About me',
    'netstat': 'View projects',
    'pwd': 'Print working directory',
    'clear': 'Clear terminal',
    'help': 'Show available commands'
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();
    let output: string | JSX.Element = 'Command not found. Type "help" for available commands.';

    switch (command) {
      case 'ls':
        const files = getAllPosts();
        output = <CommandOutputs 
          type={args[1] === '-a' ? 'ls-a' : 'ls'} 
          data={files} 
        />;
        break;

      case 'cat':
        const filename = args[1];
        if (filename) {
          const content = getPostContent(filename);
          output = <MarkdownRenderer content={content} />;
        } else {
          output = 'Please specify a file to read';
        }
        break;

      case 'whoami':
        output = <CommandOutputs type="whoami" data={userProfile} />;
        break;

      case 'netstat':
        output = <CommandOutputs type="netstat" data={projects} />;
        break;

      case 'pwd':
        output = `/${userProfile.name}'s portfolio`;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'help':
        output = <CommandOutputs type="help" data={commands} />;
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <TerminalHeader currentPath={currentPath} commands={commands} />
          
          <div 
            ref={terminalRef}
            className="p-4 font-mono text-sm h-[80vh] overflow-y-auto"
          >
            {history.map((entry, i) => (
              <TerminalOutput key={i} entry={entry} />
            ))}
            
            <TerminalInput
              input={input}
              setInput={setInput}
              onSubmit={handleSubmit}
              inputRef={inputRef}
              commands={Object.keys(commands)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}