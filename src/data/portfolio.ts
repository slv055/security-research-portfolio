export type Cve = {
  id: string;
  vendor: "Intel" | "Microsoft" | "NVIDIA";
  year: number;
  tags: string[];
};

// 12 publicly credited CVEs, exactly as credited on the resume.
export const CVES: Cve[] = [
  { id: "CVE-2026-20906", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-24693", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-39452", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-28707", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-20903", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-20728", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-20770", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-21400", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-21387", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-20755", vendor: "Intel", year: 2026, tags: ["Low-Level"] },
  { id: "CVE-2026-23654", vendor: "Microsoft", year: 2026, tags: ["Cloud"] },
  { id: "CVE-2025-33208", vendor: "NVIDIA", year: 2025, tags: ["RCE", "Low-Level"] },
];

export type OrgCategory =
  | "Tech Giants"
  | "Blockchain"
  | "Cloud/Infra"
  | "DevTools"
  | "Government";

export const ORG_CATEGORIES: OrgCategory[] = [
  "Tech Giants",
  "Blockchain",
  "Cloud/Infra",
  "DevTools",
  "Government",
];

export const HALL_OF_FAME: { name: string; category: OrgCategory }[] = [
  // Tech Giants
  { name: "Microsoft", category: "Tech Giants" },
  { name: "Google", category: "Tech Giants" },
  { name: "OpenAI", category: "Tech Giants" },
  { name: "Intel", category: "Tech Giants" },
  { name: "NVIDIA", category: "Tech Giants" },
  { name: "Meta Inc.", category: "Tech Giants" },
  { name: "PayPal", category: "Tech Giants" },
  { name: "IBM", category: "Tech Giants" },
  // Blockchain
  { name: "Consensys", category: "Blockchain" },
  { name: "MetaMask", category: "Blockchain" },
  { name: "Coinbase", category: "Blockchain" },
  { name: "MoonPay", category: "Blockchain" },
  { name: "Brave", category: "Blockchain" },
  // Cloud / Infra
  { name: "AWS", category: "Cloud/Infra" },
  { name: "Azure", category: "Cloud/Infra" },
  { name: "Linux Foundation Decentralized Trust", category: "Cloud/Infra" },
  { name: "Kubernetes", category: "Cloud/Infra" },
  // DevTools / Security platforms / Product companies
  { name: "HackerOne", category: "DevTools" },
  { name: "Bugcrowd", category: "DevTools" },
  { name: "Mozilla", category: "DevTools" },
  { name: "Figma", category: "DevTools" },
  { name: "Autodesk", category: "DevTools" },
  { name: "Nextcloud", category: "DevTools" },
  { name: "Mattermost", category: "DevTools" },
  { name: "DataStax", category: "DevTools" },
  { name: "Doppler", category: "DevTools" },
  { name: "Tor Project", category: "DevTools" },
  { name: "Mapbox", category: "DevTools" },
  { name: "HubSpot", category: "DevTools" },
  { name: "Kiwi.com", category: "DevTools" },
  { name: "LinkedIn", category: "DevTools" },
  { name: "OKG", category: "DevTools" },
  { name: "Faraday Inc.", category: "DevTools" },
  // Government
  { name: "NASA", category: "Government" },
  { name: "Maryland.gov", category: "Government" },
  { name: "*.gov.in — Government of India", category: "Government" },
  { name: "Tamil Nadu Government", category: "Government" },
];

export const CONTACT = {
  name: "S. Lakshmi Vignesh",
  handle: "w3shi",
  title: "Security Researcher & AppSec Engineer",
  email: "Slvignesh05@gmail.com",
  phone: "+91 8807149187",
  hackerone: "https://hackerone.com/w3shi",
  linkedin: "https://linkedin.com/in/lakshmi-vignesh-s",
};

export const LINKS = {
  enten: "https://enten-alpha.vercel.app",
  paper: "https://doi.org/10.5281/zenodo.17618882",
  anzenctf: "https://anzenctf.tech",
  nvd: (id: string) => `https://nvd.nist.gov/vuln/detail/${id}`,
  unstop: "https://unstop.com/u/slvig5835",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  kind: "full-time" | "internship" | "open-source" | "publication";
  summary: string;
  points: string[];
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Security Engineer",
    org: "Veryon",
    period: "Apr 2026 — Present",
    kind: "full-time",
    summary:
      "Security tooling, AppSec, and cloud & incident-response engineering at scale.",
    points: [
      "Built a Playwright-based scanner that detects OWASP Top 10 vulnerabilities across web assets automatically — drove a 40% reduction in critical vulnerabilities.",
      "Integrated security review into the SDLC pipeline so vulnerabilities are caught before reaching production; partnered with dev teams on remediation of critical and high-severity issues.",
      "Architected API security testing strategies against OWASP Top 10 and OWASP API Security Top 10; wrote PoC exploits to demonstrate risk and accelerate patch deployment.",
      "Hardened enterprise edge defences on Cloudflare — WAF rules, rate limiting, access controls, DNS security, and DDoS mitigation.",
      "Ran real-time endpoint monitoring and threat response on Palo Alto Cortex XDR, triaging alerts with Unit 42 threat intelligence to cut MTTD/MTTR.",
    ],
    stack: [
      "Playwright",
      "SDLC Security",
      "Cloudflare WAF",
      "Cortex XDR",
      "API Security",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "Veryon",
    period: "Aug 2025 — Mar 2026",
    kind: "internship",
    summary:
      "AppSec source review, SOC tooling, and vulnerability management automation.",
    points: [
      "Reduced critical vulnerabilities through source code review and vulnerability-reduction tooling; reported and helped remediate flaws in Veryon's web assets.",
      "Monitored and triaged alerts on CrowdStrike EDR/SIEM; configured automated incident-response workflows for real-time threat detection.",
      "Deployed Rapid7 InsightVM scan engines for continuous vulnerability assessment of web assets.",
      "Implemented security controls in Prisma Cloud for cloud infrastructure protection and compliance monitoring; improved alert accuracy with IOC enrichment.",
    ],
    stack: [
      "CrowdStrike",
      "Rapid7 InsightVM",
      "Prisma Cloud",
      "IOC Enrichment",
      "Source Review",
    ],
  },
  {
    role: "Enten — Open Source",
    org: "Supply chain mitigation tool",
    period: "Ongoing",
    kind: "open-source",
    summary:
      "Open-source tool that mitigates supply chain vulnerabilities in GitHub repositories.",
    points: [
      "Detects and helps remediate poisoned-artifact and dependency risks in CI/CD workflows before they reach deployment.",
    ],
    stack: ["Supply Chain", "CI/CD", "GitHub"],
  },
  {
    role: "Hidden Supply Chain Attacks: Poisoned Artifacts in Continuous Deployment Workflows",
    org: "Published paper — Zenodo",
    period: "2025",
    kind: "publication",
    summary:
      "Research on poisoned artifacts in continuous deployment pipelines and practical mitigations for software supply chains.",
    points: [
      "DOI: 10.5281/zenodo.17618882",
    ],
    stack: ["Supply Chain", "Research", "CI/CD"],
  },
];

export const STATS = [
  { value: "#1", label: "Globally", sub: "Intel Q1 2026 rankings" },
  {
    value: "MVR 2025",
    label: "Microsoft Most Valuable Researcher",
    sub: "#2 globally MSRC Q4 2025 · #5 Top Azure Researcher",
  },
  { value: "60+", label: "Disclosed vulnerabilities", sub: "Across 40+ top orgs" },
  { value: "12", label: "Public CVEs", sub: "Intel · Microsoft · NVIDIA" },
  {
    value: "NASA",
    label: "Letter of Recommendation",
    sub: "Security contributor",
  },
];

export const EDUCATION = {
  degree: "B.E. Computer Science & Engineering — Cybersecurity",
  school: "SRM Easwari Engineering College (Affiliated to Anna University), Chennai",
  period: "2022 — 2026",
  cgpa: "8.54",
};

export const LEADERSHIP = {
  title: "Lead Organizer — AnzenCTF",
  org: "SRM Easwari Engineering College",
  period: "May 2024 — Jan 2025",
  points: [
    "Ran 3 CTF editions with 150+ participants and 10+ custom challenges across web exploitation, cryptography, binary exploitation, and reverse engineering.",
    "Built and deployed the AnzenCTF platform for hands-on security training.",
    "Collaborated with the OWASP Open Source Club to promote cybersecurity education.",
    "Organized IITM Cyber Hackathon & tech events — workshops fostering community engagement in security research.",
  ],
};

export const CERTS = [
  "ISC2 Certified in Cybersecurity",
  "Cisco Certified — Network Basics",
  "OS Challenge Winner — IITM",
  "2nd Place — IITM Cryptic Hunt",
];

export const EXPERTISE = [
  "Remote Code Execution",
  "Web App Security",
  "AI Security",
  "Auth Bypass",
  "Security Automation",
  "EDR / XDR / SIEM",
  "Cloud & Edge Security",
  "Threat Intelligence",
  "Vulnerability Management",
  "Supply Chain Security",
];
