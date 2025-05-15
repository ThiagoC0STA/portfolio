"use client";

import React from "react";
import { cn } from "@/lib/utils";
interface GithubContributionsChartProps {
  data: any;
  className?: string;
}

export const GithubContributionsChart: React.FC<GithubContributionsChartProps> = ({ data, className }) => {
  if (!data) return null;
  const weeks = data.weeks || [];
  const months = data.months || [];
  const colors = data.colors || [];

  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      {/* Container com scroll horizontal no mobile */}
      <div className="overflow-x-auto  max-w-[80vw]">
        {/* Labels dos meses */}
        <ul className="flex justify-between gap-[2px] md:gap-[3px] text-[10px] md:text-xs text-gray-400">
          {months.map((month: any) => (
            <li
              key={month.firstDay}
              className={month.totalWeeks < 2 ? 'invisible' : ''}
              style={{ minWidth: `calc(${month.totalWeeks} * 12px)` }}
            >
              {month.name}
            </li>
          ))}
        </ul>
        {/* Grid de contribuições */}
        <div className="flex justify-start gap-[2px] md:gap-[3px]">
          {weeks.map((week: any) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution: any) => (
                <span
                  key={contribution.date}
                  className="my-[1.5px] md:my-[2px] block h-[10px] w-[10px] md:h-[12px] md:w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800"
                  style={contribution.contributionCount > 0 ? { backgroundColor: contribution.color } : {backgroundColor: 'rgb(24 27 55)'}}
                  title={contribution.date ? `${contribution.date}: ${contribution.contributionCount} contributions` : ''}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Legenda Less/More */}
      <div className="flex items-center gap-2 mt-2 text-xs md:text-sm mb-6 md:mb-0">
        <span className="text-gray-400">Less</span>
        <ul className="flex gap-0.5 md:gap-1">
          <li className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] rounded-sm" style={{backgroundColor: 'rgb(24 27 55)'}}/>
          {colors.map((item: string, index: number) => (
            <li
              key={item}
              className="h-[8px] w-[8px] md:h-[10px] md:w-[10px] rounded-sm"
              style={{ backgroundColor: item }}
            />
          ))}
        </ul>
        <span>More</span>
      </div>
    </div>
  );
}; 