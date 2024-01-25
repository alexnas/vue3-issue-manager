interface INavbarMenuItem {
  name: string
  label: string
  path: string
}

interface ISideMenuItem {
  name: string
  label: string
  path: string
  icon: string
}

interface IProject {
  id: string
  title: string
  description: string
  description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
}

export type { INavbarMenuItem, ISideMenuItem, IProject }
