import React from "react";

import { View, Text, TextInput, Button } from "react-native";

export function Login({ navigation }) {
  const { useState } = React;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    navigation.navigate("Books");
    console.log("UserName", userName);
    console.log("Password", password);

    if (userName === "admin" && password === "1234") {
      navigation.navigate("Books");
      console.log("Login!!");
    }
  }
  return (
    <View>
      <View>
        <Text>Username:</Text>
        <TextInput
          onChange={(value) => setUserName(value)}
          placeholder="user name"
        ></TextInput>
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          onChange={(value) => setPassword(value)}
          placeholder="password"
        ></TextInput>
      </View>

      <Button title="Login" onPress={() => handleLogin()} />
    </View>
  );
}
