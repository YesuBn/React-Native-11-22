import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function () {
  return (
    <View style={styles.notch}>
      <Image
        style={styles.sideBar}
        source={require("../../assets/icons8-menu-24.png")}
      />
      <Text style={styles.notchText}>Hello!{"\n"} Good afternoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notch: {
    width: "100%",
    height: "12%",
    marginBottom: 20,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    backgroundColor: "#773537",
    justifyContent: "center",
    alignItems: "center",
  },
  notchText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  sideBar: {
    position: "absolute",
    left: 20,
  },
});
