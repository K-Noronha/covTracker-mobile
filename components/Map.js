import React from "react";
import { View, Image } from "react-native";
import mapimg from "../images/map.png";

const Map = () => {
  return (
    <View>
      <Image
        source={mapimg}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
};
export default Map;
