
import React from 'react';
import { MessageCircle, Users, Brain, Heart } from 'lucide-react';
import WordCloud from '@/components/WordCloud';
import RelationshipGraph from '@/components/RelationshipGraph';
import TopicsChart from '@/components/TopicsChart';

const PersonalInsights = () => {
  const personalStats = {
    totalConversations: 47,
    emotionalCheckIns: 12,
    topicsExplored: 18,
    relationshipsMentioned: 8
  };

  const topTopics = [
    { name: 'Emotional Wellbeing', count: 23, color: '#8B5CF6' },
    { name: 'Personal Growth', count: 18, color: '#06B6D4' },
    { name: 'Relationships', count: 15, color: '#10B981' },
    { name: 'Work Life', count: 12, color: '#F59E0B' },
    { name: 'Mental Health', count: 10, color: '#EF4444' },
    { name: 'Self Reflection', count: 8, color: '#8B5CF6' }
  ];

  const recentInsights = [
    {
      title: "You often discuss emotional patterns",
      description: "Your conversations frequently center around understanding and processing emotions.",
      icon: Heart
    },
    {
      title: "Growth mindset is prominent", 
      description: "You show a strong interest in personal development and self-improvement.",
      icon: Brain
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200 text-center">
          <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{personalStats.totalConversations}</div>
          <div className="text-sm text-gray-600">Conversations</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200 text-center">
          <Heart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{personalStats.emotionalCheckIns}</div>
          <div className="text-sm text-gray-600">Check-ins</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200 text-center">
          <Brain className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{personalStats.topicsExplored}</div>
          <div className="text-sm text-gray-600">Topics Explored</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200 text-center">
          <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{personalStats.relationshipsMentioned}</div>
          <div className="text-sm text-gray-600">Relationships</div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Insights */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Insights</h3>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-xl bg-gray-50">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <insight.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{insight.title}</h4>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Topics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Most Discussed Topics</h3>
          <TopicsChart topics={topTopics} />
        </div>
      </div>

      {/* Word Cloud and Relationships */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Word Cloud</h3>
          <WordCloud />
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Relationships</h3>
          <RelationshipGraph />
        </div>
      </div>
    </div>
  );
};

export default PersonalInsights;
