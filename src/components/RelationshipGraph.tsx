
import React from 'react';
import { Heart, Users, User } from 'lucide-react';

const RelationshipGraph = () => {
  const relationships = [
    { name: 'Family', strength: 90, icon: Heart, color: '#EF4444' },
    { name: 'Close Friends', strength: 85, icon: Users, color: '#10B981' },
    { name: 'Partner', strength: 95, icon: Heart, color: '#8B5CF6' },
    { name: 'Work Colleagues', strength: 70, icon: Users, color: '#06B6D4' },
    { name: 'Therapist', strength: 80, icon: User, color: '#F59E0B' }
  ];

  return (
    <div className="space-y-4">
      {relationships.map((rel, index) => (
        <div key={index} className="flex items-center gap-3">
          <div 
            className="p-2 rounded-full"
            style={{ backgroundColor: `${rel.color}20` }}
          >
            <rel.icon className="w-4 h-4" style={{ color: rel.color }} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-700">{rel.name}</span>
              <span className="text-sm text-gray-500">{rel.strength}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${rel.strength}%`,
                  backgroundColor: rel.color
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelationshipGraph;
