import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryDetails = (props) => {
  return (
    <View>
      <Text>detalis screen</Text>
  {/* <Text>{props.navigation.params.id}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryDetails;
