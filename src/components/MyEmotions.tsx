
import React from 'react';
import { Heart, Brain, Zap, Shield } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const MyEmotions = () => {
  const emotionCategories = [
    { name: 'Positive', value: 65, color: '#10B981' },
    { name: 'Neutral', value: 25, color: '#6B7280' },
    { name: 'Challenging', value: 10, color: '#EF4444' }
  ];

  const emotionPatterns = [
    { time: 'Morning', positive: 8, neutral: 3, challenging: 1 },
    { time: 'Afternoon', positive: 6, neutral: 4, challenging: 2 },
    { time: 'Evening', positive: 7, neutral: 3, challenging: 2 },
    { time: 'Night', positive: 5, neutral: 5, challenging: 2 }
  ];

  const copingStrategies = [
    { strategy: 'Deep Breathing', effectiveness: 85, icon: Brain },
    { strategy: 'Journaling', effectiveness: 78, icon: Heart },
    { strategy: 'Exercise', effectiveness: 82, icon: Zap },
    { strategy: 'Meditation', effectiveness: 90, icon: Shield }
  ];

  return (
    <div className="space-y-6">
      {/* Emotion Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Emotion Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emotionCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {emotionCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {emotionCategories.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm text-gray-600">{entry.name} ({entry.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Emotion Patterns</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emotionPatterns}>
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip />
                <Bar dataKey="positive" stackId="a" fill="#10B981" />
                <Bar dataKey="neutral" stackId="a" fill="#6B7280" />
                <Bar dataKey="challenging" stackId="a" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Coping Strategies */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Coping Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copingStrategies.map((strategy, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                <strategy.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-700">{strategy.strategy}</span>
                  <span className="text-sm text-gray-500">{strategy.effectiveness}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${strategy.effectiveness}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEmotions;
