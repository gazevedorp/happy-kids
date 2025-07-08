
import React from 'react';
import { TrendingUp, Star, Target, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const FlourishingScore = () => {
  const currentScore = 7.8;
  const scoreData = [
    { month: 'Jan', score: 6.2 },
    { month: 'Feb', score: 6.8 },
    { month: 'Mar', score: 7.1 },
    { month: 'Apr', score: 7.5 },
    { month: 'May', score: 7.8 }
  ];

  const dimensions = [
    { name: 'Emotional Wellbeing', score: 8.2, icon: Star },
    { name: 'Life Satisfaction', score: 7.5, icon: Target },
    { name: 'Relationships', score: 8.0, icon: Award },
    { name: 'Personal Growth', score: 7.8, icon: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      {/* Current Score */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Flourishing Score</h2>
        <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          {currentScore}
        </div>
        <p className="text-gray-600">Out of 10.0 - You're thriving! 🌟</p>
      </div>

      {/* Score Trend */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Score Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scoreData}>
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis domain={[0, 10]} stroke="#6B7280" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dimensions Breakdown */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Flourishing Dimensions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dimensions.map((dim, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                <dim.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-700">{dim.name}</span>
                  <span className="text-lg font-bold text-purple-600">{dim.score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${(dim.score / 10) * 100}%` }}
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

export default FlourishingScore;
