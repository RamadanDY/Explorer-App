import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

const CondiRendering = () => {
  const [counter, setcounter] = useState(0);
  return (
    <View>
      <Text>counter: {counter}</Text>
      <Button
        title="Increment"
        onPress={() => setcounter(counter - 1)}
      ></Button>
    </View>
  );
};

export default CondiRendering;
