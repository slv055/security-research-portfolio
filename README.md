# Security Research Portfolio

Build a clean, high-clarity personal portfolio web app for S. Lakshmi Vignesh (@w3shi), Security Researcher and Engineer.

Design & Style requirements:
- Linux / hacker inspired aesthetic, BUT strictly NO cheesy full-screen CLI/terminal simulator. Do not make the user type commands or struggle through simulated shell prompts.
- Sleek, modern, highly readable, and minimal engineering/security feel: subtle subtle dark theme (slate/zinc dark palette #090d16 / #0d1117 / #050810), crisp typography (clean sans for content like Inter/Geist, paired with tasteful mono accents for hashes, CVE IDs, metrics, tags), subtle subtle scanline or dot grid or subtle kernel-style status pill bar, but perfectly readable for recruiters and engineering leads.
- Fast visual hierarchy so anyone landing can immediately grasp the achievements:
  1. Hero Header: S. Lakshmi Vignesh, handle "w3shi", "Security Researcher & AppSec Engineer". Quick links/badges: HackerOne (hackerone.com/w3shi), LinkedIn (linkedin.com/in/lakshmi-vignesh-s), Email (Slvignesh05@gmail.com), Phone (+91 8807149187). Quick copy-to-clipboard buttons for contact and handle.
  2. Stat / Key Highlight Bar (Key Metrics at a glance):
     - #1 Globally (Intel Q1 2026 Rankings)
     - Microsoft MVR (Most Valuable Researcher) 2025 (Ranked #2 Globally MSRC Q4 2025, #5 Top Azure Researcher)
     - 60+ Disclosed Vulnerabilities across 40+ Top Orgs
     - 12 Public CVEs (Intel, Microsoft, NVIDIA)
     - NASA Letter of Recommendation & Contributor
  3. Interactive CVE Explorer:
     - Search & filter 12 credited CVEs:
       * Intel: CVE-2026-20906, CVE-2026-24693, CVE-2026-39452, CVE-2026-28707, CVE-2026-20903, CVE-2026-20728, CVE-2026-20770, CVE-2026-21400, CVE-2026-21387, CVE-2026-20755
       * Microsoft: CVE-2026-23654
       * NVIDIA: CVE-2025-33208
     - Clean card/table view with direct links to NVD/CVE details, tags (RCE, Low-Level, Cloud, AI).
  4. Hall of Fame / Acknowledgements Matrix:
     - Categorized filter tabs (All, Tech Giants, Blockchain, Cloud/Infra, DevTools, Government):
       * Microsoft, Google, OpenAI, Intel, NVIDIA, Meta Inc., PayPal, IBM, NASA, Maryland.gov, Indian Gov (*.gov.in), Tamil Nadu Gov, Consensys, MetaMask, Coinbase, MoonPay, Brave, AWS, Azure, Linux Foundation Decentralized Trust, Kubernetes, HackerOne, Bugcrowd, Mozilla, Figma, Autodesk, etc.
  5. Work Experience & Security Tooling:
     - Veryon: Security Engineer (Apr 2026 - Present) & Cybersecurity Intern (Aug 2025 - Mar 2026). Playwright vulnerability scanner, SDLC security, Cortex XDR, CrowdStrike, Cloudflare WAF, Rapid7, Prisma Cloud.
     - Open Source: Enten (supply chain mitigation tool, enten-alpha.vercel.app).
     - Published Paper: "Hidden Supply Chain Attacks: Poisoned Artifacts in Continuous Deployment Workflows" (Zenodo DOI link).
  6. Education, CTF & Leadership:
     - BE in CSE (Cybersecurity) at SRM Easwari Engineering College (CGPA 8.54).
     - Lead Organizer AnzenCTF (150+ participants, 10+ custom challenges, anzenctf.tech).
     - Certifications: ISC2 Certified in Cybersecurity, Cisco Network Basics, IITM OS Challenge Winner.
  7. Interactive extras:
     - Quick "Download / View Resume" modal or trigger.
     - Clean search bar at the top to quickly jump to any section, CVE, or company name.
     - Smooth toggle for quick reading mode vs dense view.

Ensure responsive design on mobile and desktop with immediate load speed and razor-sharp contrast.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/41f9d4d1-a37f-4880-85d1-0b8b69762acb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
