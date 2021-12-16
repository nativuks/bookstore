import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

export function Book({ book }) {
  return (
    <View style={styles.card}>
      <Text numberOfLines={2} style={styles.title}>
        {book?.title}
      </Text>

      <Image
        style={styles.imageThumbnail}
        source={{
          uri: book.image,
        }}
      />
      <Text>Price: {book?.price}</Text>
    </View>
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
    flex: 1,
    textAlign: "center",
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
