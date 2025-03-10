import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";

const UpArray = () => {
  // the list of names that are in the array are stored in the friends state and we can mutate it in
  //the setfriends state
  const [friends, setfriends] = useState(["Alex", "John", "Jordan"]);

  const addOne = () => {
    setfriends([...friends, "nope"]);
  };

  const remove = () => {
    setfriends(friends.filter((f) => f !== "HUH"));
  };

  const updateOne = () => {
    setfriends(friends.map((f) => (f = "Alex" ? "Alex Switch" : f)));
  };
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friends) => friends}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Text>UpArray</Text>

      <Button title="Add One" onPress={addOne} />
      <Button title="remove" onPress={remove} />
      <Button title="Update" onPress={updateOne} />
    </View>
  );
};

export default UpArray;
