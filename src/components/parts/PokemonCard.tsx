import React from "react"
import NextLink from "next/link"
import { PokemonDetailType } from "@/lib/types"
import { Card, Heading, Image, Link } from "@chakra-ui/react"

type Props = {
  pokemon: PokemonDetailType
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card>
      <Link as={NextLink} href={pokemon.name}>
        <Heading as="h3" size="md" textAlign={"center"}>
          {pokemon.name}
        </Heading>
        <Image alt={pokemon.name} boxSize={"100px"} objectFit={"cover"} src={pokemon.sprites.front_default} />
      </Link>
    </Card>
  )
}
