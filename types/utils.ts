export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type ValueOf<T> = T[keyof T]
