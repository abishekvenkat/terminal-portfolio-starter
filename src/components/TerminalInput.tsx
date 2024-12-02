import React, { useEffect } from 'react';
import { useAutocomplete } from '../hooks/useAutocomplete';

interface TerminalInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  commands: string[];
}

export function TerminalInput({ 
  input, 
  setInput, 
  onSubmit, 
  inputRef,
  commands 
}: TerminalInputProps) {
  const { handleTabPress, filteredSuggestions } = useAutocomplete(
    input,
    commands,
    setInput
  );

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('keydown', handleTabPress);
      return () => {
        inputElement.removeEventListener('keydown', handleTabPress);
      };
    }
  }, [handleTabPress]);

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span className="text-green-400">→</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none"
          autoFocus
        />
      </form>
      {filteredSuggestions.length > 0 && (
        <div className="mt-2 pl-6 text-gray-400">
          {filteredSuggestions.map((suggestion, index) => (
            <div key={suggestion} className="text-sm">
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}