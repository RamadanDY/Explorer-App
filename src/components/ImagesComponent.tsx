import { View, Text, Image } from "react-native";
import React from "react";

export default function ImagesComponent() {
  return (
    <View>
      <Image
        source={require("../assets/passport.jpeg")}
        style={{ borderRadius: 100, width: 100, height: 100 }}
      />
    </View>
  );
}
