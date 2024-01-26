import React from "react";
import { Text, View } from "react-native";
import { ITodoItem } from "../../../types/todo/ITodo";
import Button from "../../UI/button";

const TodoItem: React.FC<ITodoItem> = ({ children, deleteTodo, id }) => {
  console.log("TodoItem render");

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text>{children}</Text>
        <Button
          onClick={() => deleteTodo(id)}
          style={{ backgroundColor: "red" }}
        >
          X
        </Button>
      </View>
    </View>
  );
};

export default TodoItem;
