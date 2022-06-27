import { CheckIcon } from "@chakra-ui/icons"
import { Box, CheckboxProps, useCheckbox } from "@chakra-ui/react"
import React from "react"

function CheckCircle(props: CheckboxProps) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      cursor="pointer"
      justifyContent="center"
      borderRadius="5px"
      {...props}
    >
      <input {...input} />
      <Box
        w="2rem"
        h="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid #d4d4d4"
        borderRadius="50%"
        color="#d4d4d4"
        {...checkbox}
        _checked={{
          border: "1px solid #f56000",
          color: "#f56000",
        }}
      >
        <CheckIcon w="1rem" h="1rem" color="inherit" />
      </Box>
      {props.children}
    </Box>
  )
}

export { CheckCircle }
