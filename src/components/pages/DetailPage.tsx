import { usePokemonDetail } from "@/lib/usePokemonDetail"
import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Error } from "@/components/parts/Error"
import { Layout } from "@/components/parts/Layout"
import { Loading } from "@/components/parts/Loading"
import { SharedButton } from "@/components/parts/SharedButton"

export const DetailPage = () => {
  const { data, errorObject, isLoading, onClickBack } = usePokemonDetail()

  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  if (errorObject)
    return (
      <Layout title="ポケモンエラーページ">
        <Flex gap={6} justifyContent="center" margin={6}>
          <SharedButton label="前のページに戻る" onClick={onClickBack} />
        </Flex>
        <Error error={errorObject} />
      </Layout>
    )

  return (
    <Layout title="ポケモン詳細ページ">
      <Flex gap={6} justifyContent="center" margin={6}>
        <SharedButton label="前のページに戻る" onClick={onClickBack} />
      </Flex>
      <Heading as="h2">{data?.name}</Heading>
      <Image alt={data?.name} boxSize={"200px"} objectFit={"cover"} src={data?.sprites.front_default} />
      <Text>Height: {data?.height}</Text>
      <Text>Weight: {data?.weight}</Text>
    </Layout>
  )
}
