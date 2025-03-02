import { View, Text, Button } from "react-native";
import React from "react";

export default function ButtonComponet() {
  return (
    <View>
      {/* how to use buttons ||| we can also disable the btn by using  the disabled keyword */}
      <Text>lets explore Buttons</Text>
      <Button title="press me " color="#736466" />
      <Button
        title="press me"
        color="pink"
        onPress={() => {
          console.warn("pressed");
          alert("u pressed me");
        }}
      ></Button>
    </View>
  );
}
