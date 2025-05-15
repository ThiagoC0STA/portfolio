import { NextResponse } from 'next/server';

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const WAKATIME_USERNAME = process.env.WAKATIME_USERNAME;

if (!WAKATIME_API_KEY || !WAKATIME_USERNAME) {
  throw new Error('Missing WakaTime environment variables');
}

export async function GET() {
  try {
    console.log('Fetching WakaTime stats...');
    console.log('Username:', WAKATIME_USERNAME);
    console.log('API Key:', WAKATIME_API_KEY);

    // Fetch last 7 days stats
    const statsResponse = await fetch(
      `https://wakatime.com/api/v1/users/${WAKATIME_USERNAME}/stats/last_7_days`,
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${WAKATIME_API_KEY}:`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Response status:', statsResponse.status);
    console.log('Response headers:', Object.fromEntries(statsResponse.headers.entries()));

    if (!statsResponse.ok) {
      const errorText = await statsResponse.text();
      console.error('WakaTime API Error Response:', errorText);
      return NextResponse.json({ error: 'Failed to fetch WakaTime stats', details: errorText }, { status: 500 });
    }

    const statsData = await statsResponse.json();
    console.log('WakaTime API Response:', JSON.stringify(statsData, null, 2));

    // Process the data
    const bestDay = statsData.data.best_day
      ? `${new Date(statsData.data.best_day.date).toLocaleDateString()} (${formatTime(statsData.data.best_day.total_seconds)})`
      : 'No data yet';
    const stats = {
      startDate: new Date(statsData.data.start).toLocaleDateString(),
      endDate: new Date(statsData.data.end).toLocaleDateString(),
      dailyAvg: formatTime(statsData.data.daily_average_including_other_language),
      weekTime: formatTime(statsData.data.total_seconds_including_other_language),
      bestDay,
      allTime: formatTime(statsData.data.total_seconds_including_other_language),
      lastUpdate: new Date(statsData.data.modified_at).toLocaleString(),
      langs: (statsData.data.languages || []).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent,
        color: getLanguageColor(lang.name),
      })),
      categories: (statsData.data.categories || []).map((cat: any) => ({
        name: cat.name,
        percent: cat.percent,
        color: getCategoryColor(cat.name),
      })),
    };

    console.log('Processed stats:', JSON.stringify(stats, null, 2));
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return NextResponse.json({ error: 'Failed to fetch WakaTime stats', details: String(error) }, { status: 500 });
  }
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours === 0) {
    return `${minutes} mins`;
  }
  
  return `${hours} hrs ${minutes} mins`;
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    TypeScript: 'bg-gradient-to-r from-yellow-400 to-pink-500',
    JavaScript: 'bg-gradient-to-r from-yellow-400 to-pink-500',
    Python: 'bg-gradient-to-r from-blue-400 to-green-500',
    Java: 'bg-gradient-to-r from-orange-400 to-red-500',
    'C#': 'bg-gradient-to-r from-purple-400 to-pink-500',
    PHP: 'bg-gradient-to-r from-blue-400 to-purple-500',
    Ruby: 'bg-gradient-to-r from-red-400 to-pink-500',
    Go: 'bg-gradient-to-r from-blue-400 to-cyan-500',
    Rust: 'bg-gradient-to-r from-orange-400 to-red-500',
    Swift: 'bg-gradient-to-r from-orange-400 to-pink-500',
  };

  return colors[language] || 'bg-gradient-to-r from-gray-400 to-gray-600';
}

function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    Coding: 'bg-gradient-to-r from-blue-400 to-purple-500',
    Debugging: 'bg-gradient-to-r from-red-400 to-orange-500',
    Building: 'bg-gradient-to-r from-green-400 to-blue-500',
    Testing: 'bg-gradient-to-r from-purple-400 to-pink-500',
    'Code Review': 'bg-gradient-to-r from-yellow-400 to-orange-500',
  };

  return colors[category] || 'bg-gradient-to-r from-gray-400 to-gray-600';
} 