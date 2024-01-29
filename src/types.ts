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
  id: number
  title: string
  description: string
  description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
}

interface IUser {
  id: number
  name: string
  email: string
  password: string
  roleId: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type IUserKeys = keyof IUser

interface IUserTableCol {
  field: IUserKeys
  title: string
}

interface IAuthResponse {
  token: string
  user: IUser
}

export type {
  INavbarMenuItem,
  ISideMenuItem,
  IProject,
  IUser,
  IAuthResponse,
  IUserKeys,
  IUserTableCol
}
