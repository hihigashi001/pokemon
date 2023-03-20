import { ApiResponseGetAllPokemonType, PokemonDetailType, PokemonListType } from "./types"

export const getAllPokemon = async (url: string): Promise<ApiResponseGetAllPokemonType> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPokemonDetail = async (name: string): Promise<PokemonDetailType> => {
  const response = await fetch(name)
  const data = await response.json()
  return data
}

export const getPokemonDetails = async (pokemonList: PokemonListType[]) => {
  const promises = pokemonList.map(async (pokemon) => {
    const response = await getPokemonDetail(pokemon.url)
    return response
  })
  const pokemonDetails = await Promise.all(promises)
  return pokemonDetails
}
