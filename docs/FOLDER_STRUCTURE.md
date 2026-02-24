# WRS Repository Folder Structure

This document maps navigation items with sub-pages to their logical grouping for easy access and maintenance.

## Current Structure (Implemented)

```
wiring-website-WRS/
├── home.html
├── why-us.html
├── pricing.html
├── about.html
├── jobs.html
├── faq.html
├── blogs.html
├── book-consultation.html
├── thank-you.html
├── admin.html
├── WorkforceRecruitmentSolution-hr.html
│
├── solutions/                    ← Solutions nav (mega menu)
│   ├── solutions.html            (Main landing: 4 solution types)
│   ├── employer-solutions.html   (Employers)
│   └── enterprise-global.html    (Enterprise + Global)
│
├── services/                     ← Services nav (dropdown)
│   ├── services.html             (Recruitment)
│   ├── hr-services.html          (HR Consultations)
│   └── recruitment-process.html  (Process/Workforce Planning)
│
├── employer/                     ← Employer portal
│   ├── employer-login.html
│   ├── employer-register.html
│   └── employer-dashboard.html
│
├── candidate/                    ← Job seeker portal
│   ├── candidate-login.html
│   ├── candidate-register.html
│   └── candidate-dashboard.html
│
├── platform/                     ← Platform & technology pages
│   ├── platform.html
│   ├── automation.html
│   └── ai-platform.html
│
├── legal/                        ← Legal pages
│   ├── privacy.html
│   └── terms.html
│
├── css/                          ← Stylesheets
│   ├── styles.css
│   ├── styles-portal.css
│   ├── admin-styles.css
│   └── styles-hr.css
│
├── js/                           ← Scripts
│   ├── script.js
│   ├── admin-script.js
│   └── auth.js
│
├── docs/                         ← Documentation
│   ├── FOLDER_STRUCTURE.md
│   ├── NAVIGATION.md
│   ├── CONFIGURATION.md
│   └── … (deployment, setup guides)
│
├── Assets/                       ← Images, logos
├── README.md
├── LICENSE.md
└── vercel.json, robots.txt, sitemap.xml, …
```

## Navigation → File Mapping

| Nav Item | Sub-pages | Location |
|----------|-----------|----------|
| **Solutions** | Main, Employers, Enterprise, Global | `solutions/` |
| **Services** | Recruitment, HR Consultations, Recruitment Process | `services/` |
| **Employer Portal** | Login, Register, Dashboard | `employer/` |
| **Candidate Portal** | Login, Register, Dashboard | `candidate/` |
| **Platform** | Main, Automation, AI | `platform/` |
| **Legal** | Privacy, Terms | `legal/` |
| **Main pages** | Home, Why Us, Pricing, About, Jobs, FAQ, Blogs | Root |

## Notes

- **Root HTML** pages use `css/`, `js/` for assets; **subfolder** pages use `../css/`, `../js/`, `../Assets/`.
- Vercel redirects point to the correct subfolder paths (e.g. `/solutions` → `/solutions/solutions.html`).
- Documentation lives in `docs/`; README and LICENSE stay at root.
