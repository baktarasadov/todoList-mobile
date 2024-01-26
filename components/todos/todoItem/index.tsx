import React from "react";
import { Text, View } from "react-native";
import { ITodoItem } from "../../../types/todo/ITodo";
import Button from "../../UI/button";

const TodoItem: React.FC<ITodoItem> = ({ children, deleteTodo, id }) => {
  console.log("TodoItem render");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          borderStyle: "solid",
          borderColor: "green",
          borderWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
          backgroundColor: "blue",
          paddingHorizontal: 8,
          paddingVertical: 4,
        }}
      >
        <Text style={{ color: "white" }}>{children}</Text>
        <Button
          onClick={() => deleteTodo(id)}
          style={{
            backgroundColor: "red",
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderRadius: 5,
          }}
        >
          X
        </Button>
      </View>
    </View>
  );
};

export default TodoItem;
