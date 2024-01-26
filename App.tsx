import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "./components/UI/title";
import Input from "./components/UI/input";
import { useState } from "react";
import { inputStyles } from "./styles/ui/input";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Button from "./components/UI/button";
import { buttonStyles } from "./styles/ui/button";
import { ITodo } from "./types/todo/ITodo";
// import { ITodoItem } from "./types/todo/ITodo";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [erorrMessage, setErrorMessage] = useState<string>();

  const handleClick = (): void => {
    let trim: string = todo?.trim();
    if (trim.length < 3) {
      setErrorMessage("Todo must be at least 3 characters long");
    } else if (todos.find((element) => trim == element.text) != null) {
      setErrorMessage("Todo already saved! ");
    } else {
      setTodos([...todos, { id: Date.now(), text: trim }]);
      console.log(todo);
      setErrorMessage("");
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <Title>Todo List</Title>
      <Text>
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
        <Text>{erorrMessage}</Text>
      </Text>
      <Text>{todo}</Text>
      <Footer />
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
