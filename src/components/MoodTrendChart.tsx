
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

interface CheckInData {
  id: string;
  timestamp: string;
  emotions: string[];
  emotionsSummary: string;
  moodScore: number;
}

interface MoodTrendChartProps {
  checkIns: CheckInData[];
}

const MoodTrendChart: React.FC<MoodTrendChartProps> = ({ checkIns }) => {
  const getMoodTrendData = () => {
    return checkIns.map(checkIn => ({
      date: format(parseISO(checkIn.timestamp), 'MMM dd'),
      mood: checkIn.moodScore,
      timestamp: checkIn.timestamp
    }));
  };

  const moodTrendData = getMoodTrendData();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Mood Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moodTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              domain={[0, 100]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 6, fill: '#8b5cf6' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodTrendChart;
