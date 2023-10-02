import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ComponentsScreen = () => {
  const friends = [
    { name: "John" },
    { name: "Barbie" },
    { name: "Sam" },
    { name: "Emma" },
    { name: "Mackie" },
    { name: "Mike" },
  ];

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <FlatList data={friends} renderIte />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
