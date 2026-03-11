import { fetchRepositories, fetchDevelopers } from './src/functions/utils/fetch';
import languages from './src/languages.json';
import spokenLanguages from './src/spoken-languages.json';

export default {
  // eslint-disable-next-line complexity
  async fetch(request, _env, _ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const params = Object.fromEntries(url.searchParams);

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0',
    };

    try {
      if (path === '/' || path === '/repositories' || path === '/api/repositories') {
        const data = await fetchRepositories({
          language: params.language,
          since: params.since,
          spokenLanguage: params.spoken_language_code,
        });
        return new Response(JSON.stringify(data && data.length > 0 ? data : []), { headers });
      } else if (path === '/developers' || path === '/api/developers') {
        const data = await fetchDevelopers({
          language: params.language,
          since: params.since,
        });
        return new Response(JSON.stringify(data && data.length > 0 ? data : []), { headers });
      } else if (path === '/languages' || path === '/api/languages') {
        headers['Cache-Control'] = 'public, max-age=86400';
        return new Response(JSON.stringify(languages), { headers });
      } else if (path === '/spoken_languages' || path === '/api/spoken_languages') {
        headers['Cache-Control'] = 'public, max-age=86400';
        return new Response(JSON.stringify(spokenLanguages), { headers });
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), { status: 404, headers });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers });
    }
  },
};