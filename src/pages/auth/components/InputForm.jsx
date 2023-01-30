import { FormControl, FormLabel, Input } from '@chakra-ui/react'

function InputForm({ label, type, value, setValue, isDataValid = true }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        isInvalid={!isDataValid}
        onChange={setValue}
      />
    </FormControl>
  )
}

export default InputForm
