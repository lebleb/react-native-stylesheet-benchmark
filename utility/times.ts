export const times = (limit: number, callback: (index: number) => any) => Array.from({ length: limit + 1 }, (_, index) => callback(index))
