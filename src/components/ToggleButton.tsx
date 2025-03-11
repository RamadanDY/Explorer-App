import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const ToggleButton = () => {
  // we save the initial  state
  const [isOn, isOff] = useState(false);
  return (
    <View>
      {/* so we check if its on we render this text and if its  not we render off */}
      <Text>{isOn ? "On" : "off"}</Text>
      {/* a btn to click the btn to activate or change  */}
      <Button title="Toggle" onPress={() => isOff(!isOn)} />
    </View>
  );
};

export default ToggleButton;
