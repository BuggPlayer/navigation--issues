import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopCategorylist from "./TopCategorylist";

const MaineFiles = (props) => {
  return (
   <TopCategorylist />
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

export default MaineFiles;
