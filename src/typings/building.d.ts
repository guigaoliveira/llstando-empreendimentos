export type Address = {
  street_type: string
  street: string
  number: number
  area: string
  city: string
  latitude: number
  longitude: number
  state: string
  zip_code: string
}

export type DefaultImage = {
  id: string
  description: string
  '200x140': string
  '520x280': string
}

export type Building = {
  readonly id: number
  readonly name: string
  readonly min_price: number
  readonly address: Address
  readonly default_image?: DefaultImage
  readonly min_bedrooms: number
  readonly max_bedrooms: number
  readonly min_bathrooms: number
  readonly max_bathrooms: number
  readonly max_area: number
  readonly min_parking: number
  readonly max_parking: number
}
