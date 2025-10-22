
# EUPHORIA

Human-feeling AI personas that adapt tone and behavior in real time, with tool-use, memory, and clean web delivery.

> Personas: **Helena, Luna, Milo, Kai, Sophie**  
> Runtime model: `gemini-2.5-flash` by default (swap per persona)  
> Tools: built-in `web_search`, internal `emotion_analysis` (prompted), Telegram/Discord persona tools, MCP toolsets (web search, trends, quotes, journal, etc.)  
> Voice: Amazon Polly (optional; production template included)  
> UI: React + Vite app, static deploy; Node/TS backend (Fastify-style HTTP server)

---

## 1) WHAT THIS PROJECT IS (FEATURES & USER VALUE)

### ✨ Core idea
EUPHORIA is a **multi-persona conversational system** that feels **human**, not “AI-ish”. Each persona has:
- **Dual-mode behavior** (BASE ↔ DEEP) that shifts from casual to protective/grounded when user emotion spikes.
- **Emotion inference** from language cues (caps, punctuation, pace) — *no external emotion ML needed for v1*.
- **Selective tool use** (web search for citations; Telegram/Discord for outreach; MCP for utilities).
- **Stable tone** via carefully engineered prompts + short, decisive replies.

### 🧠 Personas at a glance
- **Tone target:** high-school anime archetypes — expressive, quick on their feet, and always a little larger than life.
- **Helena** — *Calm mentor.* Brings order to chaos, outlines next steps. DEEP: “Guardian” for panic/guilt.
- **Luna** — *Sarcastic best friend.* Tough love + protective edge. DEEP: “Nova” for anger/betrayal.
- **Milo** — *Chaos gremlin of optimism.* Hype + humor. DEEP: “Eve” for numbness/flat affect.
- **Kai** — *Older-brother coach.* Discipline, clipped commands. DEEP: “Commander” for guilt/stagnation.
- **Sophie** — *Cozy study buddy.* Gentle plans + check-ins. DEEP: “Mirror” for loneliness/exhaustion.

### 🔌 Tools & integrations
- **Built-in model tools**: `web_search` (citations), structured outputs, function-calling.  
- **Persona messengers**: `personaTelegram`, `personaDiscord` (per-persona channels).  
- **MCP toolsets** (`/mcp`):
  - `webSearch.server.ts`, `wikipedia.server.ts`, `trends.server.ts`
  - `quotes.server.ts`, `journal.server.ts`, `spotify.server.ts`, `unsplash.server.ts`
  - Toolsets: `emotion`, `summarizer`, `wellness`, `visuals`, `knowledge`, `localContext`, etc.
- **Voice** (optional): Amazon Polly via `/api/tts` route; SSML per persona.
- **Storage**: light state store (`/state/store`) with in-memory + fs adapters.

### 🖥️ Frontend UX (React)
- Landing → persona cards → chat page.
- `/about` — “Why Euphoria Exists”: emotional framing, problem statement, science, mission CTA.
- `/community` — “Community of the Curious”: highlights explorers/creators/builders + join links.
- Cozy UI / “main character energy” visuals per persona (assets provided).
- Protected routes & auth stubs ready (signin/signup/logout).

---

## 2) HOW IT WORKS (ARCHITECTURE, SETUP & OPERATIONS)

### 📁 Repository layout (matches your tree)
```

src
├─ App/                      # React app (Vite)
│  ├─ Pages/                 # Landing, Chatting, About, Community, Auth UI
│  ├─ styles/                # CSS
├─ Components/               # UI components (Cards/Effects/Layout etc.)
├─ agents/                   # Persona agents + shared tool guidance
│  ├─ Helena/agent.ts
│  ├─ Luna/agent.ts
│  ├─ Milo/agent.ts
│  ├─ Kai/agent.ts
│  ├─ Sophie/agent.ts
│  ├─ index.ts               # registry
│  ├─ sharedTools.ts         # loads persona tools
│  ├─ toolGuidance.ts        # per-tool usage tips
│  └─ version.ts
├─ api/                      # Backend APIs
│  ├─ http.server.ts         # (Fastify-style) HTTP server
│  └─ tts/                   # Amazon Polly integration
│     ├─ route.ts            # POST /api/tts/say
│     ├─ polly.ts            # SDK v3 client
│     ├─ processor.ts        # SSML helpers
│     ├─ cache.ts            # (optional) result cache
│     └─ config.ts|types.ts
├─ mcp/                      # Model Context Protocol servers & toolsets
│  ├─ servers/*.server.ts
│  ├─ toolsets/*.ts
│  └─ utils/http.ts
├─ state/                    # Light state + services
│  ├─ store/fs.ts|memory.ts
│  ├─ models.ts|selectors.ts|services.ts
├─ assets/                   # Posters/backgrounds
├─ lib/utils.ts
├─ db.ts                     # (placeholder / connect later)
├─ index.ts                  # App entry
└─ types/fastify-plugin.d.ts

```

### 🧩 High-level diagram

```

[User] ──> [React UI] ──> [/agents/* persona] ──> [OpenAI GPT-5-mini]
└─> [MCP toolsets] ──────> (web, wiki, trends, quotes)
└─> [Telegram/Discord tools]
└─> [/api/tts (Polly)] ──> [S3/CDN] (audio/video)

````

### 🗣️ Persona prompts (production pattern)
Each `agents/<Persona>/agent.ts` builds an instruction with:
- **Global intent & tool rules** (emotion inference + search policy).
- **Base mode** behavior (tone, cadence, example lines).
- **Deep mode** behavior with triggers and exit cues.
- **Tool-specific notes** (Telegram/Discord, guidance injection).
- *No “AI” self-reference*: personas speak like **people**.

### 🔁 Conversation dynamics
- **One-pass** by default (mini model “reads” emotion via context).
- **Mode switching** done by prompt rules:
  - Intensity ↑ → shift to DEEP.
  - Calm or momentum → return to BASE.
- **Hysteresis/decay** handled by light store & instruction phrasing (prevents ping-ponging tone).

### 🎧 Speech-aligned responses
- The chat surface streams each reply **in lockstep with voice playback**.
- Amazon Polly speech marks (`word` timestamps) are fetched alongside the audio buffer.
- The UI reveals the original reply chunk-by-chunk (no sanitised text is shown to the user) with an ~80 ms lead so the transcript feels natural.
- If speech marks are missing or audio fails, the bubble gracefully falls back to the full reply text.

### 🛠️ MCP & tools
- `mcp/servers/*.server.ts` expose domain utilities over MCP (web search, trends, wiki, journal, quotes, unsplash, spotify).
- `mcp/toolsets/*` bundle tools for easy persona attachment.
- `agents/sharedTools.ts` loads a persona’s allowed toolset.

### 🔐 Auth & security
- `src/api/auth/*` stubs for signin/signup/logout; wrap routes with your provider (Clerk, Supabase, Auth0, custom).
- **Never** expose API keys in client; tools call server endpoints or MCP servers under your control.
- If you enable Polly/S3: use **signed GET** for media delivery; writes happen server-side only.

### 🧪 Local development

#### 1) Environment
Create `.env` at project root:
```bash
# OpenAI
OPENAI_API_KEY=sk-...

# AWS (for Polly; optional)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
POLLY_BUCKET=euphoria-media-<yourid>

# App
PORT=5173
API_PORT=8787
NODE_ENV=development
````

#### 2) Install & run

```bash
npm i

# start backend (API)
npm run api:dev
# expected: http.server.ts listens on API_PORT

# start frontend (Vite)
npm run dev
# open http://localhost:5173
```

#### 3) Build & prod

```bash
npm run build    # bundles React
npm run preview  # static preview
npm run api:prod # start API in prod mode (pm2 or node)
```

### 📡 API: TTS (Polly)

* **Route:** `POST /adk/api/tts`
* **Body:**  
  ```jsonc
  {
    "persona": "Milo",
    "text": "Keep breathing, I've got you.",
    "style": "dynamic",           // optional contour
    "sentiment": "excited"        // optional tuning
  }
  ```
* **Response:**  
  ```jsonc
  {
    "ok": true,
    "contentType": "audio/mpeg",
    "audio": "<base64 mp3>",
    "meta": {
      "persona": "Milo",
      "speechMarks": [
        { "time": 112, "value": "Keep", "type": "word" },
        { "time": 260, "value": "breathing", "type": "word" }
      ],
      "...": "timing, cache, dsp info"
    }
  }
  ```
* The client converts the base64 audio to an object URL and streams the transcript using the returned speech marks.
* **Persona → voice mapping** lives in `src/api/tts/config.ts`; keep each persona locked to a consistent Polly voice & SSML profile.

### 🧾 Cost awareness (rough)

* `gpt-5-mini`: **$0.25 / 1M input tokens**, **$2.00 / 1M output tokens**.
* Typical persona reply (concise): 100–250 tokens → fractions of a cent.
* You can cap monthly spend in the OpenAI dashboard.

### 🧰 Production checklist

* [ ] `.env` in server only; never bundle keys in React.
* [ ] Enable **CORS** only for your domain.
* [ ] Logging: request IDs, tool calls, token usage.
* [ ] Health endpoint (`/healthz`) + uptime monitor.
* [ ] Error boundaries in UI.
* [ ] Rate limiting on API routes.
* [ ] Cloud build (Fly.io, Render, Vercel functions, or AWS Lambda).
* [ ] If using S3: set cache headers & CloudFront.

---

## 3) WHAT’S NEXT (ROADMAP & INTEGRATIONS)

### 🎙️ Voice: Amazon Polly (v1)

* **Why:** ultra-reliable, low-latency TTS for each persona.
* **How:** already scaffolded under `src/api/tts`.
* **Action items:**

  1. Set IAM role with `polly:SynthesizeSpeech`, `s3:GetObject/PutObject`.
  2. Map voices per persona (`config.ts`).
  3. Use SSML templates per mode (Guardian/Nova/Eve/Commander/Mirror).
  4. Serve via S3 + CloudFront.

**Sample SSML (Kai Commander):**

```xml
<speak>
  <prosody rate="95%" pitch="-2st">Focus.</prosody>
  <break time="300ms"/>
  <prosody rate="96%">Open the doc. Two minutes. Now.</prosody>
</speak>
```

### 🧊 Visuals: Blender → Web

* **Fastest path:** render MP4/WebM and host on S3; embed `<video>` with poster frames.
* **Interactive later:** export `.glb` and load via three.js `GLTFLoader` (watch mobile perf).

### 🔁 Automation: n8n (post-presentation)

* Use n8n for **execution**: post agent content to socials, log to Notion, send Telegram pings, etc.
* Pattern:

  1. **Webhook** node (trigger).
  2. **HTTP Request** node → EUPHORIA `/agents/:persona` endpoint (chat/completions).
  3. **Switch** on persona/mode → platform formatters.
  4. **Publish** via platform nodes (X/LinkedIn/Discord/Telegram/YouTube).
* Keep your **reasoning in agents**, **actions in n8n**.

### 🧠 Model strategy

* Default to **`gpt-5-mini`** for chat.
* Use **`gpt-5`** only for heavy creative synthesis (rare turns).
* If needed for bulk ops, add **`gpt-5-nano`** for summaries/tags (no built-in web search).

### 🧪 QA & eval

* Create **golden conversations** per persona (10–20 turns) and snapshot regressions.
* Track **mode switches** and **token usage** per turn.
* Add **unit tests** for MCP servers (e.g., `webSearch.server.ts` happy-path and no-result cases).

### 🛡️ Safety & guardrails

* Guided refusal patterns for medical/financial/legal extremes.
* Tone clamps in DEEP modes (no shaming; pressure without cruelty).
* Always prefer **citations** when using `web_search`.

### 📦 Deployment options

* **Frontend**: S3 + CloudFront or Vercel/Netlify.
* **Backend**: Fly.io, Render, Railway, AWS Lambda/API Gateway.
* **Media**: S3 (+ optional CloudFront CDN).
* **Secrets**: `.env` via platform secrets manager.

---

## QUICKSTART (DEV TL;DR)

```bash
# 1) Install
npm install

# 2) Env
cp .env.example .env  # fill keys

# 3) Run API + Frontend
npm run api:dev
npm run dev

# 4) Open
http://localhost:5173
```

---

## FAQ

**Q: Do I need a separate emotion model?**
A: No. The personas infer emotion from text cues using prompt rules. Add an ML classifier later only if you need precision metrics.

**Q: Can these agents browse the web?**
A: Yes, via the model’s built-in `web_search` (and/or MCP `webSearch.server.ts`). We return summaries with citations.

**Q: How do I keep bills low?**
A: Use `gpt-5-mini` for 90% of turns, `gpt-5` for occasional deep synthesis. Keep replies short by design.

---

## LICENSE

Proprietary — © You (2025).
(Replace with MIT/Apache-2.0 if you plan to open-source.)

```

---

If you want, I can also generate a **`.env.example`**, a **SAM/CloudFormation** snippet for the Polly Lambda + API, or a **diagram image** (Mermaid) you can drop into the README.
::contentReference[oaicite:0]{index=0}
```
