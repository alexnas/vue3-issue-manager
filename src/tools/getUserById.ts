import type { IUser } from '@/types'

export const getUserById = (users: IUser[], id?: number) => {
  const foundUser = users?.find((user) => Number(user.id) === Number(id))
  return foundUser || null
}
