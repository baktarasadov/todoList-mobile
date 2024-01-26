import React, { memo } from "react";
import { ITodoList } from "../../../types/todo/ITodo";
import { FlatList, View } from "react-native";
import TodoItem from "../todoItem";

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo }) => {
  console.log("TodoList render");

  return (
    <View
      style={{
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5,
        marginTop: 7,
      }}
    >
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TodoItem deleteTodo={deleteTodo} id={item.id}>
              {item.text}
            </TodoItem>
          </View>
        )}
      />
    </View>
  );
};

export default memo(TodoList);
