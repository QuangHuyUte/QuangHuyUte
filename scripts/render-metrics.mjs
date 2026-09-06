import { mkdir, writeFile } from "node:fs/promises";

const username = process.env.PROFILE_USERNAME || "QuangHuyUte";
const token = process.env.GITHUB_TOKEN;
const api = "https://api.github.com";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "QuangHuyUte-profile-metrics",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function getJson(path) {
  const response = await fetch(`${api}${path}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${path}`);
  }
  return response.json();
}

function xml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function compact(value) {
  return Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function label(value, max = 23) {
  return value.length <= max ? value : `${value.slice(0, max - 1)}…`;
}

const languageColors = {
  Python: "#3572A5",
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  Java: "#B07219",
  Handlebars: "#F7931E",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Jinja: "#A52A22",
  Shell: "#89E051",
};

const [profile, repositories] = await Promise.all([
  getJson(`/users/${username}`),
  getJson(`/users/${username}/repos?type=owner&sort=pushed&direction=desc&per_page=100`),
]);

const repos = repositories.filter((repo) => !repo.archived);
const owned = repos.filter((repo) => !repo.fork);
const totals = owned.reduce(
  (result, repo) => ({
    stars: result.stars + repo.stargazers_count,
    forks: result.forks + repo.forks_count,
  }),
  { stars: 0, forks: 0 },
);

const languageResponses = await Promise.all(
  owned.map(async (repo) => {
    try {
      return await getJson(`/repos/${username}/${encodeURIComponent(repo.name)}/languages`);
    } catch (error) {
      console.warn(`Skipping language data for ${repo.name}: ${error.message}`);
      return {};
    }
  }),
);

const languageTotals = new Map();
for (const languages of languageResponses) {
  for (const [language, bytes] of Object.entries(languages)) {
    languageTotals.set(language, (languageTotals.get(language) || 0) + bytes);
  }
}

const topLanguages = [...languageTotals.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);
const languageBytes = topLanguages.reduce((sum, [, bytes]) => sum + bytes, 0) || 1;
const latest = owned[0];
const activeSince = Date.now() - 90 * 24 * 60 * 60 * 1000;
const recentlyActive = owned.filter((repo) => new Date(repo.pushed_at).getTime() >= activeSince).length;
const generated = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  timeZone: "UTC",
}).format(new Date());

let bars = "";
let barX = 42;
for (const [language, bytes] of topLanguages) {
  const width = Math.max(4, Math.round((bytes / languageBytes) * 876));
  const color = languageColors[language] || "#8B9EB0";
  bars += `<rect x="${barX}" y="181" width="${width}" height="10" rx="5" fill="${color}"/>`;
  barX += width;
}

const legend = topLanguages
  .map(([language, bytes], index) => {
    const x = 42 + index * 176;
    const percent = Math.round((bytes / languageBytes) * 100);
    const color = languageColors[language] || "#8B9EB0";
    return `<circle cx="${x}" cy="218" r="5" fill="${color}"/><text x="${x + 11}" y="222" fill="#AFC3D6" font-size="12">${xml(label(language, 15))} ${percent}%</text>`;
  })
  .join("");

const svg = `<svg width="960" height="300" viewBox="0 0 960 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${xml(username)}'s live GitHub metrics</title>
  <desc id="desc">${owned.length} repositories, ${totals.stars} stars, ${totals.forks} forks and ${profile.followers} followers. Updated ${xml(generated)}.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="960" y2="300"><stop stop-color="#050B17"/><stop offset=".55" stop-color="#09182C"/><stop offset="1" stop-color="#112746"/></linearGradient>
    <linearGradient id="line" x1="42" y1="0" x2="918" y2="0"><stop stop-color="#22D3EE"/><stop offset=".55" stop-color="#60A5FA"/><stop offset="1" stop-color="#A78BFA"/></linearGradient>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="skewX(-16)"><path d="M28 0H0V28" stroke="#8BD5FF" stroke-opacity=".055"/></pattern>
    <filter id="shadow" x="-30%" y="-40%" width="160%" height="190%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#020610" flood-opacity=".68"/></filter>
  </defs>
  <rect x="1" y="1" width="958" height="298" rx="20" fill="url(#bg)" stroke="#28435F" stroke-width="2"/>
  <path d="M0 184L960 92V300H0Z" fill="url(#grid)"/>
  <path d="M726 7L959 7V101L838 127L726 86Z" fill="#23496B" fill-opacity=".24"/>
  <g font-family="Segoe UI, Inter, Arial, sans-serif">
    <text x="42" y="42" fill="#F8FAFC" font-size="20" font-weight="700">LIVE GITHUB SNAPSHOT</text>
    <text x="918" y="42" fill="#8299AF" text-anchor="end" font-size="12">UPDATED ${xml(generated.toUpperCase())}</text>
    <rect x="42" y="57" width="876" height="2" rx="1" fill="url(#line)"/>

    <g filter="url(#shadow)">
      <rect x="32" y="72" width="156" height="69" rx="13" fill="#0D2037" stroke="#234B69"/>
      <rect x="205" y="72" width="156" height="69" rx="13" fill="#0D2037" stroke="#234B69"/>
      <rect x="378" y="72" width="156" height="69" rx="13" fill="#0D2037" stroke="#234B69"/>
      <rect x="551" y="72" width="156" height="69" rx="13" fill="#0D2037" stroke="#234B69"/>
      <rect x="724" y="72" width="204" height="69" rx="13" fill="#0D2037" stroke="#234B69"/>
    </g>
    <text x="48" y="105" fill="#22D3EE" font-size="28" font-weight="750">${owned.length}</text><text x="48" y="128" fill="#9FB5C9" font-size="11">REPOSITORIES</text>
    <text x="221" y="105" fill="#FACC15" font-size="28" font-weight="750">${compact(totals.stars)}</text><text x="221" y="128" fill="#9FB5C9" font-size="11">STARS EARNED</text>
    <text x="394" y="105" fill="#A78BFA" font-size="28" font-weight="750">${compact(totals.forks)}</text><text x="394" y="128" fill="#9FB5C9" font-size="11">FORKS</text>
    <text x="567" y="105" fill="#34D399" font-size="28" font-weight="750">${compact(profile.followers)}</text><text x="567" y="128" fill="#9FB5C9" font-size="11">FOLLOWERS</text>
    <text x="740" y="105" fill="#60A5FA" font-size="28" font-weight="750">${recentlyActive}</text><text x="740" y="128" fill="#9FB5C9" font-size="11">ACTIVE · 90 DAYS</text>

    <text x="42" y="162" fill="#DCE9F5" font-size="13">Latest: ${xml(label(latest?.name || "—", 42))}</text>
    ${bars}
    ${legend}
    <path d="M42 250H918" stroke="url(#line)" stroke-opacity=".35"/>
    <circle cx="58" cy="272" r="4" fill="#42E8E0"><animate attributeName="cx" values="58;350;636;902" dur="7s" repeatCount="indefinite"/></circle>
    <text x="42" y="277" fill="#718AA0" font-size="10" letter-spacing="1">API → NORMALIZE → AGGREGATE → SVG</text>
    <text x="918" y="277" fill="#718AA0" text-anchor="end" font-size="10">rendered with JavaScript + GitHub Actions</text>
  </g>
</svg>`;

await mkdir("metrics", { recursive: true });
await writeFile("metrics/profile.svg", `${svg}\n`, "utf8");
console.log(`Rendered metrics/profile.svg for ${username}`);
