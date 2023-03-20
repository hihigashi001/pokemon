import { usePokemonList } from "@/lib/usePokemonList"
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { Error } from "@/components/parts/Error"
import { Layout } from "@/components/parts/Layout"
import { Loading } from "@/components/parts/Loading"
import { PokemonCard } from "@/components/parts/PokemonCard"
import { SharedButton } from "@/components/parts/SharedButton"

export const HomePage = () => {
  const { pokemonList, isLoading, errorObject, hendlerPrevClick, hendlerNextClick, isPrev, isNext } = usePokemonList()

  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  if (errorObject)
    return (
      <Layout title="ポケモンエラーページ">
        <Error error={errorObject} />
      </Layout>
    )

  return (
    <Layout>
      <Flex gap={6} justifyContent="center" margin={6}>
        <SharedButton disabled={isPrev} label="前のページ" onClick={hendlerPrevClick} />
        <SharedButton disabled={isNext} label="次のページ" onClick={hendlerNextClick} />
      </Flex>
      <Grid gap={6} templateColumns="repeat(4, 1fr)">
        {pokemonList?.map((pokemon) => (
          <GridItem key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}
