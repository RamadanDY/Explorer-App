import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/Greet";
import ComponentA from "../components/ComponentA";

function Index() {
  return (
    <View>
      <Greet />
      <ComponentA />
    </View>
  );
}

export default Index;
