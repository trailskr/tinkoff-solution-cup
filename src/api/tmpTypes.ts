export interface PagedList<T> {
  limit: number
  skip: number
  total: number
  data: T[]
}

export interface Error {
  message: string
  code?: string | null
  fields?:
    | {
        [key: string]: unknown
      }[]
    | null
}
