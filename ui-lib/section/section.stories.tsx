import { Text, VStack, Wrap } from "@chakra-ui/react"
import { action } from "@storybook/addon-actions"
import React from "react"
import {
  CheckButton,
  CheckButtonGroup,
  CheckCircle,
  RadioButton,
  RadioButtonGroup,
} from "./index"

export default {
  title: "Components/Section",
}

export const _CheckCircle = () => (
  <VStack>
    <CheckCircle defaultIsChecked />
    <CheckCircle defaultIsChecked>
      <Text ml="1rem">Checkbox with Label</Text>
    </CheckCircle>
    <CheckCircle isDisabled>
      <Text ml="1rem">Checkbox Disabled</Text>
    </CheckCircle>
  </VStack>
)

export const _CheckButton = () => (
  <Wrap>
    <CheckButton h="2.3rem" defaultChecked>
      銀行引落
    </CheckButton>
    <CheckButton h="2.8rem">銀行引落 </CheckButton>
    <CheckButton h="3.8rem">特定 </CheckButton>
    <CheckButton h="3.8rem" minW="23.8rem">
      クレジットカード
    </CheckButton>
    <CheckButton h="3.8rem" isDisabled>
      特定 isDisabled
    </CheckButton>
  </Wrap>
)

export const _CheckButtonGroup = () => (
  <VStack>
    <Text>------------- Normal -----------</Text>
    <CheckButtonGroup
      defaultValue={["1"]}
      options={[
        { name: "1ヶ月", value: "1" },
        { name: "半年", value: "2" },
        { name: "1年", value: "3" },
        { name: "全期間", value: "4" },
      ]}
      onChanged={action("onChanged")}
      spacing="1rem"
    />
    <Text>------------- isDisabled -----------</Text>
    <CheckButtonGroup
      defaultValue={[]}
      options={[
        { name: "1ヶ月", value: "1", isDisabled: true },
        { name: "半年", value: "2", isDisabled: true },
        { name: "1年", value: "3", isDisabled: true },
        { name: "全期間", value: "4", isDisabled: true },
      ]}
      onChanged={action("onChanged")}
      spacing="1rem"
    />
  </VStack>
)

export const _RadioButton = () => (
  <VStack alignItems="flex-start">
    <RadioButton />
    <RadioButton defaultChecked>銀行引落</RadioButton>
    <RadioButton
      defaultChecked
      wrapProps={{
        border: "1px solid gray",
        borderRadius: "10px",
        p: "0 1.5rem",
        h: "4rem",
      }}
    >
      銀行引落
    </RadioButton>
  </VStack>
)

export const _RadioButtonGroup = () => (
  <RadioButtonGroup
    defaultValue={"1"}
    options={[
      { name: "出来高", value: "1" },
      { name: "移動平均線", value: "2" },
    ]}
    onChanged={action("onChanged")}
    spacing="2rem"
  />
)
