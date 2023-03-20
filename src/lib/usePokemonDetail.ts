import { useRouter } from "next/router";
import { getPokemonDetail } from "@/lib/apis";
import useSWR from "swr";
import { PokemonDetailType } from "./types";


const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://pokeapi.co/api/v2/pokemon/"

export const usePokemonDetail = () => {
  const router = useRouter()
  const { name } = router.query
  const { data, error } = useSWR<PokemonDetailType, Error>(name ? `${apiUrl}${name}` : null, getPokemonDetail)

  const onClickBack = () => {
    router.back()
  }

  return {
    data,
    isLoading: !data && !error,
    errorObject: error,
    onClickBack,
  }
}