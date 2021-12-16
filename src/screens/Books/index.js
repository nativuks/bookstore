import React from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import { Book } from "../../components/Book";

import axios from "axios";

export function Books() {
  const URL = "https://api.itbook.store/1.0/new";
  const { useEffect, useState } = React;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setBooks(response.data["books"]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          numColumns={3}
          data={books}
          keyExtractor={(book, index) => index}
          renderItem={({ item: book }) => <Book book={book} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  title: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
  },
});
