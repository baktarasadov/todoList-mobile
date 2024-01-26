import React, { Children } from "react";
import { Text, View } from "react-native";
import { ITitle } from "../../../types/ui/ITitle";

const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Title;
