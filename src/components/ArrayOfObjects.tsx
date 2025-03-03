import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObjects = () => {
  const anArray = [
    { id: "2333-1", name: "kofi" },
    { id: "2333-2", name: "kwame" },
    { id: "2333-3", name: "ama" },
    { id: "2333-4", name: "yaw" },
  ];

  return (
    <View>
      <Text>ArrayOfObjects</Text>
      <FlatList
        data={anArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfObjects;
