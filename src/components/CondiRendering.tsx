import { View, Text } from "react-native";
import React from "react";

const ValidPassword = () => {
  return <Text>Valid Password</Text>;
};

const InvalidPassword = () => {
  return <Text>Invalid Password</Text>;
};

const Password = ({ isValid }: any) => {
  if (isValid) {
    return <ValidPassword />;
  } else {
    return <InvalidPassword />;
  }
};

const CondiRendering = () => {
  return (
    <View>
      <Text>CondiRendering</Text>
      <Password isValid={true} />
    </View>
  );
};

export default CondiRendering;
