import { View, Text } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: number;
}

const ChildComponents = ({ name, age }: ChildProps) => {
  return (
    <View>
      <Text>ChildComponents</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default ChildComponents;
