
import React from 'react';
import { format, parseISO } from 'date-fns';

interface CheckInData {
  id: string;
  timestamp: string;
  emotions: string[];
  emotionsSummary: string;
  moodScore: number;
}

interface CheckInTimelineProps {
  checkIns: CheckInData[];
}

const CheckInTimeline: React.FC<CheckInTimelineProps> = ({ checkIns }) => {
  const getMoodColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    if (score >= 40) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="flex h-[450px] flex-col rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Timeline</h3>
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {checkIns.map((checkIn) => (
          <div key={checkIn.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${getMoodColor(checkIn.moodScore)}`}>
                {checkIn.moodScore}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-800">
                  {format(parseISO(checkIn.timestamp), 'MMM dd, yyyy')}
                </div>
                <div className="text-xs text-gray-500">
                  {format(parseISO(checkIn.timestamp), 'h:mm a')}
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {checkIn.emotionsSummary}
              </div>
              <div className="flex flex-wrap gap-1">
                {checkIn.emotions.map((emotion, emotionIndex) => (
                  <span
                    key={emotionIndex}
                    className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                  >
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckInTimeline;
