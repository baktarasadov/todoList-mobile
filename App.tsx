import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "./components/UI/title";
import Input from "./components/UI/input";
import { useCallback, useState } from "react";
import { inputStyles } from "./styles/ui/input";
import Button from "./components/UI/button";
import { buttonStyles } from "./styles/ui/button";
import { ITodo } from "./types/todo/ITodo";
import TodoList from "./components/todos/todoList";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [erorrMessage, setErrorMessage] = useState<string>();

  const handleClick = (): void => {
    let trim: string = todo?.trim();
    if (trim.length < 3) {
      setErrorMessage("Todo must min be at least 3 characters long");
    } else if (todos.find((element) => trim == element.text) != null) {
      setErrorMessage("Todo already saved! ");
    } else if (trim.length > 12) {
      setErrorMessage("Todo must max be at least 12 characters long");
    } else {
      setTodos([...todos, { id: Date.now(), text: trim }]);
      console.log(todo);
      setErrorMessage("");
      setTodo("");
    }
  };

  const handleDelete = useCallback(
    (id: number) => {
      setTodos((prevTodos) => prevTodos.filter((element) => element.id !== id));
    },
    [setTodos]
  );
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        // width: "80%",
      }}
    >
      <View style={{ marginTop: 150 }}>
        <Title style={{ fontSize: 20, marginBottom: 10 }}>Todo List</Title>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Input
              id="todo"
              value={todo}
              onChange={(text) => setTodo(text)}
              placeholder="Add Todo"
              style={inputStyles.inputTodo}
            />
            <Button style={buttonStyles.addTodo} onClick={handleClick}>
              Add
            </Button>
          </View>
          <View>
            <Text style={{ color: "red", fontSize: 11 }}>{erorrMessage}</Text>
          </View>
        </View>
        <TodoList deleteTodo={handleDelete} todos={todos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
