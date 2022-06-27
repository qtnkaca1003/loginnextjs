import {
  Box,
  BoxProps,
  RadioProps,
  StackProps,
  Text,
  TextProps,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function RadioButton({
  textProps,
  wrapProps,
  ...props
}: RadioProps & { textProps?: TextProps; wrapProps?: BoxProps }) {
  const { getInputProps, getCheckboxProps, state } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      cursor="pointer"
      {...wrapProps}
    >
      <input {...input} />
      <Box
        w="2rem"
        h="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="#f2f2f2 0% 0% no-repeat padding-box"
        boxShadow="inset 0px 0px 6px #d5d5d5, inset 3px -1px 3px #fff"
        borderRadius="50%"
        mr="1rem"
      >
        <Box
          {...checkbox}
          w="1rem"
          h="1rem"
          borderRadius="50%"
          bgColor="transparent"
          _checked={{
            bgColor: "#f56000",
          }}
        ></Box>
      </Box>
      {props.children && (
        <Text
          color="#89898b"
          fontSize="1.4rem"
          {...(state.isChecked && {
            color: "#f56000",
            fontWeight: "bold",
          })}
          {...textProps}
        >
          {props.children}
        </Text>
      )}
    </Box>
  )
}

interface Props {
  onChanged?(nextValue: string): void
  defaultValue?: string
  value?: string
  options: { name: string; value: string }[]
  textProps?: TextProps
  isIcon?: boolean
}
function RadioButtonGroup({
  onChanged,
  defaultValue,
  options,
  textProps,
  isIcon,
  value,
  ...stackProps
}: Props & StackProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue,
    value,
    onChange: onChanged,
  })
  const group = getRootProps()

  return (
    <VStack
      {...group}
      position="relative"
      alignItems="flex-start"
      {...stackProps}
    >
      {options.map(({ name, value }) => {
        const radio = getRadioProps({ value })

        return (
          <RadioButton key={value} {...radio} textProps={textProps}>
            {name}
          </RadioButton>
        )
      })}
    </VStack>
  )
}

export { RadioButton, RadioButtonGroup }
