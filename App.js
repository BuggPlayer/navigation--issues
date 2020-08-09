import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import TopCategorylist from "./screen/TopCategorylist";
import MaineStckaNavigatior from "./navigation/navigation";

export default function App() {
  return <MaineStckaNavigatior />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
