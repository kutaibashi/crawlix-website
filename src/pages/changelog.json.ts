import type { APIRoute } from 'astro';
import { getReleases } from '../lib/keystatic';

export const GET: APIRoute = async () => {
  const releases = await getReleases();

  const changelog = releases.map((release) => ({
    version: release.version,
    date: release.date,
    notes: [
      ...release.highlights,
      ...release.changes.map((c) => `${c.title}${c.description ? ': ' + c.description : ''}`),
    ],
  }));

  return new Response(JSON.stringify(changelog), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
