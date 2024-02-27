const makeSortedByProperty = <T extends Object>(
  sortProperty: keyof T,
  sortOrder: 'asc' | 'desc'
) => {
  const compareFn = (a: T, b: T) => {
    const val1 = a[sortProperty]
    const val2 = b[sortProperty]
    const order = sortOrder !== 'desc' ? 1 : -1

    switch (typeof val1) {
      case 'number': {
        const valb = val2 as number
        const result = val1 - valb
        return result * order
      }
      case 'string': {
        const valb = val2 as string
        const result = val1.localeCompare(valb)
        return result * order
      }
      case 'boolean': {
        const vala = Number(val1)
        const valb = val2 as number
        const result = vala - valb
        return result * order
      }

      default:
        return 0
    }
  }
  return compareFn
}

export { makeSortedByProperty }
