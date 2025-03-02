import { View, Text, Button, Pressable } from "react-native";
import React from "react";

export default function ButtonComponet() {
  return (
    // Types of onPress
    <View>
      <Text>lets explore Buttons</Text>

      <Pressable
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
