import React, { startTransition } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IButton } from "../../../types/ui/IButton";

const Button: React.FC<IButton> = ({ children, style, disabled, onClick }) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} style={style} onPress={onClick}>
        <Text>{children}</Text>
      </TouchableOpacity>
      s
    </View>
  );
};

export default Button;
