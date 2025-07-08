
import React from 'react';
import { Map, Compass, Navigation } from 'lucide-react';

const EmotionalAtlas = () => {
  const emotionalMap = [
    { emotion: 'Joy', x: 80, y: 20, size: 'large', color: '#F59E0B' },
    { emotion: 'Calm', x: 20, y: 30, size: 'medium', color: '#10B981' },
    { emotion: 'Excited', x: 85, y: 40, size: 'medium', color: '#EF4444' },
    { emotion: 'Anxious', x: 70, y: 70, size: 'small', color: '#6B7280' },
    { emotion: 'Content', x: 40, y: 25, size: 'large', color: '#06B6D4' },
    { emotion: 'Grateful', x: 60, y: 15, size: 'medium', color: '#8B5CF6' },
    { emotion: 'Frustrated', x: 75, y: 85, size: 'small', color: '#EF4444' },
    { emotion: 'Peaceful', x: 15, y: 20, size: 'medium', color: '#10B981' },
    { emotion: 'Hopeful', x: 50, y: 35, size: 'large', color: '#06B6D4' }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large': return 'w-8 h-8 text-sm';
      case 'medium': return 'w-6 h-6 text-xs';
      case 'small': return 'w-4 h-4 text-xs';
      default: return 'w-6 h-6 text-xs';
    }
  };

  return (
    <div className="space-y-6">
      {/* Atlas Description */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Map className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Your Emotional Landscape</h3>
        </div>
        <p className="text-gray-600 mb-4">
          This map represents your emotional territory - the emotions you experience most frequently are larger and positioned based on how you typically feel them together.
        </p>
      </div>

      {/* Emotional Map */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden">
          {/* Compass */}
          <div className="absolute top-4 right-4 p-2 bg-white/80 rounded-full">
            <Compass className="w-5 h-5 text-gray-600" />
          </div>
          
          {/* Axis Labels */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
            High Energy
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
            Low Energy
          </div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 rotate-90 text-xs text-gray-500">
            Positive
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-500">
            Negative
          </div>

          {/* Emotion Points */}
          {emotionalMap.map((emotion, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 cursor-pointer"
              style={{
                left: `${emotion.x}%`,
                top: `${emotion.y}%`
              }}
            >
              <div
                className={`${getSizeClass(emotion.size)} rounded-full flex items-center justify-center font-medium text-white shadow-lg`}
                style={{ backgroundColor: emotion.color }}
                title={emotion.emotion}
              >
                {emotion.emotion.slice(0, 3)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3">Emotional Territories</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {emotionalMap.map((emotion, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: emotion.color }}
              />
              <span className="text-sm text-gray-600">{emotion.emotion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalAtlas;
