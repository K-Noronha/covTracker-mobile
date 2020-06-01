import React, { Component } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../context";

class ProfileScreen extends Component {
  static contextType = UserContext;
  render() {
    let { name } = this.context;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PROFILE SCREEN</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

export default ProfileScreen;
