import { Button } from "@chakra-ui/react"

type Props = {
  onClick: () => void
  label: string
  disabled?: boolean
}

export const SharedButton = ({ onClick, label, disabled = false }: Props) => {
  const variant = disabled ? "solid" : "outline"
  return (
    <Button colorScheme="blue" disabled={disabled} onClick={onClick} variant={variant}>
      {label}
    </Button>
  )
}
