import { View, Text } from "react-native";
import React from "react";
import ChildComponents from "./ChildComponents";

const ParentComponents = () => {
  // props are passed to the child component

  return (
    <View>
      <Text>Parent Components</Text>
      <ChildComponents name="Yakubu" age={22} />
    </View>
  );
};

export default ParentComponents;
