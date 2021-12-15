import React from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

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
        <Text>BookStore</Text>
        <Text>{books.length}</Text>
        <FlatList
          numColumns={3}
          data={books}
          keyExtractor={(book, index) => index}
          renderItem={(book) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1,
              }}
            >
              <Text style={styles.title}>Title: {book?.title}</Text>
              <Text>Price: {book?.price} $</Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: `https://itbook.store/img/books/9781617295645.png`,
                }}
              />
            </View>
          )}
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
  },
});
