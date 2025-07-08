
import React from 'react';

const WordCloud = () => {
  const words = [
    { text: 'emotions', size: 32, color: '#8B5CF6' },
    { text: 'growth', size: 28, color: '#06B6D4' },
    { text: 'feelings', size: 24, color: '#10B981' },
    { text: 'relationships', size: 26, color: '#F59E0B' },
    { text: 'mindfulness', size: 20, color: '#EF4444' },
    { text: 'healing', size: 22, color: '#8B5CF6' },
    { text: 'self-care', size: 18, color: '#06B6D4' },
    { text: 'anxiety', size: 24, color: '#10B981' },
    { text: 'happiness', size: 26, color: '#F59E0B' },
    { text: 'stress', size: 20, color: '#EF4444' },
    { text: 'balance', size: 22, color: '#8B5CF6' },
    { text: 'therapy', size: 18, color: '#06B6D4' },
    { text: 'meditation', size: 20, color: '#10B981' },
    { text: 'journaling', size: 16, color: '#F59E0B' },
    { text: 'support', size: 24, color: '#EF4444' }
  ];

  return (
    <div className="relative h-64 flex flex-wrap items-center justify-center gap-2 p-4">
      {words.map((word, index) => (
        <span
          key={index}
          className="font-semibold transition-all hover:scale-110 cursor-pointer"
          style={{
            fontSize: `${word.size}px`,
            color: word.color,
            transform: `rotate(${Math.random() * 20 - 10}deg)`
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
