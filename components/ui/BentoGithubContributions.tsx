"use client";

import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GithubContributionsChart } from "./GithubContributionsChart";
import Overview from "./Overview";
import { WeeklyStatistics } from "./WeeklyStatistics";
import axios from "axios";

interface WakaTimeStats {
  startDate: string;
  endDate: string;
  dailyAvg: string;
  weekTime: string;
  bestDay: string;
  allTime: string;
  lastUpdate: string;
  langs: {
    name: string;
    percent: number;
    color: string;
  }[];
  categories: {
    name: string;
    percent: number;
    color: string;
  }[];
}

const mockStats: WakaTimeStats = {
  startDate: "01/01/2024",
  endDate: "07/01/2024",
  dailyAvg: "1 hr 23 mins",
  weekTime: "8 hrs 10 mins",
  bestDay: "03/01/2024 (2 hrs 10 mins)",
  allTime: "100 hrs 00 mins",
  lastUpdate: "07/01/2024, 12:00",
  langs: [
    { name: "TypeScript", percent: 60, color: "bg-gradient-to-r from-yellow-400 to-pink-500" },
    { name: "JavaScript", percent: 30, color: "bg-gradient-to-r from-yellow-400 to-pink-500" },
    { name: "Python", percent: 10, color: "bg-gradient-to-r from-blue-400 to-green-500" },
  ],
  categories: [
    { name: "Coding", percent: 90, color: "bg-gradient-to-r from-blue-400 to-purple-500" },
    { name: "Debugging", percent: 10, color: "bg-gradient-to-r from-red-400 to-orange-500" },
  ],
};

export const BentoGithubContributions = () => {
  const [calendar, setCalendar] = useState<any>(null);
  const [wakaStats, setWakaStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [githubResponse, wakaResponse] = await Promise.all([
          axios.get(`/api/github-contributions?username=ThiagoC0STA`),
          axios.get('/api/wakatime-stats')
        ]);

        setCalendar(githubResponse.data);
        if (wakaResponse.data && !wakaResponse.data.error) {
          setWakaStats(wakaResponse.data);
        } else {
          setWakaStats(null);
        }
      } catch (err) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col gap-8">
        {/* WakaTime Stats Loading */}
        <div className="animate-pulse">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-gray-700 rounded" />
            <div className="h-6 w-48 bg-gray-700 rounded" />
            <div className="ml-auto h-4 w-24 bg-gray-700 rounded" />
          </div>
          <div className="h-4 w-64 bg-gray-700 rounded mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#10132e] rounded-xl p-3 flex flex-col gap-1 border border-white/10">
                <div className="h-3 w-20 bg-gray-700 rounded" />
                <div className="h-4 w-32 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-[#10132e] rounded-xl p-4 border border-yellow-500/30">
              <div className="h-4 w-24 bg-gray-700 rounded mb-4" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-20 bg-gray-700 rounded" />
                  <div className="flex-1 h-2 bg-gray-700 rounded" />
                  <div className="h-3 w-8 bg-gray-700 rounded" />
                </div>
              ))}
            </div>
            <div className="flex-1 bg-[#10132e] rounded-xl p-4 border border-blue-500/30">
              <div className="h-4 w-24 bg-gray-700 rounded mb-4" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-20 bg-gray-700 rounded" />
                  <div className="flex-1 h-2 bg-gray-700 rounded" />
                  <div className="h-3 w-8 bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/10 my-2" />
        {/* GitHub Contributions Loading */}
        <div className="animate-pulse">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-gray-700 rounded" />
            <div className="h-6 w-48 bg-gray-700 rounded" />
            <div className="ml-2 h-4 w-32 bg-gray-700 rounded" />
          </div>
          <div className="h-4 w-64 bg-gray-700 rounded mb-6" />
          <div className="flex flex-col md:flex-row gap-4 items-start w-full">
            <div className="w-full md:w-auto md:flex-[2]">
              <div className="h-[120px] bg-gray-700 rounded" />
            </div>
            <div className="w-full md:w-auto md:flex-1">
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center border border-white/10">
                    <div className="h-3 w-16 bg-gray-700 rounded mb-2" />
                    <div className="h-6 w-12 bg-gray-700 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col gap-8">
        <div className="text-red-400 text-center p-4 bg-red-900/20 rounded-xl border border-red-500/30">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      {/* WakaTime Stats */}
      {!wakaStats && (
        <div className="text-yellow-400 text-center p-2 bg-yellow-900/20 rounded-xl border border-yellow-500/30 mb-4">
          Using mock data for WakaTime stats. Please check your WakaTime API configuration.
        </div>
      )}
      <WeeklyStatistics stats={wakaStats || mockStats} />
      {/* Divider */}
      <div className="border-t border-white/10 my-2" />
      {/* GitHub Contributions */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <FiGithub className="text-2xl text-white" />
          <h2 className="text-lg md:text-2xl font-bold text-white">Contributions</h2>
          <a
            href="https://github.com/ThiagoC0STA"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs text-neutral-400 hover:text-neutral-200 font-mono underline"
          >
            @ThiagoC0STA
          </a>
        </div>
        <p className="text-gray-400 text-base mb-6">My contributions from last year on github.</p>
        <div className="w-full flex flex-col gap-2">
          {calendar && (
            <div className="flex flex-col md:flex-row gap-4 items-start w-full">
              <div className="w-full md:w-auto md:flex-[2] overflow-auto">
                <GithubContributionsChart data={calendar} />
              </div>
              <div className="w-full md:w-auto md:flex-1">
                <Overview data={calendar} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 