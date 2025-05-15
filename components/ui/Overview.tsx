"use client";

import React from "react";

interface OverviewProps {
  data: {
    totalContributions?: number;
    weeks?: {
      contributionDays: {
        contributionCount: number;
      }[];
    }[];
  };
}

const Overview = ({ data }: OverviewProps) => {
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) || 0;

  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount,
      ),
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributionList.length > 0 ? totalContributions / totalContributionList.length : 0;

  const stats = [
    {
      label: "Total",
      value: totalContributions,
    },
    {
      label: "This Week",
      value: totalThisWeekContribution,
    },
    {
      label: "Best Day",
      value: bestContribution,
    },
    {
      label: "Average",
      value: `${averageContribution.toFixed(1)} / day`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 py-2 w-full flex-1 -mt-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#10132e] rounded-xl p-4 flex flex-col items-center border border-white/10 w-full min-h-[72px] md:min-h-[80px] justify-center transition-transform hover:scale-[1.03] hover:border-blue-400/40"
        >
          <span className="text-xs text-gray-400 font-medium mb-1 tracking-wide uppercase">{stat.label}</span>
          <span className="text-2xl font-bold text-white">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview; 