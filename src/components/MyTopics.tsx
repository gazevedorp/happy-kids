
import React from 'react';
import { BookOpen, TrendingUp, Clock, MessageSquare } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const MyTopics = () => {
  const topicTrends = [
    { month: 'Jan', emotional: 12, relationships: 8, growth: 15, work: 10 },
    { month: 'Feb', emotional: 15, relationships: 10, growth: 18, work: 8 },
    { month: 'Mar', emotional: 18, relationships: 12, growth: 20, work: 12 },
    { month: 'Apr', emotional: 20, relationships: 15, growth: 22, work: 14 },
    { month: 'May', emotional: 23, relationships: 15, growth: 18, work: 12 }
  ];

  const recentTopics = [
    {
      title: 'Processing Difficult Emotions',
      frequency: 18,
      lastDiscussed: '2 days ago',
      insights: 'You often explore ways to handle challenging feelings constructively.',
      icon: BookOpen
    },
    {
      title: 'Building Stronger Relationships',
      frequency: 15,
      lastDiscussed: '1 week ago',
      insights: 'Focus on communication and connection with loved ones.',
      icon: MessageSquare
    },
    {
      title: 'Personal Growth & Development',
      frequency: 22,
      lastDiscussed: '3 days ago',
      insights: 'Continuous learning and self-improvement are important to you.',
      icon: TrendingUp
    },
    {
      title: 'Work-Life Balance',
      frequency: 12,
      lastDiscussed: '5 days ago',
      insights: 'Finding harmony between professional and personal life.',
      icon: Clock
    }
  ];

  return (
    <div className="space-y-6">
      {/* Topic Trends Chart */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Topic Discussion Trends</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={topicTrends}>
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="emotional"
                stackId="1"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
                name="Emotional Wellbeing"
              />
              <Area
                type="monotone"
                dataKey="relationships"
                stackId="1"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.6}
                name="Relationships"
              />
              <Area
                type="monotone"
                dataKey="growth"
                stackId="1"
                stroke="#06B6D4"
                fill="#06B6D4"
                fillOpacity={0.6}
                name="Personal Growth"
              />
              <Area
                type="monotone"
                dataKey="work"
                stackId="1"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.6}
                name="Work Life"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recentTopics.map((topic, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                <topic.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{topic.title}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <span>{topic.frequency} discussions</span>
                  <span>•</span>
                  <span>{topic.lastDiscussed}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{topic.insights}</p>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${(topic.frequency / 25) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTopics;
