interface INameById {
  id: number
}

const getItemById = <T extends INameById>(items: T[], id: number): T | null => {
  const idx = items.findIndex((item) => item && item.id && +item.id === +id)
  return idx === -1 ? null : items[idx]
}

export { getItemById }
