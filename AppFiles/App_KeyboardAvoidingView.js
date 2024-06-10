import React from "react";
import { View, TextInput, Image, StyleSheet, Dimensions, KeyboardAvoidingView } from "react-native";
import logo from "./assets/logo.png";

const window = Dimensions.get("window");

const IMAGE_HEIGHT = window.width / 2;

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={300}>
      <Image source={logo} style={styles.logo} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4c69a5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
    paddingLeft: 10,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },
  register: {
    marginBottom: 20,
    width: window.width - 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#ffae",
  },
});

export default App;
