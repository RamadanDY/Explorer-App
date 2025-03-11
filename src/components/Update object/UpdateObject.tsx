import { View, Text, Button } from "react-native";
import React from "react";
import { useState } from "react";

const UpdateObject = () => {
  const [movie, setmovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    setmovie({ ...movie, ratings: 5 });
  };
  return (
    <View>
      <Text>{movie.title} </Text>
      <Text>{movie.ratings} </Text>
      <Button title="Change Rating" onPress={handleClick} />
    </View>
  );
};

export default UpdateObject;
