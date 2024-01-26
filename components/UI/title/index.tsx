import React, { Children, memo } from "react";
import { Text, View } from "react-native";
import { ITitle } from "../../../types/ui/ITitle";

const Title: React.FC<ITitle> = ({ children }) => {
  console.log("title render");

  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default memo(Title);
