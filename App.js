import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { UserProvider } from "./context";
import Navigator from "./Navigator";

export default function App() {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
