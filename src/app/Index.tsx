import { View, Text } from "react-native";
import React from "react";
import ChildComponents from "../components/ChildComponents";
import ParentComponents from "../components/ParentComponents";
function Index() {
  return (
    <View>
      <ChildComponents />
      <ParentComponents />
    </View>
  );
}

export default Index;
