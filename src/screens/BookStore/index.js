import React from "react";

import { View, Text, TextInput } from "react-native";

import axios from "axios";
const URL = "https://api.itbook.store/1.0/new";
export default function Bookstore() {
  const fetchData = () => {};
  return (
    <View>
      <View>
        <Text>Username:</Text>
        <TextInput placeholder="user name"></TextInput>
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput placeholder="password"></TextInput>
      </View>
    </View>
  );
}
