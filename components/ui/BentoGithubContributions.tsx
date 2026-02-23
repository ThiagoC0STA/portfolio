"use client";

import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GithubContributionsChart } from "./GithubContributionsChart";
import Overview from "./Overview";
import axios from "axios";

export const BentoGithubContributions = () => {
  const [calendar, setCalendar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const githubResponse = await axios.get(`/api/github-contributions?username=ThiagoC0STA`);
        setCalendar(githubResponse.data);
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