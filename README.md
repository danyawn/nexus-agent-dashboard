# 🌌 NEXUS: AI Command Center

> **Orchestrate the Autonomous Future** — A Cinematic Command Center for AI Fleets, Co-Architected with Builder.io Fusion.

---

## 📊 Mission Brief

**NEXUS** is an advanced observability and command platform for autonomous AI agent fleets. Born from a hybrid collaboration between human architecture and AI-driven design, NEXUS provides real-time monitoring, intelligent resource allocation, and intuitive swarm orchestration for next-generation AI systems.

Whether you're managing a fleet of 10 agents or 1,000, NEXUS delivers:
- 🎯 **Real-Time Agent Monitoring** — Live status, resource metrics, and health indicators
- 🌐 **Autonomous Fleet Control** — Deploy, scale, and manage AI agents at scale
- 📡 **Neural Swarm Visualization** — Hexagonal heatmaps showing live cluster activity
- 🖥️ **Retro-Futuristic Terminal** — Command-line aesthetic with modern interactivity
- ⚙️ **System Intelligence** — Resource tracking, task queuing, and performance analytics

---

## 🤝 The Hybrid Workflow: Developer + Fusion AI

NEXUS exemplifies the power of **co-architected development**—where human expertise handles structural complexity while AI-driven design creates stunning, sophisticated UX. Here's how we split the workload:

| **Responsibility** | **Developer Role** | **AI (Fusion) Role** |
|---|---|---|
| **Architecture & State** | Next.js 15 App Router, React hooks, component logic, real-time data flow | — |
| **Routing & Navigation** | Multi-page layout (Dashboard, Agents, Logs, Analytics, Settings), route management | — |
| **Animation Framework** | GSAP timeline orchestration, page transitions, scroll triggers, performance optimization | — |
| **Core UI Components** | Sidebar, TopBar, grid layout system, modal structure, accessibility patterns | — |
| **CSS Architecture** | Tailwind v4 configuration, design tokens, theme variables, responsive breakpoints | — |
| **Hexagonal Grid Math** | — | Calculated clip-path polygons for 50-cell hex grid, optimal spacing & scalability |
| **Glassmorphism Design** | — | Backdrop-blur effects, semi-transparent overlays, neon glow treatments, shadow stacking |
| **Neon Toggles & Controls** | — | Cyberpunk-style toggle switches, glowing buttons, interactive feedback states |
| **Complex Layouts** | — | Bento grid composition, responsive stacking, glass-panel arrangements, visual hierarchy |
| **Visual Polish** | — | Gradient overlays, animated pulse effects, micro-interactions, color harmony |

---

## ✨ Key Features

### 🚀 Fleet Command
**3D Glass Cards with Advanced Metrics**
- Monitor live agent status (Active, Idle, Error) with pulsing status indicators
- Real-time CPU and memory tracking per agent
- Dynamic agent deployment via modal UI
- Agent discovery with smart search filtering
- Visual status differentiation with color-coded health indicators

```
├─ Agent-Alpha-001 (GPT-4o) | CPU: 85% | Active ✓
├─ Agent-Beta-007 (Claude-3.5) | CPU: 92% | Active ✓
├─ Agent-Gamma-003 | CPU: 5% | Idle
└─ Agent-Delta-004 | CPU: 0% | Error ✗
```

### 🧠 Neural Swarm Visualizer
**Hexagonal Heatmap — The Crown Jewel**
- 50 hexagonal cells rendered with precise clip-path mathematics
- Real-time heat mapping (Idle → Low → Medium → High activity)
- Interactive hover states with scale transformations
- Color-coded intensity from calm blue to intense neon purple
- Animated pulse effects on high-activity nodes
- Legend system for intuitive interpretation

The hexagon clip-path formula: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`

### 📝 Log Vault
**Terminal Aesthetic with Modern UX**
- Real-time log streaming (new entries every 1.5 seconds)
- Auto-scrolling feed with fade-in animations
- Multi-level severity classification:
  - `[INFO]` — System updates (Emerald green)
  - `[WARN]` — Warnings (Yellow)
  - `[ERROR]` — Failures (Red)
- Monospace terminal font for authentic retro feel
- 50-log circular buffer (performance optimized)
- Source tracking for trace debugging

### ⚙️ System Control
**Cyberpunk-Inspired Toggles & Metrics**
- Resource utilization charts (CPU, Memory, Network, Disk I/O)
- Real-time metric dashboards with Recharts integration
- Task queue visualization
- Custom neon-styled toggle switches
- System status indicators (SYSTEM ONLINE badge)
- Version tracking and deployment info

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Modern React SSR & routing |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with design tokens |
| **Animation** | GSAP 3.13 | Timeline-based motion & effects |
| **Icons** | Lucide React 0.554 | Beautiful, consistent SVG icons |
| **Charts** | Recharts 3.4 | React-powered data visualization |
| **Language** | TypeScript 5 | Type-safe component development |
| **Design AI** | Builder.io Fusion | Advanced UI generation & styling |

### Design System
```
Colors:
  Primary: #0DF2F2 (Cyan)
  Neon Purple: #9D00FF
  Emerald: #00FF7F
  Background: #0A0A0F (Deep Black)
  Glass: rgba(255, 255, 255, 0.05-0.1)

Fonts:
  Display: Space Grotesk (300-700)
  Monospace: Fira Code (for terminal aesthetics)

Effects:
  Glassmorphism: backdrop-filter blur(12px) + semi-transparent borders
  Glow: drop-shadow + box-shadow layering
  Animation: cubic-bezier easing for smooth motion
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (supports Node 20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun** as package manager

### Installation & Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/nexus-ai-command-center.git
   cd nexus-ai-command-center
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or: yarn install / pnpm install / bun install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens at [http://localhost:3000](http://localhost:3000) by default
   - Hot-reload enabled; changes update in real-time

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

5. **Linting & Code Quality**
   ```bash
   npm run lint
   ```

### Project Structure
```
nexus-ai-command-center/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Dashboard (home)
│   ├── agents/page.tsx          # Agent management
│   ├── logs/page.tsx            # Log vault
│   ├── analytics/page.tsx       # Analytics dashboard
│   ├── settings/page.tsx        # System settings
│   ├── layout.tsx               # Root layout & metadata
│   └── globals.css              # Global styles & design tokens
│
├── components/                   # React components
│   ├── Sidebar.tsx              # Left navigation
│   ├── TopBar.tsx               # Header bar
│   ├── AgentGrid.tsx            # Fleet command cards
│   ├── SwarmVisualizer.tsx      # Hexagonal heatmap
│   ├── TerminalFeed.tsx         # Real-time log stream
│   ├── ResourceChart.tsx        # Metrics visualization
│   ├── TaskQueue.tsx            # Task management
│   ├── DeployAgentModal.tsx     # Agent deployment form
│   ├── PageTransition.tsx       # Route animation
│   ├── LayoutClient.tsx         # Client-side layout wrapper
│   └── ... (11 more components)
│
├── public/                       # Static assets
├── package.json                 # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.mjs         # Tailwind CSS setup
├── postcss.config.mjs          # PostCSS plugins
├── eslint.config.mjs           # Linting rules
└── next.config.ts              # Next.js configuration
```

---

## 🎨 Design Philosophy

### Cinematic Visuals
Every interaction feels like a scene from a sci-fi command center—smooth transitions, purposeful animations, and a cohesive cyberpunk aesthetic that doesn't sacrifice functionality.

### Glassmorphism Mastery
Layered transparency, micro-blur effects, and strategically placed neon glows create visual depth without overwhelming the interface. Each panel is a glass surface in a futuristic cockpit.

### Responsive & Performant
Built with mobile-first principles and optimized rendering. The hexagonal grid scales gracefully, glassmorphic effects use GPU acceleration, and animations leverage GSAP's performance optimizations.

---

## 📊 Feature Walkthrough

### Dashboard (Home)
The command center epicenter. A bento-grid layout featuring:
- **Agent Grid** (2×2 span) — Fleet status at a glance
- **Resource Chart** (1×2 span) — System metrics
- **Task Queue** (1×1 span) — Incoming work
- **Terminal Feed** (2×1 span) — Real-time logs

### Agents Page
Deep-dive into individual agent performance, deployment history, and resource allocation.

### Logs Page
Full-screen log vault with advanced filtering, search, and export capabilities.

### Analytics
Performance trends, fleet utilization graphs, and historical data visualization.

### Settings
System configuration, theme customization, and API integrations.

---

## 🔌 Integration Points

### Adding New Agents
```tsx
const newAgent = {
  id: 'my-agent-001',
  name: 'My-Agent',
  status: 'active',
  cpu: 45,
  memory: 32,
  model: 'GPT-4o',
};
// Deploy via AgentGrid modal
```

### Extending Log Feed
```tsx
const logEntry = {
  timestamp: '14:23:45',
  level: 'INFO',
  message: 'Your custom message',
  source: 'Your Service',
};
// Integrates automatically into TerminalFeed
```

### Custom Metrics
Connect your own APIs to ResourceChart:
```tsx
// Update data sources in ResourceChart.tsx
const [metrics, setMetrics] = useState(fetchMetrics());
```

---

## 🎯 Development Workflow

### Component Creation
1. Create `.tsx` file in `/components`
2. Use existing design tokens from `globals.css`
3. Apply `glass-panel` class for consistency
4. Leverage Tailwind's utility classes
5. Add TypeScript interfaces for props

### Styling Best Practices
- Use CSS variables (e.g., `var(--primary)`) for consistency
- Leverage `glass-panel` class for panel effects
- Apply `glow-border-*` classes for neon effects
- Use shorthand Tailwind for responsive design

### Animation Integration
- GSAP timelines in `PageTransition.tsx`
- useEffect hooks for entrance animations
- CSS transitions for lightweight state changes

---

## 🚀 Deployment

### Vercel (Recommended)
The fastest path to production, built by the creators of Next.js:

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site goes live instantly with automatic deployments on git push.

### Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Custom Servers
NEXUS runs anywhere Node.js is available—AWS, Google Cloud, DigitalOcean, etc.

---

## 📚 Learning Resources

- **[Next.js Docs](https://nextjs.org/docs)** — Official framework guide
- **[Tailwind CSS v4](https://tailwindcss.com/docs)** — Utility-first styling
- **[GSAP Docs](https://gsap.com/docs)** — Animation mastery
- **[React 19](https://react.dev)** — Latest React features
- **[Builder.io Guides](https://www.builder.io/c/docs)** — AI-driven design insights

---

## 🤖 The Fusion Advantage

This project showcases how **Builder.io Fusion** accelerates enterprise UI development:

✅ **Rapid Iteration** — Complex glassmorphism effects coded in seconds  
✅ **Consistent Design** — AI maintains visual language across 14+ components  
✅ **Production Quality** — No placeholder code; full implementations  
✅ **Developer Freedom** — Architects handle logic while Fusion handles aesthetics  
✅ **Scalable Architecture** — Easy to extend with new features and pages  

**Result:** A cinematic command center built in a fraction of traditional development time.

---

## 📝 License

This project is open-source under the **MIT License**. See `LICENSE` file for details.

---

## 🙌 Credits

**Hybrid Co-Creation:**
- **Developer** — Architecture, routing, state management, animation logic
- **Builder.io Fusion** — Hexagonal grids, glassmorphism CSS, neon aesthetics, complex layouts

Built for the **Builder.io Hackathon** 🏆

---

## 💬 Support & Feedback

- **Issues** — Found a bug? Open an issue on GitHub
- **Discussions** — Questions? Start a discussion
- **Feedback** — Feature requests? We'd love to hear your ideas

---

**NEXUS: Orchestrate the Autonomous Future.** 🌌✨

