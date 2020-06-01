import React from "react";
import { View, Text } from "react-native";
import Map from "../components/Map";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> HOME PAGE</Text>
      <Map />
    </View>
  );
};

export default HomeScreen;
