import React from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  ToastAndroid,
} from "react-native";

export function Login({ navigation }) {
  const { useState } = React;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (userName === "admin" && password === "1234") {
      navigation.navigate("Books");
      console.log("Login!!");
    } else {
      showToastWithGravity();
    }
  }

  function addUserName(value) {
    console.log({ value });
  }

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "User name or password incorrect",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_960_720.jpg",
          }}
        />
        <View style={styles.fields}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={(value) => setUserName(value)}
            placeholder="user name"
          ></TextInput>
        </View>
        <View style={styles.fields}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="password"
          ></TextInput>
        </View>

        <Button title="Login" onPress={() => handleLogin()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  fields: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    marginRight: 5,
  },
  input: {
    width: "80%",
    color: "#555555",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    height: "100%",
    borderColor: "#6E5BAA",
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },

  title: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
