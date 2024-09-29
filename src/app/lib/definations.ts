export type EstateFilters = {
  location?: string
  purpose?: 'buy' | 'rent' | string
  type?: 'house' | 'apartment' | 'land' | string
  price?: string
  area?: string
  rooms?: string
  page?: string
  limit?: string
  [key: string]: string | undefined
}
