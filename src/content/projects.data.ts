export interface ProjectData {
  id: string
  title: string
  flagship?: boolean
  summary: string
  tech: string[]
  status: string
  publicRepo: boolean
}

// Repo slugs for the individual projects below were never confirmed, so
// "publicRepo" links go to the GitHub profile rather than a guessed URL —
// see profile.ts contact.github.
export const projects: ProjectData[] = [
  {
    id: 'mgs-canteen',
    title: 'MGS Canteen App',
    flagship: true,
    summary:
      'A cross-platform campus canteen ordering app — authentication, menu browsing, cart and checkout, built end to end on Flutter and Firebase.',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Provider'],
    status: 'Built — Android, iOS & Web',
    publicRepo: false,
  },
  {
    id: 'cost-control',
    title: 'Cost Control',
    summary:
      'An AI-powered subscription-waste manager — exploring how automation and AI can surface recurring costs that quietly accumulate.',
    tech: ['AI', 'Automation'],
    status: 'Concept / academic',
    publicRepo: false,
  },
  {
    id: 'se-academy',
    title: 'Software Engineering Academy',
    summary: 'A public, day-by-day learning journey through Python fundamentals, APIs, automation and backend development.',
    tech: ['Python'],
    status: 'Ongoing',
    publicRepo: true,
  },
  {
    id: 'quantacore',
    title: 'QuantaCore',
    summary: 'A personal "Jarvis"-style AI assistant project.',
    tech: ['Python'],
    status: 'Built',
    publicRepo: true,
  },
  {
    id: 'serve-them-fresh',
    title: 'Serve Them Fresh',
    summary: 'A website for a fresh-produce supplier — practical web development around a real business context.',
    tech: ['HTML', 'CSS'],
    status: 'Built',
    publicRepo: true,
  },
  {
    id: 'hercraft-hub',
    title: 'HerCraft Hub',
    summary: 'A local craft-community web project.',
    tech: ['PHP', 'XAMPP'],
    status: 'Built',
    publicRepo: true,
  },
  {
    id: 'grocery-list',
    title: 'Grocery List',
    summary: 'A full-stack grocery-list application, paired with linked research.',
    tech: ['Full-stack'],
    status: 'Built',
    publicRepo: true,
  },
  {
    id: 'fix-a-habit',
    title: 'Fix-A-Habit App',
    summary: 'A habit-building app.',
    tech: ['C#'],
    status: 'Built',
    publicRepo: true,
  },
]
