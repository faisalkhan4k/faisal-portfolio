const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

let tiles = [
  {
    id: "realtime-voice-vm",
    domain: "voice",
    tag: "Voice AI VM",
    title: "Realtime Voice Pipeline",
    desc: "Streaming audio, WebSockets, interruption handling, and speech-to-speech vs. cascaded ASR -> LLM -> TTS.",
    url: RICKROLL_URL
  },
  {
    id: "receptionist-vm",
    domain: "voice",
    tag: "Voice AI VM",
    title: "Voice AI Receptionist Agent",
    desc: "LiveKit + Deepgram + FastAPI + Groq scheduling agent with keypad confirmation and Hybrid RAG.",
    url: RICKROLL_URL
  },
  {
    id: "sales-rl-vm",
    domain: "rl",
    tag: "Real-Time & RL VM",
    title: "Sales RLAgent",
    desc: "Voice-controlled sales workflow with LangGraph, hierarchical PPO policies, FastAPI, and PostgreSQL.",
    url: RICKROLL_URL
  },
  {
    id: "impostor-lab-vm",
    domain: "rl",
    tag: "Real-Time & RL VM",
    title: "Impostor Lab Multi-Agent RL",
    desc: "PyTorch PPO actor-critic self-play environment with OpenTelemetry and TensorBoard tracking.",
    url: RICKROLL_URL
  }
];

const tileGrid = document.getElementById("tileGrid");
const domainFilter = document.getElementById("domainFilter");
const toggleDensity = document.getElementById("toggleDensity");
const shuffleTiles = document.getElementById("shuffleTiles");

function renderTiles() {
  const filterVal = domainFilter.value;
  const visible = filterVal === "all" ? tiles : tiles.filter((t) => t.domain === filterVal);

  tileGrid.innerHTML = visible
    .map(
      (tile) => `
      <a class="vm-tile" href="${tile.url}" target="_blank" rel="noopener noreferrer">
        <div>
          <div class="tile-badge">${tile.tag}</div>
          <h3>${tile.title}</h3>
        </div>
        <p>${tile.desc}</p>
        <span class="tile-cta">Launch Cloud VM &rarr;</span>
      </a>
    `
    )
    .join("");
}

domainFilter.addEventListener("change", renderTiles);

toggleDensity.addEventListener("click", () => {
  tileGrid.classList.toggle("compact");
  toggleDensity.textContent = tileGrid.classList.contains("compact")
    ? "Expanded View"
    : "Compact View";
});

shuffleTiles.addEventListener("click", () => {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  renderTiles();
});

renderTiles();
