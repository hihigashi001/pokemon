import Head from "next/head"
import NextLink from "next/link"
import { Box, Container, Heading, Link } from "@chakra-ui/react"

type Props = {
  title?: string
  children: React.ReactNode
}

export const Layout = ({ title = "ポケモンリスト", children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Box as="header" bg="brand.700" color="white" p={4}>
        <Heading as="h1" size="lg">
          <Link as={NextLink} href="/">
            ポケモンリスト
          </Link>
        </Heading>
      </Box>
      <Container centerContent padding={"4"}>
        {children}
      </Container>
    </>
  )
}
