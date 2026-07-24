// Role dates use "YYYY-MM"; end: null means ongoing ("Present"). Durations
// are computed at render time (see src/utils/duration.js) so they never go stale.
export const experience = [
  {
    company: "Cisco",
    location: "Zurich, Switzerland",
    employmentType: "Full-time",
    roles: [
      {
        title: "Senior Machine Learning Engineer",
        start: "2026-05",
        end: null,
        description:
          "I work on computer vision models powering Webex, contributing across the full lifecycle from research and model training to production. My current focus is on self-supervised encoders, along with object detection and instance segmentation architectures.",
      },
      {
        title: "AI Researcher",
        start: "2025-03",
        end: "2026-04",
        description:
          "Contributed to the AI Assistant for ThousandEyes. Developed LLM agents to retrieve and aggregate networking data. Built evaluation frameworks and designed methods for automatic prompt optimization.",
        link: {
          url: "https://medium.com/thousandeyes-engineering/llm-judges-on-autopilot-063eb7378092",
          label: "LLM Judges on Autopilot",
        },
      },
    ],
  },
  {
    company: "Cisco",
    location: "Vimercate, Lombardy, Italy",
    roles: [
      {
        title: "Student Researcher",
        start: "2021-06",
        end: "2024-10",
        description:
          "As part of my PhD, I designed and implemented machine learning algorithms to enhance fault detection in Cisco monitoring devices. This research led to two accepted international patents and four international publications.",
      },
    ],
  },
  {
    company: "Politecnico di Milano",
    location: "Milan, Lombardy, Italy",
    roles: [
      {
        title: "Teaching Assistant - Computer Science",
        start: "2022-06",
        end: "2024-09",
        subtitle: "Contract",
        description:
          "Delivered 100 hours of C coding frontal lectures to classes of 200+ students, covering algorithmic reasoning, memory management, control structures, and data structures (arrays, linked lists, binary trees).",
      },
      {
        title: "Research Fellow",
        start: "2021-06",
        end: "2021-10",
        subtitle: "Full-time",
        description:
          "Investigated classical and learning-based variants of RANSAC for multi-instance model fitting.",
      },
    ],
  },
];
