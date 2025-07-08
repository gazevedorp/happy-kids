
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface Topic {
  name: string;
  count: number;
  color: string;
}

interface TopicsChartProps {
  topics: Topic[];
}

const TopicsChart: React.FC<TopicsChartProps> = ({ topics }) => {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topics} layout="horizontal">
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={100}
            fontSize={12}
            tick={{ fill: '#6B7280' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Bar 
            dataKey="count" 
            fill="#8B5CF6"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopicsChart;
