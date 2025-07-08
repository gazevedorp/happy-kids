import React, { useState, useEffect } from "react";
import { User, Heart, Brain, TrendingUp, Map } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInsights from "@/components/PersonalInsights";
import FlourishingScore from "@/components/FlourishingScore";
import EmotionalAtlas from "@/components/EmotionalAtlas";
import MyEmotions from "@/components/MyEmotions";
import MyTopics from "@/components/MyTopics";
import SideBar from "./SideBar";

const Self = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f6f7] sm:flex-row">
      <SideBar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                My Self
              </h1>
              <p className="text-gray-600">
                Discover your emotional journey and personal insights ✨
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="insights" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-2">
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Personal Insights</span>
              </TabsTrigger>
              <TabsTrigger
                value="flourishing"
                className="flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Flourishing Score</span>
              </TabsTrigger>
              <TabsTrigger value="atlas" className="flex items-center gap-2">
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Emotional Atlas</span>
              </TabsTrigger>
              <TabsTrigger value="emotions" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">My Emotions</span>
              </TabsTrigger>
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">My Topics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="insights">
              <PersonalInsights />
            </TabsContent>

            <TabsContent value="flourishing">
              <FlourishingScore />
            </TabsContent>

            <TabsContent value="atlas">
              <EmotionalAtlas />
            </TabsContent>

            <TabsContent value="emotions">
              <MyEmotions />
            </TabsContent>

            <TabsContent value="topics">
              <MyTopics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Self;
