const PLACEHOLDER_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// Replace each url with its project's endpoint when it is ready.
const tiles = [
  { domain: "voice", tag: "Voice AI", title: "Realtime Voice Pipeline", desc: "Streaming audio, WebSockets, interruption handling, and speech-to-speech versus cascaded ASR → LLM → TTS.", url: PLACEHOLDER_URL },
  { domain: "voice", tag: "Voice AI", title: "Voice AI Receptionist Agent", desc: "A live voice agent for scheduling, with keypad confirmation and hybrid RAG.", url: PLACEHOLDER_URL },
  { domain: "rl", tag: "Real-time & RL", title: "Sales RLAgent", desc: "A voice-controlled sales workflow with agent orchestration and reinforcement learning.", url: PLACEHOLDER_URL },
  { domain: "rl", tag: "Real-time & RL", title: "Impostor Lab Multi-Agent RL", desc: "A multi-agent reinforcement learning environment exploring self-play.", url: PLACEHOLDER_URL }
];
const tileGrid = document.getElementById("tileGrid");
const domainFilter = document.getElementById("domainFilter");
const toggleDensity = document.getElementById("toggleDensity");
const shuffleTiles = document.getElementById("shuffleTiles");
function renderTiles() {
  const visible = tiles.filter(tile => domainFilter.value === "all" || tile.domain === domainFilter.value);
  tileGrid.replaceChildren(...visible.map((tile) => {
    const link = document.createElement("a");
    link.className = "vm-tile";
    link.href = tile.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const badge = document.createElement("span"); badge.className = "tile-badge"; badge.textContent = tile.tag;
    const title = document.createElement("h3"); title.textContent = tile.title;
    const description = document.createElement("p"); description.textContent = tile.desc;
    const cta = document.createElement("span"); cta.className = "tile-cta"; cta.textContent = "Open project · New tab";
    link.append(badge, title, description, cta);
    return link;
  }));
}
domainFilter.addEventListener("change", renderTiles);
toggleDensity.addEventListener("click", () => {
  const compact = tileGrid.classList.toggle("compact");
  toggleDensity.setAttribute("aria-pressed", String(compact));
  toggleDensity.textContent = compact ? "Expanded view" : "Compact view";
});
shuffleTiles.addEventListener("click", () => {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  renderTiles();
});
renderTiles();
