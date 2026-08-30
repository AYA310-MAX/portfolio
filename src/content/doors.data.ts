export type DoorGlyph = 'about' | 'projects' | 'skills' | 'leadership' | 'contact'

export interface DoorData {
  id: string
  glyph: DoorGlyph
  title: string
  subtitle: string
  routePath: string
}

export const doors: DoorData[] = [
  { id: 'about', glyph: 'about', title: 'About', subtitle: 'Who walks this path', routePath: '/about' },
  { id: 'projects', glyph: 'projects', title: 'Projects', subtitle: 'What has been built', routePath: '/projects' },
  { id: 'skills', glyph: 'skills', title: 'Skills', subtitle: 'The tools carried', routePath: '/skills' },
  { id: 'leadership', glyph: 'leadership', title: 'Leadership', subtitle: 'Who else walks with me', routePath: '/leadership' },
  { id: 'contact', glyph: 'contact', title: 'Contact', subtitle: 'Where the path leads', routePath: '/contact' },
]
