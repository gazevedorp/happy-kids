import React, { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";
import { subDays, parseISO, isAfter } from "date-fns";
import CheckInInsights from "@/components/CheckInInsights";
import MoodTrendChart from "@/components/MoodTrendChart";
import EmotionDistributionChart from "@/components/EmotionDistributionChart";
import CheckInTimeline from "@/components/CheckInTimeline";
import TimeFilter from "@/components/TimeFilter";
import SideBar from "./SideBar";

interface CheckInData {
  id: string;
  timestamp: string;
  emotions: string[];
  emotionsSummary: string;
  moodScore: number;
}

const CheckInHistory = () => {
  const [checkIns, setCheckIns] = useState<CheckInData[]>([]);
  const [timeFilter, setTimeFilter] = useState("all");

  useEffect(() => {
    // Load check-ins from localStorage
    const storedCheckIns = localStorage.getItem("emotionCheckIns");
    if (storedCheckIns) {
      const parsedCheckIns = JSON.parse(storedCheckIns);
      setCheckIns(parsedCheckIns);
    } else {
      // Generate some sample data for demonstration
      const sampleData = generateSampleData();
      setCheckIns(sampleData);
      localStorage.setItem("emotionCheckIns", JSON.stringify(sampleData));
    }
  }, []);

  const generateSampleData = (): CheckInData[] => {
    const emotions = [
      "happy",
      "calm",
      "excited",
      "lonely",
      "sad",
      "angry",
      "anxious",
      "grateful",
    ];
    const data = [];

    for (let i = 0; i < 10; i++) {
      const date = subDays(new Date(), i * 2);
      const selectedEmotions = emotions.slice(
        0,
        Math.floor(Math.random() * 4) + 1
      );
      const moodScore = Math.random() * 100;

      data.push({
        id: `checkin-${i}`,
        timestamp: date.toISOString(),
        emotions: selectedEmotions,
        emotionsSummary: `Feeling ${selectedEmotions.join(", ")} today`,
        moodScore: Math.round(moodScore),
      });
    }

    return data.reverse();
  };

  const getFilteredCheckIns = () => {
    if (timeFilter === "all") return checkIns;

    const days = timeFilter === "7d" ? 7 : timeFilter === "30d" ? 30 : 90;
    const cutoffDate = subDays(new Date(), days);

    return checkIns.filter((checkIn) =>
      isAfter(parseISO(checkIn.timestamp), cutoffDate)
    );
  };

  const filteredCheckIns = getFilteredCheckIns();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f6f7] sm:flex-row">
      <SideBar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Check-in History
              </h1>
              <p className="text-gray-600">
                Your emotional journey and insights ✨
              </p>
            </div>
          </div>

          {/* Time Filter */}
          <div className="mb-6">
            <TimeFilter
              selectedFilter={timeFilter}
              onFilterChange={setTimeFilter}
            />
          </div>

          {filteredCheckIns.length === 0 ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-sm border border-gray-200 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No check-ins yet
              </h3>
              <p className="text-gray-500">
                Start your emotional wellness journey by completing your first
                check-in! 💜
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Insights Panel */}
              <div className="lg:col-span-1 space-y-6">
                <CheckInInsights checkIns={filteredCheckIns} />
                <EmotionDistributionChart checkIns={filteredCheckIns} />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <MoodTrendChart checkIns={filteredCheckIns} />
                <CheckInTimeline checkIns={filteredCheckIns} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckInHistory;
