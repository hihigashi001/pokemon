import { Heading } from "@chakra-ui/react"

type Props = {
  error: Error
}

export const Error = ({ error }: Props) => {
  return (
    <Heading as={"h3"} color={"red"}>
      {error.message}
    </Heading>
  )
}
