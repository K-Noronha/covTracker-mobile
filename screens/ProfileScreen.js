import React, { Component } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../context";

class ProfileScreen extends Component {
  static contextType = UserContext;
  render() {
    let { name, email, phone, address } = this.context;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ padding: 50 }}>PROFILE SCREEN</Text>

        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Address: {address}</Text>
      </View>
    );
  }
}

export default ProfileScreen;
