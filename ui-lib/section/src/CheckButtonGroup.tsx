import {
  Box,
  CheckboxProps,
  HStack,
  StackProps,
  Text,
  TextProps,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react"
import React from "react"

function CheckButton({
  textProps,
  ...props
}: CheckboxProps & { textProps?: TextProps }) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Text
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="50px"
        bgColor="#f4f4f4"
        color={props.isDisabled ? "#89898b" : "#f56000"}
        borderColor={props.isDisabled ? "#89898b" : "#f56000"}
        _checked={{
          color: "white",
          borderColor: "#f56000",
          bgColor: "#f56000",
        }}
        px="1rem"
        py={0}
        verticalAlign="middle"
        minW={props.minW || "7.6rem"}
        fontSize="1.2rem"
        lineHeight={props.h || "2.3rem"}
        fontWeight="500"
        whiteSpace="nowrap"
        display="inline-block"
        textAlign="center"
        {...textProps}
      >
        {props.children}
      </Text>
    </Box>
  )
}
interface Props {
  onChanged?(value: string[]): void
  defaultValue: string[]
  options: { name: string; value: string; isDisabled?: boolean }[]
}
function CheckButtonGroup({
  options,
  onChanged,
  defaultValue,
  ...stackProps
}: Props & StackProps) {
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue,
    onChange: onChanged,
  })

  return (
    <HStack
      className="hide-scroll-bar"
      overflowX="auto"
      position="relative"
      spacing="1rem"
      {...stackProps}
    >
      {options.map(({ name, value, isDisabled }) => {
        const checkbox = getCheckboxProps({ value })

        return (
          <CheckButton key={value} isDisabled={isDisabled} {...checkbox}>
            {name}
          </CheckButton>
        )
      })}
    </HStack>
  )
}

export { CheckButton, CheckButtonGroup }
