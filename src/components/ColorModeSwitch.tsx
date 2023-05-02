import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onToggleSwitch: () => void;
}

const ColorModeSwitch = ({ onToggleSwitch }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="purple" // <- color uSafe (opcional)
        isChecked={colorMode === "dark"}
        onChange={() => {
          toggleColorMode();
          onToggleSwitch();
        }}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
