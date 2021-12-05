import React from "react";
import { View, Image, StyleSheet } from "react-native";

import PostTwoText from "../components/PostTwoText";
export default function () {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/Enkhsaikhan_2.png")}
      />
      <PostTwoText />
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
