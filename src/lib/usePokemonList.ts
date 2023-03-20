import { useEffect } from "react"
import useSWR from "swr"
import { getAllPokemon, getPokemonDetails } from "./apis"
import { ApiResponseGetAllPokemonType, PokemonDetailType } from "./types"

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://pokeapi.co/api/v2/pokemon/"

export const usePokemonList = () => {
  const {
    data: pokemonList,
    error: listError,
    mutate: mutateList,
  } = useSWR<ApiResponseGetAllPokemonType, Error>(apiUrl, getAllPokemon)

  const {
    data: pokemonDetails,
    error: detailsError,
    mutate: mutateDetails,
  } = useSWR<PokemonDetailType[], Error>(pokemonList?.results || [], getPokemonDetails)

  useEffect(() => {
    if (pokemonList && pokemonDetails) {
      mutateDetails(pokemonDetails, false)
    }
  }, [pokemonList, pokemonDetails, mutateDetails])

  const hendlerPrevClick = async () => {
    if (pokemonList?.previous) {
      mutateList(await getAllPokemon(pokemonList.previous), false)
    }
  }

  const hendlerNextClick = async () => {
    if (pokemonList?.next) {
      mutateList(await getAllPokemon(pokemonList.next), false)
    }
  }

  return {
    pokemonList: pokemonDetails,
    isLoading: !pokemonDetails && !listError,
    errorObject: listError || detailsError,
    hendlerPrevClick,
    hendlerNextClick,
    isPrev: !!pokemonList?.previous,
    isNext: !!pokemonList?.next,
  }
}
