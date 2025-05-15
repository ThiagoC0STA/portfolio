export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            weeks {
              firstDay
              contributionDays {
                date
                contributionCount
                color
              }
            }
            months {
              name
              firstDay
              totalWeeks
            }
            colors
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: { userName: username },
    }),
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Erro ao buscar dados do GitHub' }), { status: response.status });
  }

  const data = await response.json();
  if (data.errors) {
    return new Response(JSON.stringify({ error: data.errors }), { status: 500 });
  }

  return new Response(JSON.stringify(data.data.user.contributionsCollection.contributionCalendar), { status: 200 });
} 