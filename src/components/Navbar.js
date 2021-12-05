import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Scheduling from "./Scheduling";

export default function () {
  return (
    <View style={styles.notch}>
      <View style={{ marginLeft: 20 }}>
        <Feather name="menu" size={24} color="white" />
      </View>
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
    alignItems: "flex-start",
    flexDirection: "column",
  },
  notchText: {
    position: "absolute",
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    alignSelf: "center",
  },
  sideBar: {},
});
