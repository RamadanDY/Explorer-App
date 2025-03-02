import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/Greet";
import ComponentA from "../components/ComponentA";
import ButtonComponet from "../components/ButtonComponet";
import ImagesComponent from "../components/ImagesComponent";

function Index() {
  return (
    <View>
      <Greet />
      <ComponentA />
      <ButtonComponet />
      <ImagesComponent />
    </View>
  );
}

export default Index;
