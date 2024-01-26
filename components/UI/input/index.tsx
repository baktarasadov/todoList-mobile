import React, { memo } from "react";
import { TextInput, View } from "react-native";
import { IInput } from "../../../types/ui/IInput";

const Input: React.FC<IInput> = ({
  id,
  onChange,
  placeholder,
  style,
  value,
}) => {
  console.log("Input render");

  return (
    <View>
      <TextInput
        style={style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        id={id}
      />
    </View>
  );
};

export default memo(Input);
