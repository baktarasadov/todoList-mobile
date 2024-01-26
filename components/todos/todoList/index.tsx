import React, { memo } from "react";
import { ITodoList } from "../../../types/todo/ITodo";
import { FlatList, View } from "react-native";
import TodoItem from "../todoItem";

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  console.log("TodoList render");

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TodoItem>{item.text}</TodoItem>
          </View>
        )}
      />
    </View>
  );
};

export default memo(TodoList);
