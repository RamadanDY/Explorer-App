import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObjects = () => {
  const anArray = [
    { id: 23331, name: "kofi" },
    { id: 23332, name: "kwame" },
    { id: 23333, name: "ama" },
    { id: 23334, name: "yaw" },
  ];

  return (
    // note that these are not strings but numbers so we hv to convert them to stings
    <View>
      <Text>ArrayOfObjects</Text>
      <FlatList
        data={anArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfObjects;
