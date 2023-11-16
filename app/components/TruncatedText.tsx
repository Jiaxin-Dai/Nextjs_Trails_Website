import React from 'react'

interface TruncatedTextProps {
    text: string;
    maxWords: number;
  }
  
const TruncatedText = ({ text, maxWords }: TruncatedTextProps) => {
    const words = text.split(' ');
    const truncatedText = words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
  
    return <span>{truncatedText}</span>;
};

export default TruncatedText