export type PokemonListType = {
  name: string
  url: string
}

export type ApiResponseGetAllPokemonType = {
  count: number
  next?: string
  previous?: string
  results: PokemonListType[]
}

export type PokemonDetailType = {
  name: string
  sprites: SpritesType
  height: number
  weight: number
}
type SpritesType = {
  front_default: string
}
