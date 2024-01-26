import React, { memo, startTransition } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IButton } from "../../../types/ui/IButton";

const Button: React.FC<IButton> = ({ children, style, disabled, onClick }) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} style={style} onPress={onClick}>
        <Text style={{ color: "white" }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Button);
