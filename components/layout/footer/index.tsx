import React, { memo } from "react";
import { Text, View } from "react-native";

const Footer = () => {
  console.log("Foooter render");

  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
};

export default memo(Footer);
