# Zero-Effort Regression Testing in Go: Interactive Keploy Guide 🐰

[![Built with Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![Content in MDX](https://img.shields.io/badge/Content-MDX-fcb32c?logo=markdown)](https://mdxjs.com/)
[![Keploy Verified](https://img.shields.io/badge/Keploy-v3.6.85-ff7a18?logo=docker)](https://keploy.io/)
[![Go Version](https://img.shields.io/badge/Go-1.23%2B-00ADD8?logo=go)](https://go.dev/)

An interactive, single-page developer guide and documentation experience demonstrating how **Keploy** converts live API traffic into automated regression tests and deterministic mocks in Go without writing a single line of test code or manual stubs.

Built as an engineering assignment for **Keploy** with a focus on DevRel quality, technical accuracy, rich aesthetics, and verified reproducibility.

---

## 🎯 What This Tutorial Teaches

1. **The Mental Model**: Why traditional Go testing (table-driven tests, `httptest.Server`, brittle struct mocks) drifts from production reality, and how Keploy's **eBPF (Extended Berkeley Packet Filter)** socket interception transparently solves this.
2. **Record Mode**: Running unmodified Go binaries under `keploy record`, intercepting inbound client requests, and capturing outbound external dependency traffic (DNS lookups and HTTPS calls to PokeAPI).
3. **Anatomy of Generated Artifacts**: Breaking down `test-set-0/tests/*.yaml` golden master test cases, auto-detected noise fields (`header.Date`), and `test-set-0/mocks.yaml` external mock contracts.
4. **Isolated Replay Mode**: Replaying tests hermetically in seconds with `keploy test` where all third-party dependencies are mocked from disk without leaving the machine.
5. **Catching Real Regressions**: Demonstrating an actual failure when business logic is modified (`Height: res.Height + 10`), complete with side-by-side terminal diff analysis.
6. **Real-World Gotchas**: Hard-won DevRel discoveries covering Windows Defender binary heuristics, minimal Alpine Linux `musl` vs `glibc` agent loading, and WSL2 `tracefs` mounting.

---

## 🛠️ Tech Stack & Architecture

* **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
* **Content Engine**: Native **MDX** (`next-mdx-remote/rsc`) — content genuinely lives in `content/tutorial.mdx`
* **Styling**: Vanilla CSS Design System with dark/light themes, glassmorphism, responsive grid layout, and fluid typography
* **Syntax Highlighting**: Prism.js with custom dual-theme token styles
* **Icons**: [Lucide React](https://lucide.dev/)
* **Verified Runtime**: Keploy v3.6.85, Go 1.23.6 on Ubuntu 22.04 LTS (WSL2 Linux Kernel 6.18)

---

## 🧩 Custom Interactive UI Components

* `<WorkflowProgress />`: Interactive phase navigator (`01 RECORD` &rarr; `02 GENERATE` &rarr; `03 REPLAY` &rarr; `04 VERIFY`) with smooth anchor jumping.
* `<ArchitectureDiagram />`: Interactive SVG/CSS diagram toggling between **Record** and **Replay** topologies.
* `<FilePreview />`: Tabbed code inspector displaying real recorded YAML test cases and DNS/HTTP mocks.
* `<RegressionDiff />`: Side-by-side comparison table visualizing the exact regression detected during testing.
* `<TerminalBlock />`: Developer terminal window with shell indicators, copy buttons, and formatted output panes.
* `<WhyItMatters />`: Dedicated DevRel callout explaining architectural reasoning behind each step.
* `<Callout />`: Accessible alerts with `info`, `tip`, `warning`, `success`, and `important` variants.
* `<ThemeToggle />`: Accessible, persistent dark/light mode switcher with system preference detection.

---

## 🚀 Local Development

### 1. Prerequisites
* Node.js `v20+` or `v22+`
* npm / pnpm / yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🧪 Verified Quickstart Replication Guide

To independently reproduce the verified Go quickstart:

```bash
# 1. Clone the sample Go repository
git clone --depth 1 https://github.com/keploy/samples-go.git
cd samples-go/http-pokeapi

# 2. Compile Go binary
go build -o http-pokeapi .

# 3. Mount tracefs (if in fresh WSL2/Linux environment)
sudo mount -t tracefs nodev /sys/kernel/tracing

# 4. Record API traffic
keploy record -c './http-pokeapi'

# 5. In another terminal, generate traffic
curl -i http://localhost:8080/api/pokemon/pikachu
curl -i http://localhost:8080/api/pokemon/ditto

# 6. Stop record (Ctrl+C) and replay tests hermetically
keploy test -c './http-pokeapi' --delay 5
```

---

## 📄 License & Attribution

Author: Yash Rao (`yashrao2607`)  
Submitted for the Keploy Developer Relations Engineering Assignment.
