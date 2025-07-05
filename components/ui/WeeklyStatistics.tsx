"use client";

import React from "react";
import clsx from 'clsx';

// Componente Progress simples
const Progress = ({ data, className = "" }: { data: { name: string; percent: number; color: string }, className?: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs text-neutral-800 dark:text-white w-20">{data.name}</span>
    <div className="flex-1 h-2 rounded bg-[#23232a] overflow-hidden">
      <div className={clsx("h-2 rounded", data.color, className)} style={{ width: `${data.percent}%` }} />
    </div>
    <span className="text-xs font-bold ml-2 text-neutral-800 dark:text-white">{data.percent}%</span>
  </div>
);

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

interface WeeklyStatisticsProps {
  stats: WakaTimeStats | null;
}

export const WeeklyStatistics = ({ stats }: WeeklyStatisticsProps) => {
  if (!stats) return null;

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">⏱️</span>
        <h2 className="text-lg md:text-xl font-bold text-white">Weekly Statistics</h2>
        <span className="ml-auto text-xs text-gray-500">Last update: {stats.lastUpdate}</span>
      </div>
      <p className="text-gray-400 text-xs mb-4">My WakaTime last 7 days stats.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        <div className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
          <span className="text-xs text-gray-400">Start Date</span>
          <span className="text-white font-semibold text-sm">{stats.startDate}</span>
        </div>
        <div className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
          <span className="text-xs text-gray-400">End Date</span>
          <span className="text-white font-semibold text-sm">{stats.endDate}</span>
        </div>
        <div className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
          <span className="text-xs text-gray-400">Daily Coding Average</span>
          <span className="text-white font-semibold text-sm">{stats.dailyAvg}</span>
        </div>
        <div className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
          <span className="text-xs text-gray-400">This Week Coding Time</span>
          <span className="text-white font-semibold text-sm">{stats.weekTime}</span>
        </div>
        <div className="bg-[#10132e] rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
          <span className="text-xs text-gray-400">Best Day Coding Time</span>
          <span className="text-white font-semibold text-sm">{stats.bestDay}</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-4">
        {/* Languages */}
        <div className={clsx('relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]', 'bg-gradient-to-r from-amber-400 to-rose-600')}>
          <div className="h-full w-full rounded-lg bg-[#10132e] p-2">
            <p className="absolute -top-3 left-3 bg-[#10132e] px-2 text-white">Languages</p>
            <ul className="flex flex-col gap-1 px-4 py-3">
              {stats.langs?.map((lang) => (
                <li key={lang.name}>
                  <Progress data={lang} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Categories */}
        <div className={clsx('relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]', 'bg-gradient-to-r from-blue-400 to-purple-600')}>
          <div className="h-full w-full rounded-lg bg-[#10132e] p-2">
            <p className="absolute -top-3 left-3 bg-[#10132e] px-2 text-white">Categories</p>
            <ul className="flex flex-col gap-1 px-4 py-3">
              {stats.categories?.map((cat) => (
                <li key={cat.name}>
                  <Progress data={cat} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 