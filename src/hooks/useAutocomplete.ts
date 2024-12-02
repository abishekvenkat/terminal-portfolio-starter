import { useState, useEffect } from 'react';

export function useAutocomplete(
  input: string,
  suggestions: string[],
  setInput: (value: string) => void
) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (input) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setSelectedIndex(-1);
    } else {
      setFilteredSuggestions([]);
    }
  }, [input, suggestions]);

  const handleTabPress = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && filteredSuggestions.length > 0) {
      e.preventDefault();
      if (selectedIndex === -1) {
        setInput(filteredSuggestions[0]);
      } else {
        const nextIndex = (selectedIndex + 1) % filteredSuggestions.length;
        setInput(filteredSuggestions[nextIndex]);
        setSelectedIndex(nextIndex);
      }
    }
  };

  return { handleTabPress, filteredSuggestions };
}