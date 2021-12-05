import React from "react";
import { View, Image, StyleSheet } from "react-native";

import PostOneText from "../components/postOneText";
export default function () {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/Anudari_1.png")}
      />
      <PostOneText />
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "55%",
    borderRadius: 35,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
