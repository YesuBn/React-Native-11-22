import React from "react";
import Navbar from "../components/Navbar";
import Post1 from "../components/Post1";
import Post2 from "../components/Post2";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Post1 />
        <Post2 />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
