
import React from 'react';
import { Heart, TrendingUp, BarChart3 } from 'lucide-react';

interface CheckInData {
  id: string;
  timestamp: string;
  emotions: string[];
  emotionsSummary: string;
  moodScore: number;
}

interface CheckInInsightsProps {
  checkIns: CheckInData[];
}

const CheckInInsights: React.FC<CheckInInsightsProps> = ({ checkIns }) => {
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

  const getInsights = () => {
    if (checkIns.length === 0) return [];

    const avgMood = checkIns.reduce((sum, checkIn) => sum + checkIn.moodScore, 0) / checkIns.length;
    const mostCommonEmotion = getEmotionDistribution()[0]?.name || 'N/A';
    const recentTrend = checkIns.length >= 3 ? 
      (checkIns.slice(-3).reduce((sum, checkIn) => sum + checkIn.moodScore, 0) / 3) - 
      (checkIns.slice(0, 3).reduce((sum, checkIn) => sum + checkIn.moodScore, 0) / 3) : 0;

    return [
      {
        icon: Heart,
        title: 'Average Mood',
        value: `${Math.round(avgMood)}/100`,
        description: avgMood > 70 ? 'Great overall mood!' : avgMood > 50 ? 'Balanced emotional state' : 'Room for improvement'
      },
      {
        icon: TrendingUp,
        title: 'Recent Trend',
        value: recentTrend > 5 ? 'Improving' : recentTrend < -5 ? 'Declining' : 'Stable',
        description: recentTrend > 5 ? 'Your mood is trending upward' : recentTrend < -5 ? 'Consider self-care activities' : 'Consistent emotional state'
      },
      {
        icon: BarChart3,
        title: 'Most Common Emotion',
        value: mostCommonEmotion,
        description: `You frequently experience ${mostCommonEmotion.toLowerCase()} feelings`
      }
    ];
  };

  const insights = getInsights();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Insights</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <insight.icon className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-800">{insight.title}</span>
            </div>
            <div className="text-lg font-bold text-purple-600 mb-1">{insight.value}</div>
            <div className="text-sm text-gray-600">{insight.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckInInsights;
