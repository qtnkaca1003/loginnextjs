import {
  Box,
  Flex,
  RadioProps,
  StackProps,
  Text,
  TextProps,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react"
import React from "react"

function RadioCard({
  textProps,
  ...props
}: RadioProps & { textProps?: TextProps }) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Flex {...checkbox} alignItems="center">
        <Flex
          width={"2.5rem"}
          height={"2.5rem"}
          borderRadius="50%"
          backgroundColor="#f4f4f4"
          boxShadow={
            props.isChecked
              ? "inset 1px 0px 2px #cbcbcb, inset -2px -2px 5px #fff"
              : "-2px -2px 5px #fff, 3px 3px 10px #cbcbcb"
          }
          position="relative"
          ml="3px"
          alignItems="center"
          justifyContent="center"
          mt="3px"
        >
          <Box
            width={props.isChecked ? "1rem" : "1.1rem"}
            height={props.isChecked ? "1rem" : "1.1rem"}
            borderRadius="50%"
            backgroundColor={props.isChecked ? "#f56000" : "#89898b"}
          />
        </Flex>
        <Text
          fontSize="1.2rem"
          fontWeight="bold"
          lineHeight="1.8rem"
          whiteSpace="nowrap"
          display="inline-block"
          marginLeft="1.0rem"
          {...textProps}
        >
          {props.children}
        </Text>
      </Flex>
    </Box>
  )
}
interface Props {
  onChanged?(nextValue: string): void
  defaultValue: string
  options: { name: string; value: string }[]
  textProps?: TextProps
}
function RadioCircleGroup({
  onChanged,
  defaultValue,
  options,
  textProps,
  ...stackProps
}: Props & StackProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue,
    onChange: onChanged,
  })
  const group = getRootProps()

  return (
    <VStack
      {...group}
      className="hide-scroll-bar"
      position="relative"
      spacing="2.0rem"
      {...stackProps}
    >
      {options.map(({ name, value }) => {
        const radio = getRadioProps({ value })

        return (
          <RadioCard key={value} {...radio} textProps={textProps}>
            {name}
          </RadioCard>
        )
      })}
    </VStack>
  )
}

export { RadioCard, RadioCircleGroup }
