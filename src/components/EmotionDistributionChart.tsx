
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface CheckInData {
  id: string;
  timestamp: string;
  emotions: string[];
  emotionsSummary: string;
  moodScore: number;
}

interface EmotionDistributionChartProps {
  checkIns: CheckInData[];
}

const EmotionDistributionChart: React.FC<EmotionDistributionChartProps> = ({ checkIns }) => {
  const getEmotionDistribution = () => {
    const emotionCounts: { [key: string]: number } = {};
    
    checkIns.forEach(checkIn => {
      checkIn.emotions.forEach(emotion => {
        emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
      });
    });

    const colors = ['#fbbf24', '#10b981', '#f59e0b', '#6b7280', '#3b82f6', '#ef4444'];
    
    return Object.entries(emotionCounts).map(([emotion, count], index) => ({
      name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      value: count,
      color: colors[index % colors.length]
    }));
  };

  const emotionDistribution = getEmotionDistribution();

  if (emotionDistribution.length === 0) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Emotion Distribution</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={emotionDistribution}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {emotionDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {emotionDistribution.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionDistributionChart;
